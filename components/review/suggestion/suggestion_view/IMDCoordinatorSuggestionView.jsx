import useIMDCoordinatorSuggestion from "@/hooks/imd_coordinator_suggestion/useIMDCoordinatorSuggestion";
import useIMDCoordinatorSuggestionItems from "@/hooks/imd_coordinator_suggestion/useIMDCoordinatorSuggestionItems";
import useIM from "@/hooks/useIM";
import Empty from "@/views/Empty";
import { useRouter } from "next/router";
import IMDCoordinatorSuggestionItemView from "./IMDCoordinatorSuggestionItemView";
import SuggestionView from "./SuggestionView";

export default function IMDCoordinatorSuggestionView({
  IMDCoordinatorReview,
  viewOnly = false,
}) {
  //   const {
  //     submittedIMDCoordinatorReview,
  //     submittedIMDCoordinatorReviewError,
  //     submittedIMDCoordinatorReviewLoading,
  //   } = useSubmittedIMDCoordinatorReview({
  //     IMCoordinatorReviewId: IMDCoordinatorReview.id,
  //   });
  const router = useRouter();
  const { iM, iMError, iMLoading } = useIM(router?.query?.id);
  const {
    iMDCoordinatorSuggestion,
    iMDCoordinatorSuggestionError,
    iMDCoordinatorSuggestionLoading,
  } = useIMDCoordinatorSuggestion({
    iMId: iM?.id,
  });
  const {
    iMDCoordinatorSuggestionItems,
    iMDCoordinatorSuggestionItemsError,
    iMDCoordinatorSuggestionItemsLoading,
    refreshIMDCoordinatorSuggestionItems,
  } = useIMDCoordinatorSuggestionItems({
    iMDCoordinatorSuggestionId: iMDCoordinatorSuggestion?.id,
  });

  return (
    <SuggestionView
      title={"IMD Coordinator Suggestions"}
      viewOnly={viewOnly}
      reviewerName={iMDCoordinatorSuggestion?.IMDCoordinator?.user?.name}
      reviewerImage={iMDCoordinatorSuggestion?.IMDCoordinator?.user?.image}
      reviewDate={
        iMDCoordinatorSuggestion?.SubmittedIMDCoordinatorSuggestion?.createdAt
      }
      reviewerId={iMDCoordinatorSuggestion?.IMDCoordinator?.user?.id}
    >
      {iMDCoordinatorSuggestionItemsLoading && (
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

      {!iMDCoordinatorSuggestionItemsLoading &&
        iMDCoordinatorSuggestionItems.length < 1 && (
          <tr>
            <td colSpan={5}>
              <Empty />
            </td>
          </tr>
        )}
      {!iMDCoordinatorSuggestionItemsLoading &&
        iMDCoordinatorSuggestionItems.map((iMDCoordinatorSuggestionItem) => (
          <IMDCoordinatorSuggestionItemView
            key={iMDCoordinatorSuggestionItem.id}
            iMDCoordinatorSuggestionItem={iMDCoordinatorSuggestionItem}
            viewOnly={viewOnly}
          />
        ))}
    </SuggestionView>
  );
}
