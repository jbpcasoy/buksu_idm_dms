import SuggestionAddModal from "./SuggestionAddModal";
import ChairpersonSuggestionView from "./suggestion_view/ChairpersonSuggestionView";
import CoordinatorSuggestionView from "./suggestion_view/CoordinatorSuggestionView";
import PeerSuggestionView from "./suggestion_view/PeerSuggestionView";

export default function Suggestion({
  onFinish,
  onPrevious,
  children,
  handleSubmit,
  iM,
  showPeerSuggestion = false,
  showChairpersonSuggestion = false,
  showCoordinatorSuggestion = false,
  title,
}) {
  return (
    <div>
      <div className=' grid grid-flow-row items-center mt-5 relative overflow-x-auto'>
        <div className=' md:w-full '>
          <h2 className='text-gray-800 font-bold text-xl mb-8 '>
            Suggestions and Actions Taken
          </h2>
          {/* <p className='mb-8 text-sm'>for IPTTU Endorsement</p> */}
        </div>

        {iM?.SubmittedPeerReview?.PeerReview && showPeerSuggestion && (
          <PeerSuggestionView
            viewOnly={true}
            peerReview={iM?.SubmittedPeerReview?.PeerReview}
          />
        )}
        {iM?.SubmittedChairpersonReview?.ChairpersonReview &&
          showChairpersonSuggestion && (
            <ChairpersonSuggestionView
              viewOnly={true}
              chairpersonReview={
                iM?.SubmittedChairpersonReview?.ChairpersonReview
              }
            />
          )}
        {iM?.SubmittedCoordinatorReview?.CoordinatorReview &&
          showCoordinatorSuggestion && (
            <CoordinatorSuggestionView
              viewOnly={true}
              coordinatorReview={
                iM?.SubmittedCoordinatorReview?.CoordinatorReview
              }
            />
          )}
        <div className='border border-CITLGray-lighter rounded-lg mb-5 overflow-hidden'>
          <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3'>
            <div className='flex justify-between text-center '>
              <h2 className='text-center pt-2 font-semibold'>{title}</h2>
              <SuggestionAddModal onSubmit={handleSubmit} />
            </div>
          </div>

          <table className='w-full divide-y divide-CITLGray-light'>
            <thead className='bg-CITLGray-light'>
              <tr>
                <th
                  scope='col'
                  className=' px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  suggestion
                </th>

                {/* <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Action Taken
                </th> */}

                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Page No.
                </th>
                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Remarks
                </th>
                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className='bg-white divide-gray-200 overflow-y-auto'>
              {children}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex mt-4'>
        <div className='flex-auto flex flex-row-reverse justify-between'>
          <button
            onClick={onFinish}
            className='group relative inline-flex items-center overflow-hidden rounded-md bg-CITLOrange px-8 py-3 text-CITLDarkBlue focus:outline-none '
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
              Submit
            </span>
          </button>
          <button
            onClick={onPrevious}
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
          </button>
        </div>
      </div>
    </div>
  );
}
