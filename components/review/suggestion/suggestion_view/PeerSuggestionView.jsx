import usePeerSuggestion from "@/hooks/usePeerSuggestion";
import usePeerSuggestionItems from "@/hooks/usePeerSuggestionItems";
import useSubmittedPeerReview from "@/hooks/useSubmittedPeerReview";
import Empty from "@/views/Empty";
import PeerSuggestionItemView from "./PeerSuggestionItemView";
import SuggestionView from "./SuggestionView";
import ActionDoneMatrixPrintDialog from "@/components/pdf/print/ActionDoneMatrixPrintDialog";

export default function PeerSuggestionView({ peerReview, viewOnly = false }) {
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
    <SuggestionView
      title={"Peer Suggestions"}
      viewOnly={viewOnly}
      reviewerName={
        peerSuggestion?.SubmittedPeerReview?.PeerReview?.Faculty?.user?.name
      }
      reviewerImage={
        peerSuggestion?.SubmittedPeerReview?.PeerReview?.Faculty?.user?.image
      }
      reviewDate={peerSuggestion?.SubmittedPeerSuggestion?.createdAt}
      reviewerId={
        peerSuggestion?.SubmittedPeerReview?.PeerReview?.Faculty?.user?.id
      }
    >
      {peerSuggestionItemsLoading && (
        <tr>
          <td className='px-6 py-4  '>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </td>
          <td className='px-6 py-4  '>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </td>
          <td className='px-6 py-4  '>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-5 mb-2.5'></div>
          </td>
          <td className='px-6 py-4  '>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
            <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </td>
          {!viewOnly && (
            <td className='px-6 py-4  '>
              <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-16 mb-2.5'></div>
            </td>
          )}
        </tr>
      )}

      {!peerSuggestionItemsLoading && peerSuggestionItems.length < 1 && (
        <tr>
          <td colSpan={5}>
            <Empty />
          </td>
        </tr>
      )}
      {!peerSuggestionItemsLoading &&
        peerSuggestionItems.map((peerSuggestionItem) => (
          <PeerSuggestionItemView
            key={peerSuggestionItem.id}
            peerSuggestionItem={peerSuggestionItem}
            viewOnly={viewOnly}
          />
        ))}
    </SuggestionView>
  );
}
