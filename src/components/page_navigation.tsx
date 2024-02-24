"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const path = usePathname();

  return (
    <div className="flex justify-center relative">
      <Button
        asChild
        variant={path == "/" ? "outline" : "secondary"}
        size="lg"
        className={`max-[500px]:h-10 max-[500px]:px-4 max-[500px]:py-2 font-bold rounded-tr-none rounded-br-none rounded-bl-none ${
          path == "/" && "hover:bg-background border-2 border-b-0"
        }`}
      >
        <Link href="/">About</Link>
      </Button>

      <Button
        asChild
        variant={path.includes("/projects") ? "outline" : "secondary"}
        size="lg"
        className={`max-[500px]:h-10 max-[500px]:px-4 max-[500px]:py-2 font-bold rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-none ${
          path.includes("/projects") &&
          "hover:bg-background border-2 border-b-0"
        }`}
      >
        <Link href="/projects">Projects</Link>
      </Button>

      {/* <Button
        asChild
        variant={path == "/experience" ? "outline" : "secondary"}
        size="lg"
        className={`max-[500px]:h-10 max-[500px]:px-4 max-[500px]:py-2 font-bold rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-none ${
          path == "/experience" && "hover:bg-background border-2 border-b-0"
        }`}
      >
        <Link href="/experience">Experience</Link>
      </Button> */}

      <Button
        asChild
        variant={path == "/experience" ? "outline" : "secondary"}
        size="lg"
        className={`max-[500px]:h-10 max-[500px]:px-4 max-[500px]:py-2 font-bold rounded-tl-none rounded-br-none rounded-bl-none ${
          path == "/experience" && "hover:bg-background border-2 border-b-0"
        }`}
      >
        <Link href="/experience">Experience</Link>
      </Button>
    </div>
  );
}
