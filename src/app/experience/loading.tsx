import { Skeleton } from "@/components/ui/skeleton";

export default function ExperienceLoading() {
  return (
    <ol className="w-full md:w-[85%] py-4 pr-2 relative border-s-4 mt-4 mb-6 shadow-sm bg-gray-800 border-gray-700">
      {Array(4)
        .fill(0)
        .map((item, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
            {/* date */}
            <Skeleton className="w-[100px] h-[15px] my-2 rounded bg-gray-700" />

            {/* title */}
            <Skeleton className="w-[60%] h-[30px] rounded my-4 bg-gray-700" />

            <div className="mb-4 flex flex-col gap-y-2">
              <Skeleton className="w-[90%] h-[20px] rounded bg-gray-700" />
              <Skeleton className="w-[90%] h-[20px] rounded bg-gray-700" />
              <Skeleton className="w-[90%] h-[20px] rounded bg-gray-700" />
            </div>
            <ul role="list" className="space-y-5 my-4">
              <li className="flex items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <Skeleton className="w-[90%] h-[20px] rounded bg-gray-700 ms-3" />
              </li>

              <li className="flex items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <Skeleton className="w-[90%] h-[20px] rounded bg-gray-700 ms-3" />
              </li>
            </ul>
            <Skeleton className="w-[100px] h-[30px] rounded bg-gray-700" />
          </li>
        ))}
    </ol>
  );
}
