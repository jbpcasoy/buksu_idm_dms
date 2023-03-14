import { sections } from "@/constants/questions";
import PeerPreviewQuestion from "./PeerPreviewQuestion";
import PreviewSection from "./PreviewSection";

export default function ConfirmPeerReview({
  peerReviewId,
  onPrevious,
  onSubmit,
}) {
  return (
    <div>
      {sections.map((section) => (
        <PreviewSection key={section.title} section={section}>
          {section.questions.map((question) => {
            if (question.active)
              return (
                <PeerPreviewQuestion
                  key={question.id}
                  question={question}
                  peerReviewId={peerReviewId}
                />
              );
          })}
        </PreviewSection>
      ))}

      <div className='flex mt-4'>
        <div className='flex-auto flex flex-row-reverse justify-between'>
          <button
            onClick={onSubmit}
            className='text-base  ml-2  focus:outline-none flex justify-center px-4 py-2 rounded font-medium cursor-pointer shadow-xl hover:bg-CITLOrange disabled:bg-CITLGray-lighter disabled:border disabled:border-CITLGray-main disabled:text-CITLGray-main bg-CITLDarkBlue text-CITLWhite  '
          >
            Submit
          </button>
          <button
            onClick={onPrevious}
            className='text-base  flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl enabled:hover:border-CITLOrange  bg-gray-100 disabled:bg-CITLGray-lighter  text-CITLGray-main  border  border-CITLGray-main'
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}
