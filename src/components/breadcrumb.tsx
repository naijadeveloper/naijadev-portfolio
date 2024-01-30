"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BreadCrumbNavigation({
  baseLink,
}: {
  baseLink: string;
}) {
  const path = usePathname();
  let paths = [];

  if (path.includes(baseLink)) {
    paths = path.split("/");
    paths.shift();
  }

  return (
    <>
      <nav
        className={`flex px-5 py-3 text-gray-700 border rounded-lg bg-gray-800 border-gray-700 absolute top-[.6rem] left-2 ${
          (path == baseLink || !path.includes(baseLink)) && "hidden"
        }`}
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {paths.map((path, index) => {
            if (index == 0) {
              return (
                <li key={index} className="inline-flex items-center">
                  <Link
                    href={baseLink}
                    className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white"
                  >
                    {path
                      .split("")
                      .map((char, i) => (i == 0 ? char.toUpperCase() : char))
                      .join("")}
                  </Link>
                </li>
              );
            } else if (index == paths.length - 1) {
              return (
                <li key={index} aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="ms-1 text-sm font-medium md:ms-2 text-green-400">
                      {path
                        .split("")
                        .map((char, i) => (i == 0 ? char.toUpperCase() : char))
                        .join("")}
                    </span>
                  </div>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <Link
                      href={`${baseLink}/${path}`}
                      className="ms-1 text-sm font-medium md:ms-2 text-gray-400 hover:text-white"
                    >
                      {path
                        .split("")
                        .map((char, i) => (i == 0 ? char.toUpperCase() : char))
                        .join("")}
                    </Link>
                  </div>
                </li>
              );
            }
          })}
        </ol>
      </nav>
    </>
  );
}
