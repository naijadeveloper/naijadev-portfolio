import { Squada_One } from "next/font/google";

const headfont = Squada_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="relative flex justify-center items-center pb-3">
      <h1
        className={`uppercase ${headfont.className} text-5xl sm:text-6xl md:text-[5rem] md:leading-[1]`}
      >
        <span className="text-green-600">The</span>
        <span className="text-gray-100">Naija</span>
        <span className="text-green-600">Developer</span>
      </h1>
    </header>
  );
}
