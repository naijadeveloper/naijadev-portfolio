import Link from "next/link";
import { Squada_One } from "next/font/google";

const headfont = Squada_One({
  weight: '400',
  subsets: ["latin"],
  display: "swap"
});

export default function Header({theme, setTheme}) {
  return (
    <header className="relative flex min-[460px]:justify-center items-center pb-3">
      <h1 className={`uppercase ${headfont.className} max-[500px]:text-4xl`}>
        <span role="img" aria-label="cool-face-emoji">😎</span>
        <span className="text-green-600 dark:text-green-700">The</span>
        <span className="text-gray-100">Naija</span>
        <span className="text-green-600 dark:text-green-700">Developer</span>
      </h1>

      {/* markup for the light => dark mode switch */}
      <div className="absolute top-0 right-0 bg-green-600 p-2 rounded-bl-md">
        <div className={`p-2 rounded-md cursor-pointer ${theme == ""? "bg-gray-100 text-gray-800" : ""}`} onClick={() => setTheme("")}>Light</div>

        <div className={`p-2 rounded-md ${theme == "dark"? "bg-gray-900" : ""} cursor-pointer`} onClick={() => setTheme("dark")}>Dark</div>
      </div>
    </header>
  );
}
