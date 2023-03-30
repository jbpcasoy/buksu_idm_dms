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
                    step 2 of 5
                  </div>
                </div>
                <div className='w-3/12 border-t-4 ml-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
              </div>
            </div>

            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl mb-8 '>
                A. Content and Content Accuracy
              </h2>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    1. Begins with the course and specific learning outcomes.
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
                        htmlFor='1'
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
                        htmlFor='2'
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
                        htmlFor='3'
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
                        htmlFor='4'
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
                        htmlFor='5'
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
                    2. Contains topics/concepts that are informative.
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
                        htmlFor='1'
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
                        htmlFor='2'
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
                        htmlFor='3'
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
                        htmlFor='4'
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
                        htmlFor='5'
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
                    3. Comprehensively presents topics/concepts.
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
                        htmlFor='1'
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
                        htmlFor='2'
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
                        htmlFor='3'
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
                        htmlFor='4'
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
                        htmlFor='5'
                        className='block cursor-pointer select-none border-4 border-CITLOrange font-bold text-lg  text-CITLOrange p-1 w-12 text-center peer-checked:bg-CITLOrange peer-checked:font-bold peer-checked:text-white'
                      >
                        5
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex mt-4'>
                <Link
                  href='/test/teacher-user-evaluation/index1'
                  className='text-base  flex justify-center px-4 py-2 rounded-md font-bold cursor-pointer shadow-xl hover:border-CITLOrange hover:text-CITLOrange bg-gray-100 text-CITLGray-main border border-CITLGray-main'
                >
                  Previous
                </Link>
                <div className='flex-auto flex flex-row-reverse'>
                  <Link
                    href='/test/teacher-user-evaluation/index3'
                    className='text-base  ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded-md font-bold cursor-pointer shadow-xl hover:bg-CITLOrange bg-CITLDarkBlue text-CITLWhite  '
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
