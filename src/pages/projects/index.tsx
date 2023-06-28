import type { GetStaticProps } from "next";
import Link from "next/link";
import matter from "gray-matter";
import { BsGithub } from "react-icons/bs";

import Navigation from "../../components/Navigation";
import Footer from "@/components/Footer";

interface repoProps {
  name: string;
  tools: string[];
  description: string;
  websiteLink: string;
  githubLink: string;
  date: string;
}

export const getStaticProps: GetStaticProps = async () => {
  //1 get all repo (https://api.github.com/users/naijadeveloper/repos)
  const getRepos = await fetch(
    "https://api.github.com/users/naijadeveloper/repos"
  );
  const myrepos = await getRepos.json();
  //2 check if #use is in description, filter through (repo.name, repo.description && repo.created_at)
  let validRepos = myrepos.filter((repo) =>
    repo?.description?.includes("#use")
  );
  //3 date conversion to millseconds offset from 1970 use Date.now("date string");
  // date sort let arry = [1,2,3] it should be 3,2,1. so
  // arry.sort((a,b) => b-a);
  validRepos = validRepos.sort((repo1, repo2) => {
    let date1 = repo1?.created_at;
    let date2 = repo2?.created_at;
    // @ts-ignore
    return Date.now(date2) - Date.now(date1);
  });
  //4 fetch the metadata from the README file for each repo, create object of that with the date (https://api.github.com/repos/naijadeveloper/repo-name/contents) then (if content.name is README.md, get content.download_url) then (const { data: frontmatter, content } = matter(mdFile);) if frontmatter is an empty object, *ignore* that repo then
  const promises = validRepos.map(async (repo) => {
    const date: string = repo?.created_at;
    // fetch contents
    let res = await fetch(
      `https://api.github.com/repos/naijadeveloper/${repo?.name}/contents`
    );
    let contents = await res.json();

    let validContent = contents.filter(
      (content) => content?.name == "README.md"
    );

    res = await fetch(validContent[0]?.download_url);
    let md = await res.text();

    const { data: frontmatter } = matter(md);
    if (Object.values(frontmatter).length == 0) return {};

    let rObject = {
      ...(frontmatter as {
        name: string;
        tools: string[];
        description: string;
        websiteLink: string;
        githubLink: string;
      }),
      date,
    };
    return rObject;
  });

  let reposData: repoProps[] = await Promise.all(promises);
  reposData = reposData.filter((repoObj) => Object.values(repoObj).length > 0);
  //5 finally return the array of objects
  return {
    props: {
      reposData,
    },
    revalidate: 10,
  };
};

export default function projectsPage({
  reposData,
}: {
  reposData: repoProps[];
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <Navigation
        li1_bg="bg-gray-800"
        li1_tx="text-gray-100"
        li2_bg="bg-gray-100"
        li2_tx="text-gray-800"
        darkli1_bg="dark:bg-gray-100"
        darkli1_tx="dark:text-gray-800"
        darkli2_bg="dark:bg-gray-900"
        darkli2_tx="dark:text-gray-100"
      />

      <div className="relative mx-auto min-h-screen w-full bg-gray-100 p-4 pt-16 pb-14 dark:bg-gray-900 md:w-[98%] md:rounded-t-lg flex flex-col items-center">
        <section className={`mt-8 w-full flex flex-col gap-10`}>
          {reposData.map((repo, index) => (
            <article
              key={index}
              className={`relative p-2 rounded-md bg-gray-400 mx-auto w-[70%] max-md:w-[80%] max-sm:w-[98%] min-h-[90px] dark:bg-gray-800`}
            >
              <section>
                <div>
                  <div>
                    <p className="flex justify-start items-center gap-x-1">
                      <span className="font-lighter text-gray-600 dark:text-gray-500">
                        {new Date(repo?.date).toLocaleDateString()}
                      </span>
                      <BsGithub className="mb-1 inline-block" />
                    </p>
                    <h3 className="tracking-wider font-semibold text-2xl text-center">
                      {repo?.name}
                    </h3>
                  </div>
                  <ul className="mt-3 flex flex-wrap justify-center text-xs gap-1">
                    {repo?.tools?.map((tool, index) => (
                      <li
                        key={index}
                        className="rounded-md p-2 text-gray-800 bg-gray-100 dark:text-gray-200 dark:bg-gray-900"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3">
                  <p className="mx-auto w-full text-center text-sm tracking-wider font-bold text-gray-700 p-3 dark:text-gray-400 md:w-[80%]">
                    {repo?.description}
                  </p>
                </div>

                <div className="mt-3 flex gap-6 items-center justify-center">
                  <Link
                    href={repo?.websiteLink}
                    target="_blank"
                    className="p-2 px-3 text-gray-200 bg-gray-600 dark:bg-gray-500 rounded"
                  >
                    Website
                  </Link>
                  <Link
                    href={repo?.githubLink}
                    target="_blank"
                    className="p-2 px-3 text-gray-200 bg-gray-600 dark:bg-gray-500 rounded"
                  >
                    Github
                  </Link>
                </div>
              </section>
            </article>
          ))}
        </section>

        <Footer />
      </div>
    </>
  );
}
