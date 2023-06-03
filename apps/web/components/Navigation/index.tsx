// import React, { useState } from "react";
export default function Home() {
  // const [sideBar, setsideBar] = useState();
  return (
    <>
      <div className="h-full w-full">
        {/* Code block starts */}
        <nav
          role="navigation"
          className="md:px-6 px-4  w-full mx-auto hidden md:block"
        >
          <div className="container justify-between py-5 flex items-center md:items-stretch mx-auto border-b border-gray-200 border-opacity-20">
            <div className="h-full flex-col items-center inline-flex">
              <button
                role="img"
                aria-label="logo"
                className="focus:outline-none text-4xl focus:ring-2 focus:ring-offset-2 font-bold focus:ring-indigo-700 mr-10 flex items-center"
              >
                Moji.l😂l
              </button>
              <p className="font-bold">The best place for mojis! </p>
            </div>
            <div className="h-full flex items-center justify-center lg:pr-40">
              <div className="relative">
                <div className="text-gray-400 absolute w-6 h-6 ml-5 mr-10 inset-0 m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search w-full h-full"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
                </div>
                <input
                  className="hidden text-2xl rounded-3xl pl-12 bg-gray-100 md:block focus:outline-none focus:border-indigo-700 lg:w-96 w-72 text-gray-900  py-2 placeholder-gray-400"
                  type="text"
                  placeholder="Search mojis.."
                />
              </div>
            </div>
            <div className="md:flex items-center justify-end hidden">
              <div className="flex items-center">
                <div className="h-full flex items-center">
                  <button
                    aria-label="show notifications"
                    className="relative focus:outline-none hover:text-indigo-100 focus:text-indigo-100 text-indigo-50 mx-5 h-full flex items-center justify-center cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bell"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                    <div className="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                      <div className="animate-ping w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center md:hidden">
              <ul className="p-2 border-r absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
                <li className="flex md:hidden cursor-pointer text-indigo-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-100 focus:text-indigo-100 focus:outline-none">
                  <div className="flex items-center">
                    <span className="ml-2 font-bold">Dashboard</span>
                  </div>
                </li>
                <li className="flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-100 focus:text-indigo-100 focus:outline-none  justify-center">
                  <div className="flex items-center">
                    <span className="ml-2 font-bold">Products</span>
                  </div>
                </li>
                <li className="flex md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-100 focus:text-indigo-100 focus:outline-none  justify-center">
                  <div className="flex items-center">
                    <span className="ml-2 font-bold">Performance</span>
                  </div>
                </li>
                <li className="border-b border-gray-300 flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-100  items-center focus:text-indigo-700 focus:outline-none">
                  <span className="ml-2 font-bold">Deliverables</span>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-100 focus:outline-none">
                  <div className="flex items-center">
                    <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                      {/* <img
                        className="rounded h-10 w-10 object-cover"
                        src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                        alt="logo"
                      /> */}
                    </div>
                    <p className="text-sm ml-2 cursor-pointer">Jane Doe</p>
                    <div className="sm:ml-2 text-gray-800 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={7} r={4} />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <span className="ml-2">Profile</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-logout"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                  </svg>
                  <span className="ml-2">Sign out</span>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="container py-4  justify-between flex items-center md:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <ul className="pr-12 md:flex items-center h-full hidden">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none font-medium cursor-pointer h-full flex items-center hover:text-indigo-100 text-sm text-indigo-50 tracking-normal"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none font-medium cursor-pointer h-full flex items-center hover:text-indigo-100 text-sm text-indigo-50 mx-6 tracking-normal"
                  >
                    Transactions
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none font-medium cursor-pointer h-full flex items-center hover:text-indigo-100 text-sm text-indigo-50 mr-6 tracking-normal"
                  >
                    Stats
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none font-medium cursor-pointer h-full flex items-center hover:text-indigo-100 text-sm text-indigo-50 mr-6 tracking-normal"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="focus:outline-none font-medium cursor-pointer h-full flex items-center hover:text-indigo-100 text-sm text-indigo-50 mr-6 tracking-normal"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </nav>
        {/* Navbar */}

        {/* Sidebar ends */}
        {/* Code block ends */}
      </div>
    </>
  );
}
