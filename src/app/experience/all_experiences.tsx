"use client";

import Link from "next/link";
import type { dataType } from "./page";
import { useQuery } from "@tanstack/react-query";
import getContentfulData from "@/lib/get_contenful_data";
import ExperienceLoading from "./loading";

export default function AllExperiences() {
  const { data, isLoading } = useQuery({
    queryKey: ["experience"],
    queryFn: () => getContentfulData("experience"),
  });

  const allExperiences = data.map((entry) => entry.fields) as dataType;

  if (isLoading) {
    return <ExperienceLoading />;
  }

  return (
    <>
      {allExperiences.map((experience, experienceIndex) => (
        <li
          key={experienceIndex}
          className={`${
            experienceIndex !== allExperiences.length - 1 && "mb-10"
          } ms-4`}
        >
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-500">
            {experience.startDate} - {experience.endDate}
          </time>
          <h3 className="text-lg font-semibold text-white">
            {experience.title}
          </h3>
          <p className="text-base font-normal text-gray-400">
            {experience.description}
          </p>
          {/* if experience has a list of achievements */}
          {experience.listOfDeeds &&
            experience.listOfDeeds.content.length > 0 && (
              <ul role="list" className="space-y-5 my-4">
                {experience.listOfDeeds.content.map(
                  (paragraph, paragraphIndex) => (
                    <li key={paragraphIndex} className="flex items-center">
                      <svg
                        className="flex-shrink-0 w-4 h-4 text-green-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <p className="text-base font-normal leading-tight text-gray-400 ms-3">
                        {paragraph.content.map((phrase, phraseIndex) => {
                          if (phrase.nodeType == "text") {
                            if (phrase.marks?.length == 0) {
                              // phrase.marks check, 'if' start
                              return (
                                <span key={phraseIndex}>
                                  {phrase.value ?? ""}
                                </span>
                              );
                            } else {
                              return (
                                <span
                                  key={phraseIndex}
                                  className={`${
                                    phrase.marks.some(
                                      (mark) => mark.type == "bold"
                                    ) && "font-extrabold"
                                  } ${
                                    phrase.marks.some(
                                      (mark) => mark.type == "italic"
                                    ) && "italic"
                                  }`}
                                >
                                  {phrase.value}
                                </span>
                              );
                            } // phrase.marks check, 'else' end
                          } else {
                            return (
                              <Link
                                key={phraseIndex}
                                href={`${phrase.data.uri}`}
                                target="_blank"
                                className="underline underline-offset-2 decoration-green-600 text-gray-100 decoration-2 hover:[text-decoration:none]"
                              >
                                {phrase.content
                                  ?.map((subPhrase) => subPhrase.value)
                                  .join(" ")}
                              </Link>
                            );
                          }
                        })}
                      </p>
                    </li>
                  )
                )}
              </ul>
            )}
          {/* if experience has button link */}
          {experience.buttonLink && experience.buttonLink.length > 0 && (
            <Link
              href={experience.buttonLink[1]}
              target="_blank"
              className="group inline-flex items-center px-4 py-2 text-sm font-medium border rounded-md focus:z-10 focus:ring-4 focus:outline-none hover:text-green-300 hover:bg-gray-700 focus:ring-green-600 bg-gray-700 text-green-400 border-green-400"
            >
              {experience.buttonLink[0]}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180 group-hover:text-green-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          )}
        </li>
      ))}
    </>
  );
}
