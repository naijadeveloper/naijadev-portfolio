"use client";

import Link from "next/link";
import type { dataType } from "./page";
import { useQuery } from "@tanstack/react-query";
import getContentfulData from "@/lib/get_contenful_data";
import ProjectCategoriesLoading from "./loading";

export default function AllProjectCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getContentfulData("projects"),
  });

  const allCategories = data.map((entry) => entry.fields) as dataType;

  if (isLoading) {
    return <ProjectCategoriesLoading />;
  }

  return (
    <>
      {allCategories.map((category, index) => (
        <div
          key={index}
          className="py-8 px-4 mx-auto text-center rounded-lg shadow-xl bg-gray-800 border-gray-700 lg:py-16 max-sm:px-2"
        >
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none sm:text-4xl md:text-5xl lg:text-6xl text-white">
            {category.projectCategory}
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 text-gray-400">
            {category.projectDescription}
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center">
            <Link
              href={`/projects/${category.projectSlug}`}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900"
            >
              Explore
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
