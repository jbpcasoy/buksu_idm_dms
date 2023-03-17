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
                <div className='w-full border-t-4 transition duration-500 ease-in-out border-CITLOrange'>
                  <div className=' top-0 mt-2 text-xs font-medium uppercase text-CITLOrange'>
                    step 5 of 5
                  </div>
                </div>
              </div>
            </div>

            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl mb-8 '>
                D. Appropriateness
              </h2>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    18. Contains materials appropriate to the course.
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
                    19. Allows the students to perform tasks independently .
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
                    20. Caters to varied levels of the students&apos; mental
                    ability.
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

              <div>
                <div className='border border-CITLGray-main rounded-lg px-3 py-8'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    B. Directions:
                  </h3>
                  <p className='text-sm font-normal text-CITLGray-main'>
                    Please provide comments and suggestions for each area below:
                  </p>

                  <label
                    htmlFor='message'
                    className='block mb-2 mt-3 text-md font-semibold text-CITLGray-main'
                  >
                    1. Strengths:
                  </label>
                  <div>
                    <div className='indent-8 grid-cols-4 '>
                      <label className=' text-CITLGray-main'>a. </label>
                      <input
                        type='text'
                        placeholder='-'
                        className='w-96 p-2 ml-2 text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                      />
                    </div>
                    <div className='indent-8 grid-cols-4'>
                      <label className=' text-CITLGray-main'>b. </label>
                      <input
                        type='text'
                        placeholder='-'
                        className='w-96 p-2 ml-2 text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                      />
                    </div>
                  </div>

                  <label
                    htmlFor='message'
                    className='block mb-2 mt-3  text-md font-semibold text-CITLGray-main'
                  >
                    2. Weaknesses:
                  </label>
                  <div>
                    <div className='indent-8 grid-cols-4 '>
                      <label className=' text-CITLGray-main'>a. </label>
                      <input
                        type='text'
                        placeholder='-'
                        className='w-96 p-2 ml-2 text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                      />
                    </div>
                    <div className='indent-8 grid-cols-4'>
                      <label className=' text-CITLGray-main'>b. </label>
                      <input
                        type='text'
                        placeholder='-'
                        className='w-96 p-2 ml-2 text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-5'>
                <div className='grid grid-cols-2 gap-6 mt-6'>
                  <div>
                    <label
                      className='block mb-1 text-sm font-semibold text-CITLDarkBlue '
                      htmlhtmlFor='title'
                    >
                      Name of Evaluator
                    </label>
                    <input
                      className='border  border-gray-400 bg-CITLGray-light focus:ring-CITLOrange focus:border-CITLOrange p-2 w-full rounded-md'
                      type='text'
                      id='title'
                      placeholder='John Doe'
                    />
                  </div>
                  {/* IMPLEMENT Date Picker here */}
                  <div>
                    <label
                      className='block mb-1 text-sm font-semibold text-CITLDarkBlue '
                      htmlhtmlFor='title'
                    >
                      Date
                    </label>
                    <input
                      className='border  border-gray-400 bg-CITLGray-light focus:ring-CITLOrange focus:border-CITLOrange p-2 w-full rounded-md'
                      type='text'
                      id='title'
                    />
                  </div>

                  {/* ADD Evaluators Signature here. Already installed the signature pad. */}
                </div>
              </div>
              <div className='flex mt-4'>
                <Link
                  href='/teacher-user-evaluation/index4'
                  className='text-base  flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:border-CITLOrange hover:text-CITLOrange bg-gray-100 text-CITLGray-main border border-CITLGray-main'
                >
                  Previous
                </Link>
                <div className='flex-auto flex flex-row-reverse'>
                  <Link
                    href='/teacher-user-evaluation/index5'
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
