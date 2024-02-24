"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import type { dataType } from "./page";
import Pagination from "@/components/pagination";
import ProjectsPageLoading from "./loading";
import EachProject from "./eachProject";
import getContentfulData from "@/lib/get_contenful_data";

export default function ProjectPage({
  categorySlug,
}: {
  categorySlug: string;
}) {
  // for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [projectsPerPage] = useState<number>(4);
  let indexOfFirst: number;
  let indexOfLast: number;
  let pageList: dataType;
  let numOfPages: number;

  const { data, isLoading } = useQuery({
    queryKey: ["allProjects"],
    queryFn: () => getContentfulData("allProjects"),
  });

  const allProjectsForThisCategorySlug = data
    .map((entry) => entry.fields)
    .filter((entry) => entry.category === categorySlug) as dataType;

  if (allProjectsForThisCategorySlug.length > 0) {
    indexOfLast = currentPage * projectsPerPage;
    indexOfFirst = indexOfLast - projectsPerPage;

    pageList = allProjectsForThisCategorySlug.slice(indexOfFirst, indexOfLast);
    numOfPages = (() => {
      return Math.ceil(allProjectsForThisCategorySlug.length / projectsPerPage);
    })();
  } else {
    // if theres no project for the category slug, navigate user to not found page
    notFound();
  }

  const changePageForward = () => {
    if (currentPage !== numOfPages) {
      return setCurrentPage((prev) => prev + 1);
    }
    return;
  };

  const changePageBackward = () => {
    if (currentPage !== 1) {
      return setCurrentPage((prev) => prev - 1);
    }
    return;
  };

  if (isLoading) {
    return <ProjectsPageLoading />;
  }

  return (
    <>
      <div className="w-full grid mt-4 mb-6 rounded-lg shadow-sm md:grid-cols-2">
        {pageList.map((project, index) => (
          <EachProject
            key={index}
            {...{
              project,
              pageListLength: pageList.length,
              index,
              categorySlug,
            }}
          />
        ))}
      </div>

      <Pagination
        start={indexOfFirst + 1}
        end={indexOfLast > data.length ? data.length : indexOfLast}
        length={data.length}
        currentPage={currentPage}
        numOfPages={numOfPages}
        changePageForward={changePageForward}
        changePageBackward={changePageBackward}
      />
    </>
  );
}
