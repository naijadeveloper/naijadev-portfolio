import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import getContentfulData from "@/lib/get_contenful_data";
import AllProjectCategories from "./all_project_categories";

export type dataType = {
  projectCategory: string;
  projectSlug: string;
  projectDescription: string;
}[];

export default async function ProjectsPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["projects"],
    queryFn: () => getContentfulData("projects"),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="space-y-10 w-full sm:w-[90%] md:w-[80%]">
          <AllProjectCategories />
        </div>
      </HydrationBoundary>
    </>
  );
}
