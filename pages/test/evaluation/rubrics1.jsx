import Layout from "@/components/layout/Layout";
import ImercQuestion from "@/views/forms/imerc/ImercQuestion";
import Link from "next/link";

export default function Title() {
  return (
    <Layout>
      <div className='pt-12'>
        <div className='flex items-center border border-CITLGray-lighter  bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='p-5 w-full'>
            <div className='mx-4 p-4'>
              <div className='flex items-center'>
                <div className='flex items-center text-CITLOrange relative'>
                  <div className='rounded-full transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLOrange bg-CITLOrange text-left'>
                    <div className='absolute top-0 mt-6 w-32 text-xs font-medium uppercase text-CITLOrange'>
                      basic info
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange'></div>
                <div className='flex items-center text-white relative'>
                  <div className='rounded-full transition duration-500 ease-in-out h-4 w-4 border-2 bg-CITLOrange border-CITLOrange'>
                    <div className='absolute top-0 text-left mt-6 w-32 text-xs font-medium uppercase text-CITLOrange'>
                      instructions
                    </div>
                  </div>
                </div>

                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange'></div>
                <div className='flex items-center text-CITLOrange relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 border-CITLOrange bg-CITLOrange'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLOrange'>
                      The title
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 bg-CITLOrange border-CITLOrange'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLOrange'>
                      The chapters
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 bg-CITLOrange border-CITLOrange'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLOrange'>
                      The learning outcomes
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 bg-CITLOrange border-CITLOrange'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLOrange'>
                      The Concepts
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 bg-CITLOrange border-CITLOrange'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLOrange'>
                      The Examples
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 bg-CITLOrange border-CITLOrange'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLOrange'>
                      The Activities
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange'></div>
                <div className='flex items-center text-CITLGray-lighter relative'>
                  <div className='rounded-full text-left transition duration-500 ease-in-out h-4 w-4 border-2 bg-CITLOrange border-CITLOrange'>
                    <div className='absolute top-0  mt-6 w-32 text-xs font-medium uppercase text-CITLOrange'>
                      The Rubrics
                    </div>
                  </div>
                </div>
                <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-CITLOrange'></div>
              </div>
            </div>

            <div className='px-6 pt-16 md:w-full '>
              <h2 className='text-CITLDarkBlue font-bold text-2xl '>
                Instructional Material Evaluation Form
              </h2>
              <p className='mb-8 text-sm'>IMERC</p>

              <ImercQuestion
                title='The Rubrics'
                question='The rubrics are appropriate for the assessment.'
              />

              <div className='flex p-2 mt-4'>
                <Link
                  href='/evaluation/exercise5'
                  className='text-base  flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:border-CITLOrange hover:text-CITLOrange bg-gray-100  text-CITLGray-main  border  border-CITLGray-main'
                >
                  Previous
                </Link>
                <div className='flex-auto flex flex-row-reverse'>
                  <Link
                    href='/evaluation/rubrics2'
                    className='text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded shadow-xl font-bold cursor-pointer hover:bg-CITLOrange   bg-CITLDarkBlue text-CITLWhite'
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
