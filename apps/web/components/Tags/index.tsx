import React from "react";

export default function Tags({ data }: { data: any }) {
  return (
    <div className="inline-flex w-full flex-wrap my-10">
      {data?.map((tag: any, idx: number) => {
        return (
          <span
            key={idx}
            className="bg-purple-100 capitalize m-2 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}
