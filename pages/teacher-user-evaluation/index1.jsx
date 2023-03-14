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

                  <ul className='items-center w-full text-sm font-medium   rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2'>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <label
                          for='horizontal-list-radio-license'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
                        >
                          <span className='text-CITLOrange border-2 border-CITLOrange px-3 py-2'>
                            1
                          </span>{" "}
                          Not Adequate
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <label
                          for='horizontal-list-radio-id'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          <span className='text-CITLOrange border-2 border-CITLOrange px-3 py-2'>
                            2
                          </span>{" "}
                          Slightly Adequate
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <label
                          for='horizontal-list-radio-millitary'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          <span className='text-CITLOrange border-2 border-CITLOrange px-3 py-2'>
                            3
                          </span>{" "}
                          Adequate
                        </label>
                      </div>
                    </li>
                    <li className='w-full sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <label
                          for='horizontal-list-radio-passport'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          <span className='text-CITLOrange border-2 border-CITLOrange px-3 py-2'>
                            4
                          </span>{" "}
                          Very Adequate
                        </label>
                      </div>
                    </li>
                    <li className='w-full sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <label
                          for='horizontal-list-radio-passport'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          <span className='text-CITLOrange border-2 border-CITLOrange px-3 py-2'>
                            5
                          </span>{" "}
                          Highly Adequate
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    1. The module contains the expected outcomes for the entire
                    course.
                  </h3>

                  <div
                    className='grid w-[18rem] grid-cols-5  rounded-xl py-3'
                    x-data='app'
                  >
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        for='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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

                  <div
                    className='grid w-[18rem] grid-cols-5  rounded-xl py-3'
                    x-data='app'
                  >
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        for='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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

                  <div
                    className='grid w-[18rem] grid-cols-5  rounded-xl py-3'
                    x-data='app'
                  >
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        for='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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

                  <div
                    className='grid w-[18rem] grid-cols-5  rounded-xl py-3'
                    x-data='app'
                  >
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        for='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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

                  <div
                    className='grid w-[18rem] grid-cols-5  rounded-xl py-3'
                    x-data='app'
                  >
                    <div>
                      <input
                        type='radio'
                        name='option'
                        id='1'
                        className='peer hidden border'
                      />
                      <label
                        for='1'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='2'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='3'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='4'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                        for='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
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
                    href='/teacher-user-evaluation/index2'
                    className='text-base  ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:bg-CITLOrange bg-CITLDarkBlue text-CITLWhite  '
                  >
                    Next
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
