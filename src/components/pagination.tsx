export default function Pagination({
  start,
  end,
  length,
  currentPage,
  numOfPages,
  changePageForward,
  changePageBackward,
}: {
  start: number;
  end: number;
  length: number;
  currentPage: number;
  numOfPages: number;
  changePageForward: () => void;
  changePageBackward: () => void;
}) {
  return (
    <div className="w-full flex justify-end">
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {start}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {end}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {length}
          </span>{" "}
          {length > 1 ? "Projects" : "Project"}
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={changePageBackward}
            disabled={currentPage == 1}
            className={`flex items-center justify-center px-4 h-10 text-base font-medium rounded-s bg-gray-800 border-gray-700 text-gray-400 ${
              currentPage !== 1 &&
              "hover:bg-gray-700 hover:text-white cursor-pointer"
            }`}
          >
            Prev
          </button>
          <button
            onClick={changePageForward}
            disabled={currentPage == numOfPages}
            className={`flex items-center justify-center px-4 h-10 text-base font-medium border-0 border-s rounded-e bg-gray-800 border-gray-700 text-gray-400 ${
              currentPage !== numOfPages &&
              "hover:bg-gray-700 hover:text-white cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
