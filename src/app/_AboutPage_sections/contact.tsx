"use client";

import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import type { dataType } from "../page";
import { useQuery } from "@tanstack/react-query";
import getContentfulData from "@/lib/get_contenful_data";
import { Skeleton } from "@/components/ui/skeleton";

export default function Contact() {
  const { data, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: () => getContentfulData("about"),
  });
  const { contactLinks } = data[0].fields as dataType;

  if (isLoading) {
    return (
      <div className="mt-6 flex flex-col items-center">
        <Skeleton className="w-[150px] h-[40px] rounded bg-gray-800" />

        <div className="flex justify-center gap-8 mt-6">
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-6 underline decoration-4 underline-offset-4">
          Contacts
        </h3>
        <ul className="flex gap-4 justify-center">
          {contactLinks.map((contact, index) => (
            <Link
              key={index}
              href={contact}
              target="_blank"
              className="relative bg-green-600 p-2 px-3 rounded-md text-lg flex justify-center items-center cursor-pointer"
            >
              {contact.includes("github") && (
                <>
                  <span className="absolute -left-[92px] bg-gray-100 text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[28%] after:-right-[15px] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-l-gray-100 animate-[bounce-x_1s_infinite] max-[500px]:hidden">
                    Github
                  </span>
                  <BsGithub className="inline-block" />
                </>
              )}

              {contact.includes("twitter") && (
                <>
                  <span className="absolute -bottom-[45px] bg-gray-100 text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[-15px] after:left-[50%] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-b-gray-100 animate-[bounce-y_1s_infinite] max-[500px]:hidden">
                    Twitter
                  </span>
                  <BsTwitter className="inline-block" />
                </>
              )}

              {contact.includes("linkedin") && (
                <>
                  <span className="absolute -right-[108px] bg-gray-100 text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[20%] after:-left-[7px] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-r-gray-100 animate-[bounce-x-plus_1s_infinite] max-[500px]:hidden">
                    LinkedIn
                  </span>
                  <BsLinkedin className="inline-block" />
                </>
              )}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
