import usePeerSuggestion from "@/hooks/usePeerSuggestion";
import usePeerSuggestionItems from "@/hooks/usePeerSuggestionItems";
import useSubmittedPeerReview from "@/hooks/useSubmittedPeerReview";
import frontendCreatePeerSuggestionItem from "@/services/frontend/peer_suggesion_item/frontendCreatePeerSuggestionItem";
import SuggestionItem from "@/views/suggestions/SuggestionItem";
import { useEffect } from "react";
import SuggestionModal from "./SuggestionModal";

export default function Suggestion({ peerReview }) {
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
            <SuggestionModal onSubmit={handleSubmit} />
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
            </tr>
          </thead>

          <tbody className='bg-white divide-gray-200 overflow-y-auto'>
            {peerSuggestionItems.map((peerSuggestionItem) => (
              <SuggestionItem
                actionTaken={peerSuggestionItem.actionTaken}
                pageNumber={peerSuggestionItem.pageNumber}
                remarks={peerSuggestionItem.remarks}
                value={peerSuggestionItem.value}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
