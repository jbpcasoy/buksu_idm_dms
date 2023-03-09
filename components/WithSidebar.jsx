import Link from "next/link";

export default function WithSidebar({ children, active }) {
  return (
    <div>
      <nav className='fixed top-0 z-50 w-full bg-CITLDarkBlue border-b border-CITLGray-main'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start'>
              <button
                data-drawer-target='logo-sidebar'
                data-drawer-toggle='logo-sidebar'
                aria-controls='logo-sidebar'
                type='button'
                className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              >
                <span className='sr-only'>Open sidebar</span>
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clipRule='evenodd'
                    fillRule='evenodd'
                    d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                  ></path>
                </svg>
              </button>
              <Link href='/' className='flex ml-2 md:mr-24'>
                <img
                  src='IMAGES/Logo.png'
                  className='h-8 sm:h-10 mr-3'
                  alt='BukSUIMD Logo'
                />
              </Link>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center mr-3'>
                <div>
                  <button
                    type='button'
                    className='flex text-sm text-CITLWhite '
                    aria-expanded='false'
                    data-dropdown-toggle='dropdown-user'
                  >
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='w-8 h-8 rounded-full'
                      src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                      alt='user photo'
                    />
                  </button>
                </div>
                <div
                  className=' z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100  shadow dark:bg-gray-700 dark:divide-gray-600 rounded-lg'
                  id='dropdown-user'
                >
                  <div className='px-4 py-3 ' role='none'>
                    <p
                      className='text-sm text-gray-900 dark:text-white'
                      role='none'
                    >
                      Neil Sims
                    </p>
                    <p
                      className='text-sm font-medium text-gray-900 truncate dark:text-gray-300'
                      role='none'
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className='py-1' role='none'>
                    <li>
                      <Link
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Settings
                      </Link>
                    </li>

                    <li>
                      <Link
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                        role='menuitem'
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id='logo-sidebar'
        className='fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-CITLDarkBlue border-r border-gray-200 sm:translate-x-0  dark:bg-gray-800 dark:border-gray-700'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 pb-4 overflow-y-auto bg-CITLDarkBlue dark:bg-gray-800'>
          <ul className='space-y-2'>
            <li>
              <Link
                href='#'
                className='flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main '
              >
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-CITLWhite transition duration-75  group-hover:text-CITLGray-main'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                  <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                </svg>
                <span className='ml-3'>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                href='#'
                className='flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Users</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className='p-4 sm:ml-64'>
        <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14'>
          <div className='grid grid-cols-3 gap-4 mb-4'>
            <div className='flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
            <div className='flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
            <div className='flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
          </div>
          <div className='flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
            <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
            <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
            <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
          </div>
          <div className='flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800'>
            <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
            <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
            <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
            <div className='flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800'>
              <p className='text-2xl text-gray-400 dark:text-gray-500'>+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
