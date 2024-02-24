"use client";

import type { dataType } from "../page";
import { useQuery } from "@tanstack/react-query";
import getContentfulData from "@/lib/get_contenful_data";
import { Skeleton } from "@/components/ui/skeleton";

export default function JobTitle() {
  const { data, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: () => getContentfulData("about"),
  });
  const { jobTitle } = data[0].fields as dataType;

  if (isLoading) {
    return (
      <div className="w-full flex justify-center sm:w-[90%] md:w-[80%] mt-6">
        <Skeleton className="w-[70%] h-[50px] rounded-md bg-gray-800" />
      </div>
    );
  }

  return (
    <h2 className="flex items-center justify-center text-center gap-2 max-[453px]:text-3xl max-[385px]:text-2xl">
      <p>{jobTitle}</p>
    </h2>
  );
}
