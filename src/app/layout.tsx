import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/page_header";
import Navigation from "@/components/page_navigation";
import QueryProvider from "./query_provider";
import "@/style/global.css";

const appFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-appfont",
});

export const metadata: Metadata = {
  title: "NaijaDeveloper | Enoch E - Creative Developer and Tech Enthusiast",
  description:
    "Welcome to the digital realm of NaijaDeveloper, where I Enoch E showcases a dynamic portfolio in software development, covering all aspects, the web, mobile and desktop. Witness my journey and passion for crafting digital experiences that leave a lasting impact",
  keywords: [
    "web development",
    "software engineering",
    "tech enthusiast",
    "creative developer",
    "coding projects",
    "naijadeveloper",
    "naijadev",
    "enoch e",
    "enoch enujiugha",
    "enoch e portfolio",
    "web design",
    "digital experiences",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${appFont.variable} font-appfont min-h-screen`}>
        <Header />
        <Navigation />
        <main className="relative mx-auto min-h-screen w-full p-4 pt-16 pb-5 md:w-[98%] md:rounded-t-lg flex flex-col items-center bg-gray-900">
          <QueryProvider>{children}</QueryProvider>
        </main>
      </body>
    </html>
  );
}
