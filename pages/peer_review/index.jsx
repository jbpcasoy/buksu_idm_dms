import Layout from "@/components/layout/Layout";
import PreviewQuestion from "@/components/review/preview/PreviewQuestion";
import PreviewSection from "@/components/review/preview/PreviewSection";
import { sections } from "@/constants/questions";

export default function PeerReview() {
  return (
    <Layout>
      <div className='sm:pt-12'>
        <div className='flex items-center border border-CITLGray-lighter bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='w-full '>
            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl '>
                Instructional Material Review Form{" "}
                <span className='text-white bg-CITLOrange px-3 py-1 rounded-lg'>
                  Preview
                </span>
              </h2>
              <p className='mb-8 text-sm'>Implementation Phase</p>
            </div>

            {sections.map((section) => (
              <PreviewSection key={section.title} section={section}>
                {section.questions.map((question) => (
                  <PreviewQuestion key={question.id} question={question} />
                ))}
              </PreviewSection>
            ))}

            <div className='flex mt-4'>
              <div className='flex-auto flex flex-row-reverse justify-between'>
                <button className='text-base  ml-2  focus:outline-none flex justify-center px-4 py-2 rounded font-medium cursor-pointer shadow-xl hover:bg-CITLOrange disabled:bg-CITLGray-lighter disabled:border disabled:border-CITLGray-main disabled:text-CITLGray-main bg-CITLDarkBlue text-CITLWhite  '>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
