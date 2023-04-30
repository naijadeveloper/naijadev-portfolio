import { ReactNode } from "react";
import Meta from "./Meta";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
}
