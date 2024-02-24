"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

export default function NotFoundClient() {
  let link;
  let path = usePathname().split("/");
  path.shift();

  if (path.includes("projects")) {
    link = "/projects";
  } else {
    link = "/";
  }
  return (
    <div className="py-3 px-8 mx-auto mt-8 text-center rounded-lg shadow-xl bg-gray-800 border-gray-700 lg:py-16 max-sm:px-2">
      <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none sm:text-4xl md:text-5xl lg:text-6xl text-white">
        404: Page Not Found😐
      </h1>
      <p></p>
      <p className="text-xl font-bold my-4">
        Could not find requested resource
      </p>
      <Link
        href={`${link ?? "/"}`}
        className={`inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900`}
      >
        Go back
      </Link>
    </div>
  );
}
