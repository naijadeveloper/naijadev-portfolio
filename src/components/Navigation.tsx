import Link from "next/link";

type navProps = {
  li1_bg: string;
  li1_tx: string;
  darkli1_bg: string;
  darkli1_tx: string;

  li2_bg: string;
  li2_tx: string;
  darkli2_bg: string;
  darkli2_tx: string;
};
export default function Navigation({
  li1_bg,
  li1_tx,
  li2_bg,
  li2_tx,
  darkli1_bg,
  darkli1_tx,
  darkli2_bg,
  darkli2_tx,
}: navProps) {
  return (
    <ul className="flex justify-center bg-gray-900 dark:bg-gray-950">
      <li
        className={`w-[100px] p-3 ${li1_bg} ${li1_tx} flex justify-center items-center rounded-tl-md ${darkli1_bg} ${darkli1_tx} font-bold border-t border-l border-gray-200`}
      >
        <span className="mr-px" role="icon" aria-label="about-icon">
          🤵🏾
        </span>
        <Link href="/">About</Link>
      </li>

      <li
        className={`w-[100px] p-3 ${li2_bg} ${li2_tx} flex justify-center items-center rounded-tr-md ${darkli2_bg} ${darkli2_tx} font-bold border-t border-r border-gray-200`}
      >
        <span className="mr-px" role="icon" aria-label="project-icon">
          🗃️
        </span>
        <Link href="/projects">Projects</Link>
      </li>
    </ul>
  );
}
