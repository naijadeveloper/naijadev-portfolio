import Link from "next/link";

export default function Bmc() {
  return (
    <div className="absolute top-3 left-1 min-w-[100px] flex flex-col items-center">
      <span className="text-xs pl-4">If you are feeling generous</span>
      <Link
        href="https://www.buymeacoffee.com/mmejuenoch"
        className="flex items-center p-1 pl-0 bg-yellow-700 rounded text-gray-100 text-sm"
      >
        <img src="/imgs/bmc.png" alt="bmc-logo" className="w-[30px]" />
        <span className="-ml-1">Support me here</span>
      </Link>
    </div>
  );
}
