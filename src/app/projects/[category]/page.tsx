"use client";

import { useState } from "react";
import dummyJson from "./dummy.json";
import Pagination from "@/components/pagination";
import ProjectPage from "./_ProjectCategory_sections/project";
import LoadingSkeleton from "./_ProjectCategory_sections/loading";
import Retry from "../_ProjectPage_sections/retry";

type dataType = {
  projectName: string;
  projectDescription: string;
  projectTools: string[];
  projectWeb: string;
  projectGithub: string;
  label: string;
}[];

export default function ProjectCategory({
  params,
}: {
  params: { category: string };
}) {
  const [data] = useState<dataType>(() => {
    return dummyJson.reverse();
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [projectsPerPage] = useState<number>(4);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const pageList = data.slice(indexOfFirst, indexOfLast);

  const numOfPages = (() => {
    return Math.ceil(data.length / projectsPerPage);
  })();

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

  // return <LoadingSkeleton />;
  // return <Retry refetch={refetch} />

  return (
    <>
      <div className="w-full grid mt-4 mb-6 rounded-lg shadow-sm md:grid-cols-2">
        {pageList.map((project, index) => (
          <ProjectPage
            key={index}
            {...{ project, pageListLength: pageList.length, index }}
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
