import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiLayoutGridFill } from "react-icons/ri";
import { HiViewList } from "react-icons/hi";

import Navigation from "../../components/Navigation";
import Footer from "@/components/Footer";

import repo from "@/data/repo.json";

interface repoProps {
  name: string;
  tools: string[];
  description: string;
  websiteLink: string;
  githubLink: string;
  date: string;
}

const enum listStyle {
  BOX = "box layout",
  RECT = "rect layout",
}

export default function projectsPage() {
  const [listArrangeStyle, setListArrangeStyle] = useState<string>(
    listStyle.BOX
  );
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
        <div className="w-full md:w-[90%] flex items-center justify-center">
          <span className="w-[40px] h-[40px] flex items-center justify-end rounded rounded-tr-none rounded-br-none p-2 bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
            <AiOutlineSearch />
          </span>

          <form onSubmit={handleSubmit} className="grow-[3]">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[40px] rounded rounded-tl-none rounded-bl-none p-2 pl-0 bg-gray-300 text-gray-800 outline-0 dark:bg-gray-800 dark:text-gray-100"
            />
          </form>

          <div className="flex items-center justify-center ml-1 rounded p-1 bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-800">
            <button
              onClick={() => setListArrangeStyle(listStyle.BOX)}
              className={`w-[30px] h-[30px] flex items-center justify-center outline-none rounded ${
                listArrangeStyle == listStyle.BOX
                  ? "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
                  : ""
              }`}
            >
              <RiLayoutGridFill />
            </button>
            <button
              onClick={() => setListArrangeStyle(listStyle.RECT)}
              className={`w-[30px] h-[30px] flex items-center justify-center outline-none rounded ${
                listArrangeStyle == listStyle.RECT
                  ? "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
                  : ""
              }`}
            >
              <HiViewList />
            </button>
          </div>
        </div>
        {/* end of search and rearrange container */}

        <div></div>

        <Footer />
      </div>
    </>
  );
}
