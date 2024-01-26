import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Contact() {
  return (
    <>
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
            <span className="absolute -left-[92px] bg-gray-100 text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[28%] after:-right-[15px] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-l-gray-100 animate-[bounce-x_1s_infinite] max-[500px]:hidden">
              Github
            </span>
            <BsGithub className="inline-block" />
          </Link>

          <Link
            href="https://www.twitter.com/naijadeveloper"
            target="_blank"
            className="relative bg-green-600 p-2 px-3 rounded-md text-lg flex justify-center items-center cursor-pointer"
          >
            <span className="absolute -bottom-[45px] bg-gray-100 text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[-15px] after:left-[50%] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-b-gray-100 animate-[bounce-y_1s_infinite] max-[500px]:hidden">
              Twitter
            </span>
            <BsTwitter className="inline-block" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/enoch-enujiugha-b12247112"
            target="_blank"
            className="relative bg-green-600 p-2 px-3 rounded-md text-lg flex justify-center items-center cursor-pointer"
          >
            <span className="absolute -right-[108px] bg-gray-100 text-gray-800 p-px px-2 rounded-md after:content-[' '] after:absolute after:top-[20%] after:-left-[7px] after:-ml-[8px] after:border-[8px] after:border-transparent after:border-r-gray-100 animate-[bounce-x-plus_1s_infinite] max-[500px]:hidden">
              LinkedIn
            </span>
            <BsLinkedin className="inline-block" />
          </Link>
        </ul>
      </div>
    </>
  );
}
