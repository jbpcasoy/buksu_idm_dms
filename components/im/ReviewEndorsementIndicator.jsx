import React from "react";

export default function ReviewEndorsementIndicator({ im, direction = "row" }) {
  const peerReviewed = Boolean(im?.SubmittedPeerReview);
  const chairpersonReviewed = Boolean(im?.SubmittedChairpersonReview);
  const coordinatorReviewed = Boolean(im?.SubmittedCoordinatorReview);
  const peerSuggested = Boolean(im?.SubmittedPeerSuggestion);
  const chairpersonSuggested = Boolean(im?.SubmittedChairpersonSuggestion);
  const coordinatorSuggested = Boolean(im?.SubmittedCoordinatorSuggestion);
  const coordinatorEndorsed = Boolean(im?.CoordinatorEndorsement);
  const deanEndorsed = Boolean(im?.CoordinatorEndorsement.DeanEndorsement);
  const imdCoordinatorSuggested = Boolean(
    im?.IMDCoordinatorEndorsement?.SubmittedIMDCoordinatorEndorsement
  );
  const imdCoordinatorEndorsed = Boolean(im?.IMDCoordinatorEndorsement);

  return (
    <div
      className={`grid grid-flow-${direction} space-${
        direction === "col" ? "x" : "y"
      }-1 w-36 p-1`}
    >
      {(im.status === "DRAFT" || im.status === "SUBMITTED") && (
        <>
          {peerReviewed && (
            <span
              className='inline-flex items-center bg-purple-400 text-purple-800 text-xs px-3 py-1 rounded-full'
              title={
                peerSuggested
                  ? "Reviewed with Suggestions"
                  : "Reviewed, No Suggestions"
              }
            >
              Peer
              {peerSuggested && (
                <svg
                  aria-hidden='true'
                  className='w-3 h-3  text-purple-800 rounded-full ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
              {!peerSuggested && (
                <svg
                  fill='none'
                  className='w-3 h-3  text-purple-800 rounded-full ml-1'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
              )}
            </span>
          )}
          {!peerReviewed && (
            <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
              Peer
            </span>
          )}

          {chairpersonReviewed && (
            <span
              className='inline-flex items-center bg-orange-300 text-orange-500 text-xs px-3  py-1 rounded-2xl'
              title={
                chairpersonSuggested
                  ? "Reviewed with Suggestions"
                  : "Reviewed, No Suggestions"
              }
            >
              Chairperson
              {chairpersonSuggested && (
                <svg
                  aria-hidden='true'
                  className='w-3 h-3  text-orange-500 rounded-full ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
              {!chairpersonSuggested && (
                <svg
                  fill='none'
                  className='w-3 h-3  text-orange-500 rounded-full ml-1'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
              )}
            </span>
          )}

          {!chairpersonReviewed && (
            <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
              Chairperson
            </span>
          )}
          {coordinatorReviewed && (
            <span
              className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
              title={
                coordinatorSuggested
                  ? "Reviewed with Suggestions"
                  : "Reviewed, No Suggestions"
              }
            >
              Coordinator{" "}
              {coordinatorSuggested && (
                <svg
                  aria-hidden='true'
                  className='w-3 h-3  text-green-900 rounded-full ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
              {!coordinatorSuggested && (
                <svg
                  fill='none'
                  className='w-3 h-3  text-green-900 rounded-full ml-1'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
              )}
            </span>
          )}
          {!coordinatorReviewed && (
            <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
              Coordinator
            </span>
          )}
        </>
      )}
      {(im.status === "DEPARTMENT_REVIEWED" ||
        im.status === "DEPARTMENT_REVISED") && (
        <>
          {coordinatorEndorsed && (
            <span
              className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
              title='Endorsement Ready'
            >
              Coordinator{" "}
              {coordinatorEndorsed && (
                <svg
                  aria-hidden='true'
                  className='w-3 h-3  text-green-900 rounded-full ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
            </span>
          )}
          {!coordinatorEndorsed && (
            <span
              className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'
              title='Pending Endorsement'
            >
              Coordinator
            </span>
          )}
          {deanEndorsed && (
            <span
              className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
              title='Endorsement Ready'
            >
              Dean{" "}
              {deanEndorsed && (
                <svg
                  aria-hidden='true'
                  className='w-3 h-3  text-green-900 rounded-full ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
            </span>
          )}
          {!deanEndorsed && (
            <span
              className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'
              title='Pending Endorsement'
            >
              Dean
            </span>
          )}
        </>
      )}
      {im.status === "DEPARTMENT_ENDORSED" && (
        <>
          {imdCoordinatorSuggested && (
            <span
              className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
              title='Suggestions Ready'
            >
              IMD Coordinator{" "}
              {imdCoordinatorSuggested && (
                <svg
                  aria-hidden='true'
                  className='w-3 h-3  text-green-900 rounded-full ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
            </span>
          )}
          {!imdCoordinatorSuggested && (
            <span
              className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'
              title='Pending Suggestions'
            >
              IMD Coordinator
            </span>
          )}
        </>
      )}
      {(im.status === "CITL_REVIEWED" ||
        im.status === "CITL_REVISED" ||
        im.status === "CITL_ENDORSED") && (
        <>
          {imdCoordinatorEndorsed && (
            <span
              className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
              title='Endorsement Ready'
            >
              IMD Coordinator{" "}
              {imdCoordinatorEndorsed && (
                <svg
                  aria-hidden='true'
                  className='w-3 h-3  text-green-900 rounded-full ml-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              )}
            </span>
          )}
          {!imdCoordinatorEndorsed && (
            <span
              className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'
              title='Pending Endorsement'
            >
              IMD Coordinator
            </span>
          )}
        </>
      )}
    </div>
  );
}
