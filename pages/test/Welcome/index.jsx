import Layout from "@/components/layout/Layout";

export default function Welcome() {
  return (
    <Layout>
      <div className=' flex-wrap grid text-center justify-items-center  border min-h-fit border-slate-300  bg-CITLGray-light m-2 p-3 rounded-lg  overflow-hidden'>
        <section className=''>
          <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              className='text-center  w-full'
              height='96'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M12 9v5M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12v-.01Z'
                stroke='#FF8A65'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M11.995 17h.009'
                stroke='#FF8A65'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
            <h1 className='mb-4 text-lg font-extrabold tracking-tight leading-none text-CITLDarkBlue md:text-5xl lg:text-5xl dark:text-white'>
              Oops!
            </h1>
            <p className='  text-sm font-normal text-gray-500 lg:text-lg sm:px-16 lg:px-48 dark:text-gray-400'>
              Your account is not yet added as faculty.
            </p>{" "}
            <p className='  text-sm font-normal text-gray-500 lg:text-lg sm:px-16 lg:px-48 dark:text-gray-400'>
              Please contact the administrator for activation.
            </p>
            {/* <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
              <a
                href='#'
                className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
              >
                Get started
                <svg
                  aria-hidden='true'
                  className='ml-2 -mr-1 w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
              <a
                href='#'
                className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
              >
                Learn more
              </a>
            </div> */}
          </div>
        </section>
      </div>
    </Layout>
  );
}
