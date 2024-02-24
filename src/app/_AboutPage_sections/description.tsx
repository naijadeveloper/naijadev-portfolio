"use client";

import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge";
import { Fragment } from "react";
import type { dataType } from "../page";
import { useQuery } from "@tanstack/react-query";
import getContentfulData from "@/lib/get_contenful_data";
import { Skeleton } from "@/components/ui/skeleton";
import JobTitle from "./job_title";

export default function Description() {
  const { data, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: () => getContentfulData("about"),
  });
  const { description } = data[0].fields as dataType;

  return (
    <>
      <JobTitle />

      {isLoading && (
        <div className="w-full mt-6 flex flex-col items-center gap-y-3">
          <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
          <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
          <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
          <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
          <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
          <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
        </div>
      )}

      {isLoading == false && (
        <div className="leading-[2.12] text-[1.1rem] sm:text-[1.125rem] md:text-[1.25rem]">
          {description.content.map((paragraph, index1) => (
            <Fragment key={index1}>
              {paragraph.content.map((phrase, index2) => {
                if (phrase.nodeType == "text") {
                  if (phrase.marks?.length == 0) {
                    return (
                      <Fragment key={index2}>{phrase.value ?? ""}</Fragment>
                    );
                  } else {
                    return (
                      <p
                        key={index2}
                        className="group inline-block relative whitespace-nowrap"
                      >
                        <span
                          className={`${
                            phrase.marks.some((mark) => mark.type == "bold") &&
                            "font-extrabold"
                          } ${
                            phrase.marks.some(
                              (mark) => mark.type == "italic"
                            ) && "italic"
                          }`}
                        >
                          {phrase.value}
                        </span>
                        {phrase.value.toLowerCase().includes("enoch") && (
                          <>
                            <span className="z-10 invisible absolute bottom-[100%] left-0 p-px px-2 text-center bg-gray-100 text-gray-800 group-hover:visible">
                              Awesomeness
                            </span>
                          </>
                        )}
                      </p>
                    );
                  }
                } else {
                  // if nodeType is "hyperlink"
                  if (
                    phrase.content?.some(
                      (subPhrase) =>
                        subPhrase.value.toLowerCase().includes("flutter") ||
                        subPhrase.value.toLowerCase().includes("next") ||
                        subPhrase.value.toLowerCase().includes("electron")
                    )
                  ) {
                    return (
                      <Link
                        key={index2}
                        href={`${phrase.data.uri}`}
                        target="_blank"
                        className={`${badgeVariants({
                          variant: "default",
                        })} text-[0.9rem] leading-[1.2rem] sm:text-base`}
                      >
                        {phrase.content
                          ?.map((subPhrase) => subPhrase.value)
                          .join(" ")}
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        key={index2}
                        href={`${phrase.data.uri}`}
                        target="_blank"
                        className="relative underline decoration-4 underline-offset-4 whitespace-nowrap"
                      >
                        {phrase.content
                          ?.map((subPhrase) => subPhrase.value)
                          .join(" ")}
                      </Link>
                    );
                  }
                }
              })}
              <br />
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
}
