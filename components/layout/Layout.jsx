import UserContext from "@/contexts/UserContext";
import { initCarousels } from "flowbite";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children, active }) {
  const { user, userError, userLoading } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    console.log({ user, userError, userLoading });
    if (userLoading || !user) return;

    if (user?.LoginRole?.Role === "ADMIN") {
      router.push("/admin");
    }
  }, [user, userError, userLoading, router]);

  useEffect(() => {
    initCarousels();
  });

  return (
    <div>
      <Header />
      <Sidebar />
      <div className=' sm:ml-64'>
        <div className='p-2'>
          <div className=' mt-16'>
            <div className=''>
              <div
                id='indicators-carousel'
                className='relative w-full z-0'
                data-carousel='static'
              >
                {/* <!-- Carousel wrapper --> */}
                <div
                  className='flex flex-wrap  border border-slate-300 m-2 p-3 relative h-56 overflow-hidden rounded-lg '
                  // style={{ backgroundImage: "url(/IMAGES/DSC_6510.jpg)" }}
                >
                  {/* <!-- Item 1 --> */}
                  <div
                    className='hidden duration-700 ease-in-out bg-gradient-to-r from-CITLOrange'
                    data-carousel-item='active'
                  >
                    <div className='px-8 py-4 overflow-hidden grid grid-flow-col-2 h-full'>
                      <div className='md:grid md:grid-cols-3'>
                        <div className='md:col-span-2'>
                          <div className=' grid text-left  mt-12'>
                            <div className=''>
                              <h3 className='text-2xl font-semibold'>
                                Announcement
                              </h3>
                              <p className=''>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                              <button className='border border-CITLDarkBlue rounded-md py-1 px-2.5 mt-2'>
                                Read more
                              </button>
                            </div>
                            {/* <li>
                      <img
                        src='/IMAGES/DSC_6510.jpg'
                        className='flex w-64 rounded-lg m-2 object-cover relative'
                        alt='...'
                      />
                    </li> */}
                          </div>
                        </div>
                        <div
                          className='rounded-lg bg-cover bg-center hidden md:block'
                          style={{
                            backgroundImage: "url(/IMAGES/DSC_6510.jpg)",
                          }}
                        >
                          {/* <img
                    src='/IMAGES/DSC_6510.jpg'
                    className='flex w-full rounded-lg  '
                    alt='...'
                  /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item 2 --> */}
                  <div
                    className='hidden duration-700 ease-in-out bg-cover  bg-gradient-to-r from-CITLOrange bg-no-repeat'
                    style={{ backgroundImage: "url('/IMAGES/DSC_6510.jpg')" }}
                    data-carousel-item
                  ></div>
                  {/* <!-- Ite/m 3 --> */}
                  <div
                    className='hidden duration-700 ease-in-out bg-cover bg-gradient-to-r from-CITLOrange bg-no-repeat'
                    style={{ backgroundImage: "url('/IMAGES/DSC_6474.jpg')" }}
                    data-carousel-item
                  ></div>
                  {/* <!-- Item 4 --> */}
                  <div
                    className='hidden duration-700 ease-in-out bg-cover  bg-gradient-to-r from-CITLOrange bg-no-repeat'
                    style={{ backgroundImage: "url('/IMAGES/DSC_6510.jpg')" }}
                    data-carousel-item
                  ></div>
                  {/* <!-- Item 5 --> */}
                  <div
                    className='hidden duration-700 ease-in-out bg-cover bg-gradient-to-r from-CITLOrange bg-no-repeat'
                    style={{ backgroundImage: "url('/IMAGES/DSC_6474.jpg')" }}
                    data-carousel-item
                  ></div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className='absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2'>
                  <button
                    type='button'
                    className='w-3 h-3 rounded-full'
                    aria-current='true'
                    aria-label='Slide 1'
                    data-carousel-slide-to='0'
                  ></button>
                  <button
                    type='button'
                    className='w-3 h-3 rounded-full'
                    aria-current='false'
                    aria-label='Slide 2'
                    data-carousel-slide-to='1'
                  ></button>
                  <button
                    type='button'
                    className='w-3 h-3 rounded-full'
                    aria-current='false'
                    aria-label='Slide 3'
                    data-carousel-slide-to='2'
                  ></button>
                  <button
                    type='button'
                    className='w-3 h-3 rounded-full'
                    aria-current='false'
                    aria-label='Slide 4'
                    data-carousel-slide-to='3'
                  ></button>
                  <button
                    type='button'
                    className='w-3 h-3 rounded-full'
                    aria-current='false'
                    aria-label='Slide 5'
                    data-carousel-slide-to='4'
                  ></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button
                  type='button'
                  className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                  data-carousel-prev
                >
                  <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 19l-7-7 7-7'
                      ></path>
                    </svg>
                    <span className='sr-only'>Previous</span>
                  </span>
                </button>
                <button
                  type='button'
                  className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                  data-carousel-next
                >
                  <span className='inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 5l7 7-7 7'
                      ></path>
                    </svg>
                    <span className='sr-only'>Next</span>
                  </span>
                </button>
              </div>
              {/* <div className='flex flex-wrap items-center border border-slate-300  bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
                <div className='px-6 py-4 md:w-10/12 sm:w-12/12'>
                  <h3 className='text-lg font-semibold text-CITLDarkBlue'>
                    Announcement
                  </h3>
                  <p className='text-gray-600 mt-2 pb-5'>
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

                <img
                  className='md:w-2/12 sm:w-12/12 rounded-lg object-cover relative shadow-lg'
                  src='/IMAGES/DSC_6510.jpg'
                  alt='Announcement Image'
                />
              </div> */}
            </div>
            {children}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
