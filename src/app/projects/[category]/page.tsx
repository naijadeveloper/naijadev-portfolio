import ProjectPage from "./category_projects";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import getContentfulData from "@/lib/get_contenful_data";

export type dataType = {
  category: string;
  name: string;
  description: string;
  tools: string[];
  webLink: string;
  githubLink: string;
  label: string;
}[];

export default async function ProjectCategory({
  params,
}: {
  params: { category: string };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["allProjects"],
    queryFn: () => getContentfulData("allProjects"),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProjectPage categorySlug={params.category} />
      </HydrationBoundary>
    </>
  );
}
