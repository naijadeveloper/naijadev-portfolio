import React, { ReactNode } from "react";
import Meta from "./Meta";
import Header from "./Header";
import { Poppins } from "next/font/google";

import { ThemeProvider } from "next-themes";

const appFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-appfont",
});

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className={`${appFont.variable} font-appfont`}>
        <Meta />
        <div className="bg-gray-900 text-gray-800 dark:bg-gray-950 dark:text-gray-100 min-h-screen">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}
