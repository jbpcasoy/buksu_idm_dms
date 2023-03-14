import { sections } from "@/constants/questions";
import { useState } from "react";
import CoordinatorPreviewQuestion from "./CoordinatorPreviewQuestion";
import PreviewSection from "./PreviewSection";

export default function ConfirmCoordinatorReview({
  coordinatorReviewId,
  onPrevious,
  onSubmit,
}) {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {sections.map((section) => (
        <PreviewSection key={section.title} section={section}>
          {section.questions.map((question) => {
            if (question.active)
              return (
                <CoordinatorPreviewQuestion
                  key={question.id}
                  question={question}
                  coordinatorReviewId={coordinatorReviewId}
                />
              );
          })}
        </PreviewSection>
      ))}

      <div className='flex mt-4'>
        <div className='flex-auto flex flex-row-reverse justify-between'>
          <button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              onSubmit().finally(() => {
                setLoading(false);
              });
            }}
            className='text-base  ml-2  focus:outline-none flex justify-center px-7 py-3 rounded font-semibold cursor-pointer  hover:bg-transparent border hover:text-CITLOrange hover:border-CITLOrange bg-CITLDarkBlue text-CITLWhite  '
          >
            Submit
          </button>

          <button
            onClick={onPrevious}
            disabled={loading}
            class='group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-CITLDarkBlue focus:outline-none focus:ring active:text-CITLDarkBlue'
          >
            <span class='absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4'>
              <svg
                class='h-5 w-5 rotate-180'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </span>

            <span class='text-sm font-medium transition-all group-hover:ml-4'>
              Previous
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
