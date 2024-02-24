"use client";

import type { dataType } from "../page";
import { useQuery } from "@tanstack/react-query";
import getContentfulData from "@/lib/get_contenful_data";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Tools() {
  const { data, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: () => getContentfulData("about"),
  });
  const { toolsImages } = data[0].fields as dataType;

  if (isLoading) {
    return (
      <div className="mt-6 flex flex-col items-center">
        <Skeleton className="w-[150px] h-[40px] rounded bg-gray-800" />

        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
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
          Tools
        </h3>
        <ul className="tools-list flex flex-wrap justify-center gap-8">
          {toolsImages.map((toolImage, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <img
                    src={`https:${toolImage.fields.file.url}`}
                    alt={`${
                      toolImage.fields.description.length > 0
                        ? toolImage.fields.description
                        : toolImage.fields.title
                    }`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {`${
                      toolImage.fields.description.length > 0
                        ? toolImage.fields.description
                        : toolImage.fields.title
                    }`}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </ul>
      </div>
    </>
  );
}
