import Layout from "@/components/layout/Layout";

export default function ReviewPage({ step, steps, reviewingAs }) {
  return (
    <Layout>
      <div className='sm:pt-12'>
        <div className='flex items-center border border-CITLGray-lighter bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='w-full '>
            {step < steps.length - 1 && (
              <div className='p-4 '>
                <div className='flex mt-10'>
                  <div className='w-9/12 border-t-4 transition duration-500 ease-in-out border-CITLOrange'>
                    <div className=' top-0 mt-2 text-xs font-medium uppercase text-CITLOrange'>
                      step {step + 1} of {steps.length}
                    </div>
                  </div>
                  <div className='w-3/12 border-t-4 ml-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
                </div>
              </div>
            )}
            {step === steps.length - 1 && (
              <div className='p-4 '>
                <div className='flex mt-10'>
                  <div className='w-full border-t-4 transition duration-500 ease-in-out border-CITLOrange'>
                    <div className=' top-0 mt-2 text-xs font-medium uppercase text-CITLOrange'>
                      step {step + 1} of {steps.length}
                    </div>
                  </div>
                  {/* <div className='w-3/12 border-t-4 ml-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div> */}
                </div>
              </div>
            )}

            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl '>
                Instructional Material Review Form{" "}
                <span className='text-white bg-CITLDarkBlue px-3 rounded-xl'>
                  {reviewingAs}
                </span>
              </h2>
              <p className='mb-8 text-sm'>Implementation Phase</p>

              {steps[step]}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
