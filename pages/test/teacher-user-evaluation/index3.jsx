import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function TeacherUserEvaluation() {
  return (
    <Layout>
      <div className='sm:pt-12'>
        <div className='flex items-center border border-CITLGray-lighter bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='w-full '>
            <div className='p-4 '>
              <div className='flex mt-10'>
                <div className='w-9/12 border-t-4 transition duration-500 ease-in-out border-CITLOrange'>
                  <div className=' top-0 mt-2 text-xs font-medium uppercase text-CITLOrange'>
                    step 3 of 5
                  </div>
                </div>
                <div className='w-3/12 border-t-4 ml-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
              </div>
            </div>

            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl mb-8 '>
                B. Clarity
              </h2>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    4. Contains illustrations that enhance student’s
                    understanding of the lesson.
                  </h3>

                  <div className='flex rounded-xl space-x-1 pt-2' x-data='app'>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        htmlFor='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        1
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='2'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        2
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='3'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        3
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='4'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        4
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='5'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    5. Contains images, figures, graphics, audios, or videos
                    that are clear.
                  </h3>

                  <div className='flex rounded-xl space-x-1 pt-2' x-data='app'>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        htmlFor='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        1
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='2'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        2
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='3'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        3
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='4'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        4
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='5'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    6. Gives web links that work.
                  </h3>

                  <div className='flex rounded-xl space-x-1 pt-2' x-data='app'>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        htmlFor='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        1
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='2'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        2
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='3'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        3
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='4'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        4
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='5'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    7. Presents ideas in a well-organized and logical format.
                  </h3>

                  <div className='flex rounded-xl space-x-1 pt-2' x-data='app'>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        htmlFor='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        1
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='2'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        2
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='3'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        3
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='4'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        4
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='5'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    8. Presents ideas in simple, direct language appropriate to
                    the student’s level.
                  </h3>

                  <div className='flex rounded-xl space-x-1 pt-2' x-data='app'>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        htmlFor='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        1
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='2'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        2
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='3'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        3
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='4'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        4
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='5'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    9. Contains instructions that are clear and easy to
                    understand.
                  </h3>

                  <div className='flex rounded-xl space-x-1 pt-2' x-data='app'>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        htmlFor='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        1
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='2'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        2
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='3'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        3
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='4'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        4
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='5'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    10. Contains texts suited to the learner’s comprehension
                    level.
                  </h3>

                  <div className='flex rounded-xl space-x-1 pt-2' x-data='app'>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        htmlFor='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        1
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='2'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        2
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='3'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        3
                      </label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='4'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm  text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        4
                      </label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='5'
                        className='peer hidden'
                      />
                      <label
                        htmlFor='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-sm text-CITLOrange p-1 w-10 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex mt-4'>
                <Link
                  href='/test/teacher-user-evaluation/index2'
                  className='group relative inline-flex items-center overflow-hidden rounded-md border border-current px-8 py-3 text-CITLGray-main focus:outline-none focus:ring active:text-CITLGray-main'
                >
                  <span className='absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4'>
                    <svg
                      className='h-5 w-5 rotate-180'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </span>

                  <span className='text-sm font-medium transition-all group-hover:ml-4'>
                    Previous
                  </span>
                </Link>
                <div className='flex-auto flex flex-row-reverse'>
                  <Link
                    href='/test/teacher-user-evaluation/index4'
                    className='group relative inline-flex items-center overflow-hidden rounded-md bg-CITLDarkBlue px-8 py-3 text-white focus:outline-none focus:ring active:bg-CITLDarkBlue'
                  >
                    <span className='absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4'>
                      <svg
                        className='h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                      </svg>
                    </span>

                    <span className='text-sm font-medium transition-all group-hover:mr-4'>
                      Next
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
