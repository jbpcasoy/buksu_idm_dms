import usePeerSuggestion from "@/hooks/usePeerSuggestion";
import usePeerSuggestionItems from "@/hooks/usePeerSuggestionItems";
import useSubmittedPeerReview from "@/hooks/useSubmittedPeerReview";
import frontendCreatePeerSuggestionItem from "@/services/frontend/peer_suggestion_item/frontendCreatePeerSuggestionItem";
import { useEffect } from "react";
import PeerSuggestionItem from "./PeerSuggestionItem";
import SuggestionAddModal from "./SuggestionAddModal";

export default function Suggestion({ peerReview, onFinish, onPrevious }) {
  const {
    submittedPeerReview,
    submittedPeerReviewError,
    submittedPeerReviewLoading,
  } = useSubmittedPeerReview({ peerReviewId: peerReview.id });
  const { peerSuggestion, peerSuggestionError, peerSuggestionLoading } =
    usePeerSuggestion({ submittedPeerReviewId: submittedPeerReview?.id });
  const {
    peerSuggestionItems,
    peerSuggestionItemsError,
    peerSuggestionItemsLoading,
    refreshPeerSuggestionItems,
  } = usePeerSuggestionItems({ peerSuggestionId: peerSuggestion?.id });

  async function handleSubmit(values) {
    return frontendCreatePeerSuggestionItem({
      peerSuggestionId: peerSuggestion.id,
      value: values.value,
      pageNumber: values.pageNumber,
      remarks: values.remarks,
    }).then(() => {
      refreshPeerSuggestionItems();
    });
  }

  useEffect(() => {
    console.log({ submittedPeerReview });
  }, [submittedPeerReview]);

  useEffect(() => {
    console.log({ peerSuggestion });
  }, [peerSuggestion]);

  useEffect(() => {
    console.log({ peerSuggestionItems });
  }, [peerSuggestionItems]);

  return (
    <div>
      <div className=' grid grid-flow-row items-center mt-5 relative overflow-x-auto'>
        <div className=' md:w-full '>
          <h2 className='text-gray-800 font-bold text-xl mb-8 '>
            Suggestions and Actions Taken
          </h2>
          {/* <p className='mb-8 text-sm'>for IPTTU Endorsement</p> */}
        </div>
        <div className='border border-CITLGray-lighter rounded-lg mb-5'>
          <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3'>
            <div className='flex justify-between text-center '>
              <h2 className='text-center pt-2 font-semibold'>
                Part A. Program Review
              </h2>
              <SuggestionAddModal onSubmit={handleSubmit} />
            </div>
          </div>

          <table className='w-full divide-y divide-CITLGray-light mb-2'>
            <thead className='bg-CITLGray-light'>
              <tr>
                <th
                  scope='col'
                  className=' px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  suggestion
                </th>

                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Action Taken
                </th>

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
              {peerSuggestionItems.map((peerSuggestionItem) => (
                <PeerSuggestionItem peerSuggestionItem={peerSuggestionItem} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex mt-4'>
        <div className='flex-auto flex flex-row-reverse justify-between'>
          <button
            onClick={onFinish}
            className='text-base  ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:bg-CITLOrange bg-CITLDarkBlue text-CITLWhite  '
          >
            Finish
          </button>
          <button
            onClick={onPrevious}
            className='text-base  flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:border-CITLOrange hover:text-CITLOrange bg-gray-100  text-CITLGray-main  border  border-CITLGray-main'
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}
