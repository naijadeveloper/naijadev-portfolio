"use client";

import { useQuery } from "@tanstack/react-query";

import LoadingSkeleton from "./_ProjectPage_sections/loading";
import Retry from "./_ProjectPage_sections/retry";
import Default from "./_ProjectPage_sections/default";

import getData from "@/lib/get_data";
// performing fetch on the server failed, I don't know why

type dataType = Record<string, { title: string; description: string }>;

export default function ProjectsPage() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      getData<dataType>(
        "https://raw.githubusercontent.com/naijadeveloper/naijadev-metadata/master/main.json"
      ),
  });

  if (isLoading) return <LoadingSkeleton />;

  if (isError) return <Retry refetch={refetch} />;

  return (
    <div className="space-y-10 w-full sm:w-[90%] md:w-[80%]">
      {Object.entries(data ?? []).map((item, index) => (
        <Default
          key={index}
          title={item[1].title}
          description={item[1].description}
          link={item[0]}
        />
      ))}
    </div>
  );
}
