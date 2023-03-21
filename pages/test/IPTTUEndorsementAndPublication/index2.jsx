import Layout from "@/components/layout/Layout";

export default function Endorsement() {
  return (
    <Layout>
      <div className='flex items-center border border-CITLGray-lighter  bg-CITLWhite m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
        <div className='px-6 py-5 md:w-full '>
          <h2 className='text-gray-800 mb-8 font-bold text-xl '>
            Program Recommendation
          </h2>
          {/* <p className='mb-8 text-sm'>for IPTTU Endorsement and Publication</p> */}
          <form>
            <div className='grid gap-6 mb-6 md:grid-cols-2'>
              <div>
                <div className='flex items-center mb-4'>
                  <div className='flex-row'>
                    <label
                      htmlFor='semesters'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      1. Will the department/program require this IM in the
                      course/s indicated?
                    </label>
                    <input
                      id='default-radio-1'
                      type='radio'
                      value=''
                      name='default-radio'
                      className='w-4 h-4  text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                    />
                    <label
                      htmlFor='default-radio-1'
                      className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Yes
                    </label>
                  </div>
                </div>
                <div className='flex items-center mb-4'>
                  <input
                    checked
                    id='default-radio-2'
                    type='radio'
                    value=''
                    name='default-radio'
                    className='w-4 h-4 text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                  />
                  <label
                    htmlFor='default-radio-2'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    No
                  </label>
                </div>
              </div>
              <div>
                <div className='flex items-center mb-4'>
                  <div className='flex-row'>
                    <label
                      htmlFor='semesters'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      2. Will the department/program commit to using it for the
                      length of time indicated by the authors?
                    </label>
                    <input
                      id='default-radio-1'
                      type='radio'
                      value=''
                      name='default-radio'
                      className='w-4 h-4  text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                    />
                    <label
                      htmlFor='default-radio-1'
                      className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Yes
                    </label>
                  </div>
                </div>
                <div className='flex items-center mb-4'>
                  <input
                    checked
                    id='default-radio-2'
                    type='radio'
                    value=''
                    name='default-radio'
                    className='w-4 h-4 text-CITLDarkBlue bg-CITLWhite border-CITLDarkBlue focus:ring-CITLDarkBlue '
                  />
                  <label
                    htmlFor='default-radio-2'
                    className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className=' flex justify-end'>
              <button
                type='submit'
                className='text-white bg-CITLDarkBlue hover:bg-CITLOrange  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
