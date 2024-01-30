import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

type projectType = {
  projectName: string;
  projectDescription: string;
  projectTools: string[];
  projectWeb: string;
  projectGithub: string;
  label: string;
};

export default function ProjectPage({
  project,
  pageListLength,
  index,
}: {
  project: projectType;
  pageListLength: number;
  index: number;
}) {
  return (
    <figure
      className={`relative flex flex-col items-center justify-center p-8 text-center bg-gray-800 border-gray-700 border ${
        pageListLength == 1 && "rounded-lg md:rounded-tr-lg md:col-span-2"
      } ${
        pageListLength == 2 &&
        index == 0 &&
        "max-md:rounded-t-lg md:rounded-s-lg"
      } ${
        pageListLength == 2 &&
        index == 1 &&
        "max-md:border-t-0 md:border-l-0 max-md:rounded-b-lg md:rounded-e-lg"
      } ${
        pageListLength >= 3 &&
        index == 0 &&
        "max-md:rounded-t-lg md:rounded-tl-lg"
      } ${
        pageListLength >= 3 &&
        index == 1 &&
        "max-md:border-t-0 md:border-l-0 md:rounded-tr-lg"
      } ${
        pageListLength == 3 &&
        index == 2 &&
        "border-t-0 rounded-b-lg md:col-span-2"
      } ${pageListLength == 4 && index == 2 && "border-t-0 md:rounded-bl-lg"} ${
        pageListLength == 4 &&
        index == 3 &&
        "border-t-0 md:border-l-0 max-md:rounded-b-lg md:rounded-br-lg"
      }`}
    >
      <span
        className={`absolute top-2 right-3 text-sm font-medium me-2 px-2.5 py-0.5 rounded ${
          project.label.toLowerCase() == "paid" && "bg-green-900 text-green-300"
        } ${
          project.label.toLowerCase() == "personal" &&
          "bg-yellow-900 text-yellow-300"
        } ${
          project.label.toLowerCase() == "collaboration" &&
          "bg-indigo-900 text-indigo-300"
        } ${
          !["paid", "personal", "collaboration"].includes(
            project.label.toLowerCase()
          ) && "bg-blue-900 text-blue-300"
        }`}
      >
        {project.label}
      </span>

      <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-400">
        <h3 className="text-lg font-semibold text-white">
          {project.projectName}
        </h3>
        <ul className="mt-4 flex gap-2 flex-wrap items-center justify-center">
          {project.projectTools.map((tool, i) => (
            <li
              key={i}
              className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded ${
                i == 0
                  ? "bg-gray-700 text-red-400 border border-red-400"
                  : "bg-gray-700 text-gray-400 border border-gray-500"
              }`}
            >
              {tool}
            </li>
          ))}
        </ul>
        <p className="my-4">{project.projectDescription}</p>
        {/*240/288 chars / 43/53 words*/}
      </blockquote>

      <figcaption className="flex items-center justify-center gap-4">
        <Link
          href={project.projectGithub}
          className={`${buttonVariants({
            variant: "outline",
          })}`}
        >
          Github
        </Link>

        <Link
          href={project.projectWeb}
          className={`${buttonVariants({
            variant: "outline",
          })}`}
        >
          Website
        </Link>
      </figcaption>
    </figure>
  );
}
