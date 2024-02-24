import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectCategoriesLoading() {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] space-y-10">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="min-h-[200px] py-8 px-4 mx-auto text-center rounded-lg shadow-xl bg-gray-800 border-gray-700 lg:py-16 max-sm:px-2"
          >
            <div className="mb-8 flex flex-col items-center">
              <Skeleton className="w-[70%] h-[100px] rounded-md bg-gray-900" />
            </div>

            <div className="flex flex-col items-center mb-8 sm:px-16 space-y-5">
              <Skeleton className="w-full h-[40px] rounded-md bg-gray-900" />
              <Skeleton className="w-full h-[40px] rounded-md bg-gray-900" />
              <Skeleton className="w-full h-[40px] rounded-md bg-gray-900" />
            </div>

            <div className="flex justify-center">
              <Skeleton className="w-[80%] sm:w-[170px] h-[55px] inline-flex py-3 px-5 rounded-lg bg-gray-900" />
            </div>
          </div>
        ))}
    </div>
  );
}
