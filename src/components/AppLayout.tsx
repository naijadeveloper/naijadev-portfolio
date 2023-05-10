import React, { ReactNode, useState, useEffect } from "react";
import Meta from "./Meta";
import Header from "./Header";
import { Poppins } from "next/font/google";

const appFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-appfont",
});

export type themeProp = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export default function AppLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>("");

  // reset the theme to the localStorage saved theme value if exist
  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    if (getTheme == null) {
      setTheme("");
    } else {
      setTheme(getTheme);
    }
  }, []);
  // when theme changes reset it.
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`${theme} ${appFont.variable} font-appfont`}>
      <Meta />
      <div className="bg-gray-900 text-gray-800 dark:bg-gray-950 dark:text-gray-100 min-h-screen">
        <Header theme={theme} setTheme={setTheme} />
        <main>{children}</main>
      </div>
    </div>
  );
}
