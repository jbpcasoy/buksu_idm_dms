import Layout from "@/components/layout/Layout";
import { initCarousels } from "flowbite";
import Link from "next/link";
import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    initCarousels();
  });

  return (
    <Layout>
      <div
        id='indicators-carousel'
        class='relative w-full z-0'
        data-carousel='static'
      >
        {/* <!-- Carousel wrapper --> */}
        <div class='relative h-48 overflow-hidden rounded-lg md:h-64'>
          {/* <!-- Item 1 --> */}
          <div
            class='hidden duration-700 ease-in-out'
            data-carousel-item='active'
          >
            {/* <img
              src='https://flowbite.com/docs/images/carousel/carousel-1.svg'
              class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='...'
            /> */}
            <div className=' absolute block w-full h-full'>
              <div
                style={{
                  backgroundImage: "url('/IMAGES/DSC_6510.jpg')",
                }}
                className=' flex flex-wrap items-center border border-slate-300 h-full p-3 relative rounded-lg shadow-lg overflow-hidden'
              >
                <div className='md:px-6 md:py-4 w-full'>
                  <h3 className='text-lg font-semibold text-CITLDarkBlue'>
                    Announcement
                  </h3>
                  <p className='text-gray-600 mt-2 pb-5 truncate overflow-hidden '>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quia facere natus eos amet dolor quam, sit, consequatur
                    rerum unde similique provident, eaque a perspiciatis
                    aspernatur ex odio sequi corrupti quae!
                  </p>
                  <Link
                    href={`/`}
                    className='inline-flex items-center px-4 py-2.5 text-sm font-medium text-CITLDarkBlue bg-CITLOrange border  rounded-lg  hover:text-CITLOrange hover:bg-transparent hover:border-CITLOrange focus:outline-none '
                  >
                    Read more{" "}
                    <svg
                      className='w-3 h-3 ml-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Item 2 --> */}
          <div class='hidden duration-700 ease-in-out' data-carousel-item>
            <img
              src='https://flowbite.com/docs/images/carousel/carousel-2.svg'
              class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='...'
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div class='hidden duration-700 ease-in-out' data-carousel-item>
            <img
              src='https://flowbite.com/docs/images/carousel/carousel-3.svg'
              class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='...'
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div class='hidden duration-700 ease-in-out' data-carousel-item>
            <img
              src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
              class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='...'
            />
          </div>
          {/* <!-- Item 5 --> */}
          <div class='hidden duration-700 ease-in-out' data-carousel-item>
            <img
              src='https://flowbite.com/docs/images/carousel/carousel-5.svg'
              class='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='...'
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div class='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
          <button
            type='button'
            class='w-3 h-3 rounded-full'
            aria-current='true'
            aria-label='Slide 1'
            data-carousel-slide-to='0'
          ></button>
          <button
            type='button'
            class='w-3 h-3 rounded-full'
            aria-current='false'
            aria-label='Slide 2'
            data-carousel-slide-to='1'
          ></button>
          <button
            type='button'
            class='w-3 h-3 rounded-full'
            aria-current='false'
            aria-label='Slide 3'
            data-carousel-slide-to='2'
          ></button>
          <button
            type='button'
            class='w-3 h-3 rounded-full'
            aria-current='false'
            aria-label='Slide 4'
            data-carousel-slide-to='3'
          ></button>
          <button
            type='button'
            class='w-3 h-3 rounded-full'
            aria-current='false'
            aria-label='Slide 5'
            data-carousel-slide-to='4'
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type='button'
          class='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev
        >
          <span class='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              aria-hidden='true'
              class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 19l-7-7 7-7'
              ></path>
            </svg>
            <span class='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          class='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next
        >
          <span class='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              aria-hidden='true'
              class='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 5l7 7-7 7'
              ></path>
            </svg>
            <span class='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </Layout>
  );
}
