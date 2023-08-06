import type { GetStaticProps } from "next";
import Link from "next/link";
import { useRef } from "react";
import Navigation from "../components/Navigation";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Footer from "@/components/Footer";

type homeProps = {
  image: string;
};
export const getStaticProps: GetStaticProps = async () => {
  // (https://api.github.com/users/naijadeveloper)
  const response = await fetch("https://api.github.com/users/naijadeveloper");
  const { avatar_url } = await response.json();
  return {
    props: {
      image: avatar_url,
    },
    revalidate: 50,
  };
};

export default function homePage({ image }: homeProps) {
  const dialog = useRef<HTMLDialogElement>();
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

      <div className="relative mx-auto min-h-screen w-full bg-gray-100 p-4 pt-16 pb-14 dark:bg-gray-900 md:w-[98%] md:rounded-t-lg flex flex-col items-center">
        <img
          className="w-[300px] h-[300px] object-cover drop-shadow-[0px_0px_50px_seagreen] border-4 border-gray-800 dark:border-gray-100 animate-[blob_25s_infinite]"
          src={image}
          alt="Enoch's image"
        />

        <div className="w-full sm:w-[90%] md:w-[70%] text-center mt-3">
          <h2 className="flex flex-col gap-2 max-[453px]:text-3xl max-[385px]:text-2xl">
            <p>Fullstack</p>
            <p>Javascript / Typescript</p>
            <p>Developer</p>
          </h2>
          <p className="leading-7">
            Hi!!👋🏾 My name is{" "}
            <p className="group inline-block relative underline decoration-4 underline-offset-4 whitespace-nowrap">
              Enoch Enujiugha,
              <span className="z-10 invisible absolute bottom-[100%] left-0 p-px px-2 text-center bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-800 group-hover:visible">
                Awesomeness
              </span>
            </p>{" "}
            a developer from Nigeria. I can build web, mobile and desktop
            applications with Javascript or Typescript. I would love to
            contribute to your open source project if it involves Javascript or
            Typescript. If it doesn't, rest assured I can learn whatever tech
            tool you are using and help you with it💪🏾. So still hit me up✌🏾.
            Checkout my{" "}
            <Link
              href="https://digital-resume-lime.vercel.app/"
              target="_blank"
              className="relative underline decoration-4 underline-offset-4 whitespace-nowrap"
            >
              Digital Resume
            </Link>{" "}
            or download the{" "}
            <Link
              href="/resume.pdf"
              target="_blank"
              className="relative underline decoration-4 underline-offset-4 whitespace-nowrap"
            >
              pdf version
            </Link>
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-6 underline decoration-4 underline-offset-4">
              Tools
            </h3>
            <ul className="tools-list flex flex-wrap justify-center gap-7">
              <img src="/imgs/html5.svg" alt="html5" />
              <img src="/imgs/css3.svg" alt="css3" />
              <img src="/imgs/tailwindcss.svg" alt="tailwindcss" />
              <img src="/imgs/chakraui.svg" alt="chakraui" />
              <img src="/imgs/javascript.svg" alt="javascript" />
              <img src="/imgs/typescript.svg" alt="typescript" />
              <img src="/imgs/react.svg" alt="react" />
              <img src="/imgs/nextjs.svg" alt="nextjs" />
              <img src="/imgs/vuejs.svg" alt="vuejs" />
              <img src="/imgs/mongodb.svg" alt="mongodb" />
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-6 underline decoration-4 underline-offset-4">
              Contacts
            </h3>
            <ul className="flex gap-4 justify-center">
              <Link
                href="https://www.github.com/naijadeveloper"
                target="_blank"
                className="relative bg-green-600 p-2 px-3 rounded-md text-lg flex justify-center items-center cursor-pointer max-[390px]:text-base"
              >
                <span className="absolute -left-[92px] bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[28%] after:-right-[15px] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-l-gray-900 dark:after:border-l-gray-100 animate-[bounce-x_1s_infinite] max-[400px]:hidden">
                  Github
                </span>
                <BsGithub className="inline-block" />
              </Link>

              <Link
                href="https://www.twitter.com/naijadeveloper"
                target="_blank"
                className="relative bg-green-600 p-2 px-3 rounded-md text-lg flex justify-center items-center cursor-pointer"
              >
                <span className="absolute -bottom-[45px] bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[-15px] after:left-[50%] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-b-gray-900 dark:after:border-b-gray-100 animate-[bounce-y_1s_infinite] max-[400px]:hidden">
                  Twitter
                </span>
                <BsTwitter className="inline-block" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/enoch-enujiugha-b12247112"
                target="_blank"
                className="relative bg-green-600 p-2 px-3 rounded-md text-lg flex justify-center items-center cursor-pointer"
              >
                <span className="absolute -right-[108px] bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[20%] after:-left-[7px] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-r-gray-900 dark:after:border-r-gray-100 animate-[bounce-x-plus_1s_infinite] max-[400px]:hidden">
                  LinkedIn
                </span>
                <BsLinkedin className="inline-block" />
              </Link>
            </ul>
          </div>{" "}
          {/* end of github, twitter and linkedin contact div*/}
          <div
            className={`inline-block glass relative overflow-hidden w-fit mx-auto mt-8 p-2 rounded cursor-pointer
            hover:border-2
            dark:glass-dark dark:text-white 
            min-[401px]:mt-20
          `}
            onClick={() => dialog.current.showModal()}
          >
            <p>EMAIL ME</p>
            <p>mmejuenoch@gmail.com</p>
          </div>{" "}
          {/* Hit me up */}
        </div>

        <dialog
          ref={dialog}
          className="glass w-full rounded-md md:w-[70%] lg:w-[50%] dark:glass-dark"
        >
          <form
            action="https://formspree.io/f/xwkjyarz"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="Subject"
              defaultValue="Hi Enoch, I want to hire you for a project"
              required
              className="rounded p-2 bg-gray-100 text-gray-800 outline-0 dark:bg-gray-800 dark:text-gray-100"
            />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="yourEmail@gmail.com"
              required
              className="rounded p-2 bg-gray-100 text-gray-800 outline-0 dark:bg-gray-800 dark:text-gray-100"
            />
            <input
              type="text"
              name="Additional Contact"
              placeholder="Another way to contact you"
              className="rounded p-2 bg-gray-100 text-gray-800 outline-0 dark:bg-gray-800 dark:text-gray-100"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-block w-fit rounded p-2 bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800"
              >
                Send
              </button>
            </div>
          </form>
          <button
            className="bottom-2 left-2 bg-red-700 mt-3 p-2 rounded"
            onClick={() => dialog.current.close()}
          >
            close
          </button>
        </dialog>

        <Footer />
      </div>
    </>
  );
}
