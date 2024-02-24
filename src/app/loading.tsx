import { Skeleton } from "@/components/ui/skeleton";

export default function AboutLoading() {
  return (
    <>
      {/* profile image(s) */}
      <Skeleton className="w-[300px] h-[300px] rounded-md bg-gray-800" />

      {/* job title */}
      <div className="w-full flex justify-center sm:w-[90%] md:w-[80%] mt-6">
        <Skeleton className="w-[70%] h-[50px] rounded-md bg-gray-800" />
      </div>

      {/* description */}
      <div className="w-full mt-6 flex flex-col items-center gap-y-3">
        <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
        <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
        <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
        <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
        <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
        <Skeleton className="w-[90%] h-[20px] rounded bg-gray-800" />
      </div>

      {/* tools */}
      <div className="mt-6 flex flex-col items-center">
        <Skeleton className="w-[150px] h-[40px] rounded bg-gray-800" />

        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
        </div>
      </div>

      {/* contact */}
      <div className="mt-6 flex flex-col items-center">
        <Skeleton className="w-[150px] h-[40px] rounded bg-gray-800" />

        <div className="flex justify-center gap-8 mt-6">
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
          <Skeleton className="w-[50px] h-[50px] rounded bg-gray-800" />
        </div>
      </div>

      {/* connect */}
      <div className="w-full flex justify-center sm:w-[90%] md:w-[80%] mt-6">
        <Skeleton className="w-[300px] h-[50px] rounded-md bg-gray-800" />
      </div>
    </>
  );
}
