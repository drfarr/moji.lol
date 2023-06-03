import React from "react";

export default function List({ data }: { data: any[] }) {
  return (
    <div className="w-full text-center">
      <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
        {data?.map(({ title, tags }, idx) => {
          return (
            <div
              key={idx}
              className="textbase bg-gray-100 text-gray-500 py-20 px-10 rounded-xl inline-flex flex-col"
            >
              {title}
              {tags?.map((tag: any, idx: number) => {
                return (
                  <span
                    key={idx}
                    className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"
                  >
                    {tag.title}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
