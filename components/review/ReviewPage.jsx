import Layout from "@/components/layout/Layout";
import ProgressBar from "../ProgressBar";

export default function ReviewPage({ step, steps, reviewingAs }) {
  return (
    <Layout>
      <div className='sm:pt-'>
        <div className='flex items-center border border-CITLGray-lighter bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='w-full '>
            <ProgressBar max={steps.length} value={step} />

            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl '>
                Instructional Material Review Form{" "}
                <span className='text-white bg-CITLOrange px-3 py-1 rounded-lg'>
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
