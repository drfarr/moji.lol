import React, { Fragment } from "react";

import { Navigation, Search, UserNav } from "@esrevinu/ui";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4 content-between">
            <Navigation
              logo={
                <Fragment>
                  <span className="hidden font-bold sm:inline-block">
                    Moji.lol
                  </span>
                  <small>The best place for mojis</small>
                </Fragment>
              }
            />
            <Search
              className="bg-slate-100 w-52"
              placeholder="Search Mojis..."
            />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
      </div>
      <div className="container relative pb-10">
        <main className="container mx-auto">{children}</main>
      </div>
    </>
  );
}
