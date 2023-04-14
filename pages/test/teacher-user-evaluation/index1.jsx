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
                    step 1 of 5
                  </div>
                </div>
                <div className='w-3/12 border-t-4 ml-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
              </div>
            </div>

            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl '>
                Teacher-User Evaluation
              </h2>
              <p className='mb-8 text-sm'>Evaluation of a Module</p>

              <div>
                <div className='border border-CITLOrange rounded-lg px-3 py-8'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    A. Directions:
                  </h3>
                  <p className='text-sm font-normal text-CITLGray-main'>
                    Please put a check in the space of your choice that
                    corresponds to your rating of a given feature.
                  </p>
                  <p className='text-sm font-normal text-CITLGray-main'>
                    Please do not leave any item blank.
                  </p>

                  <ul className=' items-center w-full text-sm font-medium  rounded-lg  mt-2'>
                    <div className='lg:flex'>
                      <li className='w-full  border-gray-200 sm:border-b-0'>
                        <div className='inline-flex items-center pl-3'>
                          <label
                            htmlFor='horizontal-list-radio-license'
                            className='w-full py-3 ml-2 text-CITLGray-main '
                          >
                            <span className='text-CITLOrange border-2 mr-2 border-CITLOrange px-4 py-2.5'>
                              1{""}
                            </span>{" "}
                            Not Adequate
                          </label>
                        </div>
                      </li>
                      <li className='w-full  border-gray-200 sm:border-b-0'>
                        <div className='flex items-center pl-3'>
                          <label
                            htmlFor='horizontal-list-radio-id'
                            className='w-full py-3 ml-2 text-CITLGray-main'
                          >
                            <span className='text-CITLOrange border-2 mr-2 border-CITLOrange px-4 py-2.5'>
                              2
                            </span>{" "}
                            Slightly Adequate
                          </label>
                        </div>
                      </li>
                      <li className='w-full  border-gray-200 sm:border-b-0'>
                        <div className='flex items-center pl-3'>
                          <label
                            htmlFor='horizontal-list-radio-millitary'
                            className='w-full py-3 ml-2 text-CITLGray-main'
                          >
                            <span className='text-CITLOrange border-2 mr-2 border-CITLOrange px-4 py-2.5'>
                              3
                            </span>{" "}
                            Adequate
                          </label>
                        </div>
                      </li>
                      <li className='w-full sm:border-b-0 '>
                        <div className='flex items-center pl-3'>
                          <label
                            htmlFor='horizontal-list-radio-passport'
                            className='w-full py-3 ml-2  text-CITLGray-main'
                          >
                            <span className='text-CITLOrange border-2 mr-2 border-CITLOrange px-4 py-2.5'>
                              4
                            </span>{" "}
                            Very Adequate
                          </label>
                        </div>
                      </li>
                      <li className='w-full sm:border-b-0 '>
                        <div className='flex items-center pl-3'>
                          <label
                            htmlFor='horizontal-list-radio-passport'
                            className='w-full py-3 ml-2  text-CITLGray-main'
                          >
                            <span className='text-CITLOrange border-2 mr-2 border-CITLOrange px-4 py-2.5'>
                              5
                            </span>{" "}
                            Highly Adequate
                          </label>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    1. The module contains the expected outcomes for the entire
                    course.
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
                    2. The module’s topics/concepts are informative.
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
                    3. The presented topics/concepts are sufficient.
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
                    4. The module contains illustrations that enhance my
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
                    5. The presentation of the module’s parts or sections are
                    easy to follow.{" "}
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

              <div className='flex mt-4'>
                <div className='flex-auto flex flex-row-reverse'>
                  <Link
                    href='/test/teacher-user-evaluation/index2'
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
