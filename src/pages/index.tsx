import Navigation from "../components/Navigation";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function homePage() {
  return (
    <>
      <Navigation
        li1_bg="bg-gray-100"
        li1_tx="text-gray-800"
        li2_bg="bg-gray-800"
        li2_tx="text-gray-100"
        darkli1_bg="dark:bg-gray-900"
        darkli1_tx="dark:text-gray-100"
        darkli2_bg="dark:bg-gray-100"
        darkli2_tx="dark:text-gray-800"
      />

      <div className="mx-auto min-h-screen w-full bg-gray-100 p-4 pt-16 pb-14 dark:bg-gray-900 md:w-[98%] md:rounded-t-lg flex flex-col items-center">
        <img
          className="w-[300px] h-[300px] object-cover drop-shadow-[0px_0px_50px_seagreen] border-4 border-gray-800 dark:border-gray-100 animate-[blob_25s_infinite]"
          src="/me.jpg"
          alt="Image of Enoch's face"
        />

        <div className="w-full sm:w-[90%] md:w-[70%] text-center mt-3">
          <h2 className="flex flex-col gap-2 max-[453px]:text-3xl max-[385px]:text-2xl">
            <p>Fullstack</p>
            <p>Javascript / Typescript</p>
            <p>Developer</p>
          </h2>

          <p className="leading-7">
            Hi!!👋🏾 My name is{" "}
            <span className="group relative underline decoration-4 underline-offset-4">
              Enoch Enujiugha
              <span className="z-10 invisible absolute bottom-[100%] left-0 p-px px-2 text-center bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-800 group-hover:visible">
                Awesomeness
              </span>
            </span>{" "}
            and I can build web, mobile and desktop applications with Javascript
            or Typescript. I would also love to contribute to your project if it
            involves Javascript or Typescript.
          </p>

          <div className="flex gap-2 justify-center mt-3">
            <div className="relative bg-green-600 p-2 px-3 rounded-md text-lg flex justify-center items-center cursor-pointer max-[390px]:text-base">
              <span className="absolute -left-[92px] bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[28%] after:-right-[15px] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-l-gray-900 dark:after:border-l-gray-100 animate-[bounce-x_1s_infinite] max-[390px]:hidden">
                Github
              </span>
              <BsGithub className="inline-block" />
            </div>

            <div className="relative bg-green-600 p-2 px-3 rounded-md text-lg flex justify-center items-center cursor-pointer">
              <span className="absolute -bottom-[50px] bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[-15px] after:left-[50%] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-b-gray-900 dark:after:border-b-gray-100 animate-[bounce-y_1s_infinite] max-[390px]:hidden">
                Twitter
              </span>
              <BsTwitter className="inline-block" />
            </div>

            <div className="relative bg-green-600 p-2 px-3 rounded-md text-lg flex justify-center items-center cursor-pointer">
              <span className="absolute -right-[105px] bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[20%] after:-left-[7px] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-r-gray-900 dark:after:border-r-gray-100 animate-[bounce-x-plus_1s_infinite] max-[390px]:hidden">
                LinkedIn
              </span>
              <BsLinkedin className="inline-block" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
