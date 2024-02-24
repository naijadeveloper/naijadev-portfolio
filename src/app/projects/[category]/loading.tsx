import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsPageLoading() {
  return (
    <div className="w-full grid mt-4 mb-6 rounded-lg shadow-sm md:grid-cols-2">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <figure
            key={index}
            className={`relative flex flex-col items-center justify-center p-8 text-center bg-gray-800 border-gray-700 border ${
              index == 0 && "max-md:rounded-t-lg md:rounded-tl-lg"
            } ${
              index == 1 && "max-md:border-t-0 md:border-l-0 md:rounded-tr-lg"
            }  ${index == 2 && "border-t-0 md:rounded-bl-lg"} ${
              index == 3 &&
              "border-t-0 md:border-l-0 max-md:rounded-b-lg md:rounded-br-lg"
            }`}
          >
            <Skeleton
              className={`w-[50px] h-[20px] absolute top-2 right-3 font-medium me-2 px-2.5 py-0.5 rounded bg-gray-900`}
            />

            <blockquote className="max-w-2xl mx-auto mb-4">
              <Skeleton className="w-full md:w-[300px] h-[40px] bg-gray-900" />

              <ul className="mt-4 flex gap-2 flex-wrap items-center justify-center">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton
                      key={i}
                      className={`w-[50px] h-[20px] px-2.5 py-0.5 rounded bg-gray-900`}
                    />
                  ))}
              </ul>
              <div className="mt-6">
                <Skeleton className="w-full md:w-[300px] h-[15px] my-4 bg-gray-900 rounded-sm" />
                <Skeleton className="w-full md:w-[300px] h-[15px] my-4 bg-gray-900 rounded-sm" />
                <Skeleton className="w-full md:w-[300px] h-[15px] my-4 bg-gray-900 rounded-sm" />
                <Skeleton className="w-full md:w-[300px] h-[15px] my-4 bg-gray-900 rounded-sm" />
              </div>
              {/*240/288 chars / 43/53 words*/}
            </blockquote>

            <figcaption className="flex items-center justify-center gap-4">
              <Skeleton className="w-[100px] h-[50px] bg-gray-900" />
              <Skeleton className="w-[100px] h-[50px] bg-gray-900" />
            </figcaption>
          </figure>
        ))}
    </div>
  );
}
