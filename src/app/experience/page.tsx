import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import type { docDescription } from "../page";
import AllExperiences from "./all_experiences";
import getContentfulData from "@/lib/get_contenful_data";

export type dataType = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  listOfDeeds: docDescription;
  buttonLink: string[];
}[];

export default async function ExperiencePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["experience"],
    queryFn: () => getContentfulData("experience"),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ol className="w-full md:w-[85%] py-4 pr-2 relative border-s-4 mt-4 mb-6 shadow-sm bg-gray-800 border-green-700">
          <AllExperiences />
        </ol>
      </HydrationBoundary>
    </>
  );
}
