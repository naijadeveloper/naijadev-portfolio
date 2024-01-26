"use client";

import { useState, useEffect } from "react";

import LoadingSkeleton from "./_ProjectPage_sections/loading";
import Retry from "./_ProjectPage_sections/retry";
import Default from "./_ProjectPage_sections/default";

type dataType = [string, Record<string, string>][];

const getData = async (
  abortController: AbortController,
  setData: React.Dispatch<React.SetStateAction<dataType>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // performing fetch on the server failed
  // reason?, I am not sure, so I am switching to client using
  // useState and useEffect
  try {
    const raw = await fetch(
      "https://raw.githubusercontent.com/naijadeveloper/naijadev-metadata/master/main.json",
      { signal: abortController.signal }
    );

    if (!raw.ok) {
      throw new Error("");
    }

    const data = await raw.json();

    setData(() => Object.entries(data));
    setLoading(false); // remove the loading skeleton
  } catch (err: any) {
    if (err.name !== "AbortError") {
      setError(true);
      setLoading(false); // remove the loading skeleton
    }
  }
  // setting the loading state using finally block, yielded undesired result
  // for net::ERR_TIMED_OUT error
};

export default function ProjectsPage() {
  const [data, setData] = useState<dataType>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [retry, setRetry] = useState<number>(0);

  useEffect(() => {
    setLoading(true); // reset to true, for every call
    setError(false); // reset to false, for every call

    const abortController = new AbortController();

    getData(abortController, setData, setLoading, setError);

    // unMount
    return () => abortController.abort();
  }, [retry]);

  // return conditions for loading, error and default states

  if (loading) return <LoadingSkeleton />;

  if (error) return <Retry setRetry={setRetry} />;

  return (
    <div className="space-y-10">
      {data.map((item, index) => (
        <Default
          key={index}
          title={item[1].title}
          description={item[1].description}
          link={item[0]}
        />
      ))}
    </div>
  );
}
