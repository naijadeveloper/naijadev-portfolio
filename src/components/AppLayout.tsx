import { ReactNode, useState, useEffect } from "react";
import Meta from "./Meta";
import Header from "./Header";


export default function AppLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>("dark");

  // reset the theme to the localStorage saved theme value if exist
  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if(getTheme == null) {
      setTheme("dark");
    } else {
      setTheme(getTheme);
    }
  }, []);
  // when theme changes reset it.
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme}>
      <Meta />
      <div className="bg-gray-900 text-gray-800 dark:bg-gray-950 dark:text-gray-100">
        <Header theme={theme} setTheme={setTheme} />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
