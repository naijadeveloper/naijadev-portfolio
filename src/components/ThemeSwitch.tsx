import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { resolvedTheme: theme, setTheme } = useTheme();

  function handleThemeChange() {
    if (theme == "dark") {
      setTheme("light");
      return;
    }

    setTheme("dark");
  }

  return (
    <>
      {/* markup for the light => dark mode switch */}
      <div
        className="z-10 absolute top-36 right-4 bg-green-600 p-2 rounded-md"
        onClick={handleThemeChange}
      >
        {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </div>
    </>
  );
}
