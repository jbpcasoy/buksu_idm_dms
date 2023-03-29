import useChairpersonSuggestion from "@/hooks/useChairpersonSuggestion";
import useChairpersonSuggestionItems from "@/hooks/useChairpersonSuggestionItems";
import useSubmittedChairpersonReview from "@/hooks/useSubmittedChairpersonReview";
import Empty from "@/views/Empty";
import ChairpersonSuggestionItemView from "./ChairpersonSuggestionItemView";
import SuggestionView from "./SuggestionView";

export default function ChairpersonSuggestionView({
  chairpersonReview,
  viewOnly = false,
}) {
  const {
    submittedChairpersonReview,
    submittedChairpersonReviewError,
    submittedChairpersonReviewLoading,
  } = useSubmittedChairpersonReview({
    chairpersonReviewId: chairpersonReview.id,
  });
  const {
    chairpersonSuggestion,
    chairpersonSuggestionError,
    chairpersonSuggestionLoading,
  } = useChairpersonSuggestion({
    submittedChairpersonReviewId: submittedChairpersonReview?.id,
  });
  const {
    chairpersonSuggestionItems,
    chairpersonSuggestionItemsError,
    chairpersonSuggestionItemsLoading,
    refreshChairpersonSuggestionItems,
  } = useChairpersonSuggestionItems({
    chairpersonSuggestionId: chairpersonSuggestion?.id,
  });

  return (
    <SuggestionView
      title={"Chairperson Suggestions"}
      viewOnly={viewOnly}
      reviewerName={
        chairpersonSuggestion?.SubmittedChairpersonReview?.ChairpersonReview
          ?.Chairperson?.Faculty?.user?.name
      }
      reviewDate={
        chairpersonSuggestion?.SubmittedChairpersonSuggestion?.createdAt
      }
      reviewerImage={
        chairpersonSuggestion?.SubmittedChairpersonReview?.ChairpersonReview
          ?.Chairperson?.Faculty?.user?.image
      }
      reviewerId={
        chairpersonSuggestion?.SubmittedChairpersonReview?.ChairpersonReview
          ?.Chairperson?.Faculty?.user?.id
      }
    >
      {chairpersonSuggestionItemsLoading && (
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
          <td className='px-6 py-4  '>
            <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-16 mb-2.5'></div>
          </td>
        </tr>
      )}

      {!chairpersonSuggestionItemsLoading &&
        chairpersonSuggestionItems.length < 1 && (
          <tr>
            <td colSpan={5}>
              <Empty />
            </td>
          </tr>
        )}
      {!chairpersonSuggestionItemsLoading &&
        chairpersonSuggestionItems.map((chairpersonSuggestionItem) => (
          <ChairpersonSuggestionItemView
            viewOnly={viewOnly}
            key={chairpersonSuggestionItem.id}
            chairpersonSuggestionItem={chairpersonSuggestionItem}
          />
        ))}
    </SuggestionView>
  );
}
