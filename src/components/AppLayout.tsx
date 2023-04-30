import { ReactNode } from "react";
import Meta from "./Meta";
import Header from "./Header";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
      <div className="dark bg-gray-950">
        <Header />
        <main className="mx-auto h-screen w-full bg-gray-100 p-4 text-white dark:bg-gray-900 md:w-[98%] md:rounded-t-lg">
          {children}
        </main>
      </div>
    </>
  );
}
