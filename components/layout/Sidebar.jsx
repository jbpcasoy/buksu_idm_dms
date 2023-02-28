export default function Sidebar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-CITLDarkBlue border-r border-gray-200 sm:translate-x-0  dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-CITLDarkBlue dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              className="flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main "
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-CITLWhite transition duration-75  group-hover:text-CITLGray-main"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">My IM's</span>
            </a>
          </li>

          <li>
            <a
              href="/college"
              className="flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Colleges</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    // <div className='flex flex-row min-h-screen'>
    //   <div className='bg-CITLDarkBlue text-gray-100 flex flex-col justify-between w-64'>
    //     <div className='flex flex-col  font font-semibold'>
    //       <Link
    //         href='/'
    //         className={`px-4 py-2 hover:bg-gray-700 ${
    //           active === "myIMs" ? "bg-white text-gray-900" : ""
    //         }`}>
    //         My IMs
    //       </Link>
    //       <Link
    //         href='/college'
    //         className={`px-4 py-2 hover:bg-gray-700 ${
    //           active === "colleges" ? "bg-white text-gray-900" : ""
    //         }`}>
    //         Colleges
    //       </Link>

    //       <Link href='#' className='px-4 py-2 hover:bg-gray-700'>
    //         Contact
    //       </Link>
    //     </div>
    //     <div className='px-4 pb-5 '>
    //       <Link href='#' className='text-sm hover:text-gray-500'>
    //         Privacy Policy
    //       </Link>
    //       <Link href='#' className='text-sm hover:text-gray-500'>
    //         Terms of Service
    //       </Link>
    //     </div>
    //   </div>
    //   <div className='flex-1 flex flex-col'>
    //     {/* <h1 className="text-2xl font-bold">Content Area</h1> */}
    //     {children}
    //   </div>
    // </div>
  );
}
