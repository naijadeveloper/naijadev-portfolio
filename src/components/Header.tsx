import { Squada_One } from "next/font/google";
import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("@/components/ThemeSwitch"), {
  ssr: false,
});

const headfont = Squada_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="relative flex justify-center items-center pb-3">
      <h1 className={`uppercase ${headfont.className} max-[500px]:text-4xl`}>
        <span role="img" aria-label="cool-face-emoji">
          😎
        </span>
        <span className="text-green-600 dark:text-green-700">The</span>
        <span className="text-gray-100">Naija</span>
        <span className="text-green-600 dark:text-green-700">Developer</span>
      </h1>

      <ThemeSwitch />
    </header>
  );
}
