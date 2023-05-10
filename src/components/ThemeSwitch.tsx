import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import type { themeProp } from "./AppLayout";

export default function ThemeSwitch({ theme, setTheme }: themeProp) {
  return (
    <>
      {/* markup for the light => dark mode switch */}
      <div
        className="z-10 absolute top-36 right-5 bg-green-600 p-2 rounded-md"
        onClick={() => {
          theme === "" ? setTheme("dark") : setTheme("");
        }}
      >
        {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </div>
    </>
  );
}
