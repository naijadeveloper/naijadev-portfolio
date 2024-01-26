import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge";

export default function Description() {
  return (
    <>
      <h2 className="flex flex-col gap-2 max-[453px]:text-3xl max-[385px]:text-2xl">
        <p>Fullstack Software</p>
        <p>Developer</p>
      </h2>

      <div className="leading-[2.12] text-[1.1rem] sm:text-[1.125rem] md:text-[1.25rem]">
        Hi!!👋🏾 My name is{" "}
        <p className="group inline-block relative whitespace-nowrap">
          <span className="font-extrabold">Enoch Enujiugha</span>
          <span className="z-10 invisible absolute bottom-[100%] left-0 p-px px-2 text-center bg-gray-100 text-gray-800 group-hover:visible">
            Awesomeness
          </span>
        </p>{" "}
        a software developer from Nigeria. I can build web, mobile and desktop
        applications. I use{" "}
        <Link
          href="https://docs.flutter.dev/"
          className={`${badgeVariants({
            variant: "default",
          })} text-[0.9rem] leading-[1.2rem] sm:text-base`}
        >
          Flutter(Dart)
        </Link>{" "}
        for mobile applications and{" "}
        <Link
          href="https://nextjs.org/docs"
          className={`${badgeVariants({
            variant: "default",
          })} text-[0.9rem] leading-[1.2rem] sm:text-base`}
        >
          Next(Js/Ts)
        </Link>{" "}
        for web applications and{" "}
        <Link
          href="https://electronjs.org/docs/latest"
          className={`${badgeVariants({
            variant: "default",
          })} text-[0.9rem] leading-[1.2rem] sm:text-base`}
        >
          Electron(Js/Ts)
        </Link>{" "}
        for desktop applications. I would love to work with you or contribute to
        your open source project if it involves Javascript or Typescript or
        Dart. If it doesn't, rest assured, I can learn whatever tech tool you
        are using and help you with it💪🏾. So hit me up✌🏾.
        <br />
        Checkout my{" "}
        <Link
          href="https://digital-resume-lime.vercel.app/"
          target="_blank"
          className="relative underline decoration-4 underline-offset-4 whitespace-nowrap"
        >
          Digital Resume
        </Link>{" "}
        or{" "}
        <Link
          href="https://docs.google.com/document/d/15u37kvWZqXHu6hoD_Kw8qFCxp9LdcE4RRs5Sc79qDx0/edit?usp=sharing"
          target="_blank"
          className="relative underline decoration-4 underline-offset-4 whitespace-nowrap"
        >
          download it.
        </Link>
      </div>
    </>
  );
}
