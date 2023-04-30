import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>
        <span>The</span>
        <span>Naija</span>
        <span>Developer</span>
      </h1>
      <ul>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </header>
  );
}
