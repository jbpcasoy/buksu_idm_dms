import useCoordinatorSuggestion from "@/hooks/useCoordinatorSuggestion";
import useCoordinatorSuggestionItems from "@/hooks/useCoordinatorSuggestionItems";
import useSubmittedCoordinatorReview from "@/hooks/useSubmittedCoordinatorReview";
import Empty from "@/views/Empty";
import CoordinatorSuggestionItemView from "./CoordinatorSuggestionItemView";
import SuggestionView from "./SuggestionView";

export default function CoordinatorSuggestionView({
  coordinatorReview,
  viewOnly = false,
}) {
  const {
    submittedCoordinatorReview,
    submittedCoordinatorReviewError,
    submittedCoordinatorReviewLoading,
  } = useSubmittedCoordinatorReview({
    coordinatorReviewId: coordinatorReview.id,
  });
  const {
    coordinatorSuggestion,
    coordinatorSuggestionError,
    coordinatorSuggestionLoading,
  } = useCoordinatorSuggestion({
    submittedCoordinatorReviewId: submittedCoordinatorReview?.id,
  });
  const {
    coordinatorSuggestionItems,
    coordinatorSuggestionItemsError,
    coordinatorSuggestionItemsLoading,
    refreshCoordinatorSuggestionItems,
  } = useCoordinatorSuggestionItems({
    coordinatorSuggestionId: coordinatorSuggestion?.id,
  });

  return (
    <SuggestionView
      title={"Coordinator Suggestions"}
      viewOnly={viewOnly}
      reviewerName={
        coordinatorSuggestion?.SubmittedCoordinatorReview?.CoordinatorReview
          ?.Coordinator?.Faculty?.user?.name
      }
      reviewDate={
        coordinatorSuggestion?.SubmittedCoordinatorSuggestion?.createdAt
      }
      reviewerImage={
        coordinatorSuggestion?.SubmittedCoordinatorReview?.CoordinatorReview
          ?.Coordinator?.Faculty?.user?.image
      }
      reviewerId={
        coordinatorSuggestion?.SubmittedCoordinatorReview?.CoordinatorReview
          ?.Coordinator?.Faculty?.user?.id
      }
    >
      {coordinatorSuggestionItemsLoading && (
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

      {!coordinatorSuggestionItemsLoading &&
        coordinatorSuggestionItems.length < 1 && (
          <tr>
            <td colSpan={5}>
              <Empty />
            </td>
          </tr>
        )}
      {!coordinatorSuggestionItemsLoading &&
        coordinatorSuggestionItems.map((coordinatorSuggestionItem) => (
          <CoordinatorSuggestionItemView
            viewOnly={viewOnly}
            key={coordinatorSuggestionItem.id}
            coordinatorSuggestionItem={coordinatorSuggestionItem}
          />
        ))}
    </SuggestionView>
  );
}
