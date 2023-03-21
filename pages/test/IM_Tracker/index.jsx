import Layout from "@/components/layout/Layout";

export default function IM_Tracker() {
  return (
    <Layout>
      <div className='flex flex-wrap items-center border border-slate-300  bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
        <div className='px-6 py-4 md:w-10/12 sm:w-12/12'>
          <h3 className='text-lg font-semibold text-CITLDarkBlue mb-12'>
            Instructional Material Tracker
          </h3>
          <ol class='relative border-l border-CITLDarkBlue dark:border-gray-700'>
            <li class='mb-10 ml-6'>
              <span class='absolute flex items-center justify-center w-6 h-6 bg-CITLDarkBlue rounded-full -left-3 ring-8 ring-CITLGray-light'>
                <svg
                  fill='currentColor'
                  class='w-8 h-8 text-CITLOrange dark:text-blue-300'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  ></path>
                </svg>
              </span>
              <h3 class='flex items-center mb-1 text-md font-semibold text-gray-900 dark:text-white'>
                Draft{" "}
                {/* <span class='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>
              Latest
            </span> */}
              </h3>
              <time class='block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500'>
                March 18, 2023 8:00 AM
              </time>
              <p class='mb-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                You uploaded an IM{" "}
                <span className='font-semibold text-green-400'>
                  &quot;Introduction to Computing&quot;
                </span>{" "}
                | Authors: John Bryan Pit Acaso, John Michael Acaso, John Bryan
                Acaso.
              </p>

              <a
                href='#'
                class='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
              >
                <svg
                  class='w-4 h-4 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z'
                    clip-rule='evenodd'
                  ></path>
                </svg>{" "}
                Download ZIP
              </a>
            </li>
            <li class='mb-10 ml-6'>
              <span class='absolute flex items-center justify-center w-6 h-6 bg-CITLDarkBlue rounded-full -left-3 ring-8 ring-CITLGray-light dark:ring-gray-900 dark:bg-blue-900'>
                <svg
                  fill='currentColor'
                  class='w-8 h-8 text-CITLOrange dark:text-blue-300'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  ></path>
                </svg>
              </span>
              <h3 class='mb-1 text-md font-semibold text-gray-900 dark:text-white'>
                Department Review
              </h3>
              <time class='block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500'>
                March 20, 2023 9:00 AM
              </time>
              <p class='mb-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                Your IM{" "}
                <span className='font-semibold text-green-400'>
                  &quot;Introduction to Computing &quot;
                </span>{" "}
                was reviewed by the{" "}
                <span className='font-semibold text-CITLDarkBlue'>
                  Faculty Coordinator
                </span>
                .
              </p>
              <p class='mb-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                Your IM{" "}
                <span className='font-semibold text-green-400'>
                  &ldquo;Introduction to Computing&ldquo;
                </span>{" "}
                was reviewed by the{" "}
                <span className='font-semibold text-CITLDarkBlue'>
                  Senior Faculty
                </span>
                .
              </p>
              <p class='mb-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
                Your IM{" "}
                <span className='font-semibold text-green-400'>
                  &quot;Introduction to Computing &quot;
                </span>{" "}
                was reviewed by the{" "}
                <span className='font-semibold text-CITLDarkBlue'>
                  Faculty Chairperson
                </span>
                .
              </p>
            </li>
            <li class='mb-10 ml-6'>
              <span class='absolute flex items-center justify-center w-6 h-6 bg-CITLDarkBlue rounded-full -left-3 ring-8 ring-CITLGray-light dark:ring-gray-900 dark:bg-blue-900'>
                <svg
                  fill='currentColor'
                  class='w-8 h-8 text-CITLOrange dark:text-blue-300'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  ></path>
                </svg>
              </span>
              <h3 class='mb-1 text-md font-semibold text-gray-900 dark:text-white'>
                Draft Revision
              </h3>
              <time class='block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500'>
                Released on December 2nd, 2021
              </time>
              <p class='text-sm font-normal text-gray-500 dark:text-gray-400'>
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
            <li class='mb-10 ml-6'>
              <span class='absolute flex items-center justify-center w-6 h-6 bg-CITLDarkBlue rounded-full -left-3 ring-8 ring-CITLGray-light dark:ring-gray-900 dark:bg-blue-900'>
                <svg
                  fill='currentColor'
                  class='w-8 h-8 text-CITLOrange dark:text-blue-300'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  ></path>
                </svg>
              </span>
              <h3 class='mb-1 text-md font-semibold text-gray-900 dark:text-white'>
                Draft Revision Endorsed
              </h3>
              <time class='block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500'>
                Released on December 7th, 2021
              </time>
              <p class='text-sm font-normal text-gray-500 dark:text-gray-400'>
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class='mb-10 ml-6'>
              <span class='absolute flex items-center justify-center w-6 h-6 bg-CITLDarkBlue rounded-full -left-3 ring-8 ring-CITLGray-light dark:ring-gray-900 dark:bg-blue-900'>
                <svg
                  fill='currentColor'
                  class='w-8 h-8 text-CITLOrange dark:text-blue-300'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  ></path>
                </svg>
              </span>
              <h3 class='mb-1 text-md font-semibold text-gray-900 dark:text-white'>
                CITL Review
              </h3>
              <time class='block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500'>
                Released on December 7th, 2021
              </time>
              <p class='text-sm font-normal text-gray-500 dark:text-gray-400'>
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class='mb-10 ml-6'>
              <span class='absolute flex items-center justify-center w-6 h-6 bg-CITLDarkBlue rounded-full -left-3 ring-8 ring-CITLGray-light dark:ring-gray-900 dark:bg-blue-900'>
                <svg
                  fill='currentColor'
                  class='w-8 h-8 text-CITLOrange dark:text-blue-300'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  ></path>
                </svg>
              </span>
              <h3 class='mb-1 text-md font-semibold text-gray-900 dark:text-white'>
                CITL Review Draft Revised
              </h3>
              <time class='block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500'>
                Released on December 7th, 2021
              </time>
              <p class='text-sm font-normal text-gray-500 dark:text-gray-400'>
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class='mb-10 ml-6'>
              <span class='absolute flex items-center justify-center w-6 h-6 bg-CITLDarkBlue rounded-full -left-3 ring-8 ring-CITLGray-light dark:ring-gray-900 dark:bg-blue-900'>
                <svg
                  fill='currentColor'
                  class='w-8 h-8 text-CITLOrange dark:text-blue-300'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  ></path>
                </svg>
              </span>
              <h3 class='mb-1 text-md font-semibold text-gray-900 dark:text-white'>
                CITL Endorses IM
              </h3>
              <time class='block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500'>
                Released on December 7th, 2021
              </time>
              <p class='text-sm font-normal text-gray-500 dark:text-gray-400'>
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
          </ol>{" "}
        </div>
      </div>
    </Layout>
  );
}
