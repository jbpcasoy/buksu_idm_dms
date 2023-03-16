import usePeerSuggestion from "@/hooks/usePeerSuggestion";
import usePeerSuggestionItems from "@/hooks/usePeerSuggestionItems";
import useSubmittedPeerReview from "@/hooks/useSubmittedPeerReview";
import PeerSuggestionItemView from "./PeerSuggestionItemView";

export default function PeerSuggestionView({ peerReview }) {
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

  return (
    <div>
      <p>Peer Suggestions</p>
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
            <PeerSuggestionItemView
              key={peerSuggestionItem.id}
              peerSuggestionItem={peerSuggestionItem}
              viewOnly
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
