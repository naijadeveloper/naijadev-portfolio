import BreadCrumbNavigation from "@/components/breadcrumb";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadCrumbNavigation baseLink="/projects" />
      {children}
    </>
  );
}
