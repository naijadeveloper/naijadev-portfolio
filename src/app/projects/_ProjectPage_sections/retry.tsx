export default function Retry({ refetch }: { refetch: () => Promise<any> }) {
  return (
    <div className="py-8 px-4 mx-auto text-center rounded-lg shadow-xl bg-gray-800 border-gray-700 lg:py-16 max-sm:px-2">
      <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none sm:text-4xl md:text-5xl lg:text-6xl text-white">
        Something went wrong😐
      </h1>

      <div className="mb-8 text-lg font-normal lg:text-xl sm:px-16 text-gray-400">
        <p className="text-xl font-bold">Possible problems🤔</p>

        <ul role="list" className="space-y-3 my-5">
          <li>👉🏾You are not connected to the internet.</li>

          <li>
            👉🏾Some ISPs don't allow downloading files from github using the
            github api. I am not sure why.
          </li>
        </ul>

        <p className="text-xl font-bold">
          Solution: Connect to the internet / Switch to a different ISP / Use a
          VPN
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center">
        <button
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900"
          onClick={refetch}
        >
          Please, try again
        </button>
      </div>
    </div>
  );
}
