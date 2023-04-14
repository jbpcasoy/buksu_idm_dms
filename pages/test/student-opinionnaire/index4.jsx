import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function StudentOpinionnaire() {
  return (
    <Layout>
      <div className='sm:pt-12'>
        <div className='flex items-center border border-CITLGray-lighter bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='w-full '>
            <div className='p-4 '>
              <div className='flex mt-10'>
                <div className='w-full border-t-4 transition duration-500 ease-in-out border-CITLOrange'>
                  <div className='top-0 mt-2 text-xs font-medium uppercase text-CITLOrange'>
                    step 4 of 4
                  </div>
                </div>
                {/* <div className='w-3/12 border-t-4 ml-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div> */}
              </div>
            </div>

            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl '>
                Student Opinionnaire
              </h2>
              <p className='mb-8 text-sm'>Evaluation of a Module</p>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    16. The module allows for flexible learning.
                  </h3>

                  <ul className='items-center w-full text-sm font-medium   rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2'>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-license'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-license'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
                        >
                          Yes{" "}
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-id'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-id'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Somewhat
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-millitary'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-millitary'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          No
                        </label>
                      </div>
                    </li>
                    <li className='w-full sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-passport'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue '
                        />
                        <label
                          htmlFor='horizontal-list-radio-passport'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Not Applicable
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    17. The module allows me to synthesize or summarize my
                    learnings in every lesson/unit.
                  </h3>

                  <ul className='items-center w-full text-sm font-medium   rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2'>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-license'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-license'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
                        >
                          Yes{" "}
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-id'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-id'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Somewhat
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-millitary'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-millitary'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          No
                        </label>
                      </div>
                    </li>
                    <li className='w-full sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-passport'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue '
                        />
                        <label
                          htmlFor='horizontal-list-radio-passport'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Not Applicable
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='py-5'>
                <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    18. The module allows me to do independent learning.
                  </h3>

                  <ul className='items-center w-full text-sm font-medium   rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2'>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-license'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-license'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
                        >
                          Yes{" "}
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-id'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-id'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Somewhat
                        </label>
                      </div>
                    </li>
                    <li className='w-full  border-gray-200 sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-millitary'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                        />
                        <label
                          htmlFor='horizontal-list-radio-millitary'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          No
                        </label>
                      </div>
                    </li>
                    <li className='w-full sm:border-b-0 dark:border-gray-600'>
                      <div className='flex items-center pl-3'>
                        <input
                          id='horizontal-list-radio-passport'
                          type='radio'
                          value=''
                          name='list-radio'
                          className='w-4 h-4 text-CITLDarkBlue bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue '
                        />
                        <label
                          htmlFor='horizontal-list-radio-passport'
                          className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                        >
                          Not Applicable
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className='border border-CITLOrange rounded-lg px-3 py-8'>
                  <h3 className=' font-semibold text-lg text-CITLGray-main'>
                    B. Directions:
                  </h3>
                  <p className='text-sm font-normal text-CITLGray-main'>
                    Please provide any comment or suggestion regarding the
                    module by completing the statements below:
                  </p>
                </div>
                <div className='py-5'>
                  <div className='border border-CITLGray-main rounded-lg px-3 py-5'>
                    <label
                      htmlFor='message'
                      className='block mb-2 mt-3 text-sm font-medium text-CITLGray-main'
                    >
                      1. What I like in the module is/are:
                    </label>
                    <div className='lg:indent-0 md:indent-0  w-full p-2 ml-2 '>
                      <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                        <label className=' text-CITLGray-main'>a. </label>
                        <input
                          type='text'
                          placeholder='-'
                          className='w-full text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                        />
                      </div>
                      <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                        <label className=' text-CITLGray-main'>b. </label>
                        <input
                          type='text'
                          placeholder='-'
                          className='w-full  text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                        />
                      </div>
                      <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                        <label className=' text-CITLGray-main'>c. </label>
                        <input
                          type='text'
                          placeholder='-'
                          className='w-full text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                        />
                      </div>
                    </div>
                    <label
                      htmlFor='message'
                      className='block mb-2 mt-3 text-sm font-medium text-CITLGray-main'
                    >
                      <label
                        htmlFor='message'
                        className=' mb-2 mt-3 text-sm font-medium text-CITLGray-main'
                      >
                        2. What I think can still be improved in the module
                        is/are:
                      </label>
                      <div className='lg:indent-0 md:indent-0  w-full p-2 ml-2 '>
                        <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                          <label className=' text-CITLGray-main '>a. </label>
                          <input
                            type='text'
                            placeholder='-'
                            className='w-full text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                          />
                        </div>
                        <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                          <label className=' text-CITLGray-main'>b. </label>
                          <input
                            type='text'
                            placeholder='-'
                            className='w-full  text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                          />
                        </div>
                        <div className='lg:indent-5 md:indent-0 inline-flex items-center w-full'>
                          <label className=' text-CITLGray-main'>c. </label>
                          <input
                            type='text'
                            placeholder='-'
                            className='w-full text-sm border-0 border-b-2 bg-CITLGray-light  outline-none opacity-50 focus:ring-0'
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className=' lg:grid-cols-2 gap-6  md:grid-rows-2 mb-3'>
                  <div className='mb-3'>
                    <label
                      className='block mb-1 text-sm font-semibold text-CITLDarkBlue '
                      htmlFor=''
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
                      htmlFor='title'
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

              <div className='flex '>
                <Link
                  href='/test/student-opinionnaire/index3'
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
                    href='/test/student-opinionnaire'
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
