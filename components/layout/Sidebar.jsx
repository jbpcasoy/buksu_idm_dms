import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      id='logo-sidebar'
      className='fixed top-0 left-0 z-10 w-64 h-screen pt-20 transition-transform -translate-x-full bg-CITLDarkBlue border-r border-gray-200 sm:translate-x-0  dark:bg-gray-800 dark:border-gray-700'
      aria-label='Sidebar'
    >
      <div className='h-full px-3 pb-4 overflow-y-auto bg-CITLDarkBlue dark:bg-gray-800'>
        <ul className='space-y-2'>
          <li>
            <Link
              href='/'
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
              <span className='ml-3'>My IM&apos;s</span>
            </Link>
          </li>

          <li>
            <Link
              href='/college'
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
              <span className='flex-1 ml-3 whitespace-nowrap'>Colleges</span>
            </Link>
          </li>
        </ul>
        <div className='fixed bottom-0'>
          <hr class='h-px my-8 w-56 bg-CITLGray-main border-0 dark:bg-gray-700' />
          <p className='text-xs text-CITLGray-main tracking-tight '>
            Bukidnon State University
          </p>
          <p className='text-xs text-CITLGray-main tracking-tighter '>
            Center for Innovative Teaching and Learning
          </p>
          <div className='my-6 '>
            <ul class='mt-2 flex justify-center gap-6 md:gap-8'>
              <li>
                <a
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  class='text-CITLGray-main transition hover:text-gray-700/75'
                  title='Facebook'
                >
                  <span class='sr-only'>Facebook</span>
                  <svg
                    class='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  class='text-CITLGray-main transition hover:text-gray-700/75'
                >
                  <span class='sr-only'>Instagram</span>
                  <svg
                    class='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  class='text-CITLGray-main transition hover:text-gray-700/75'
                >
                  <span class='sr-only'>Twitter</span>
                  <svg
                    class='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
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
