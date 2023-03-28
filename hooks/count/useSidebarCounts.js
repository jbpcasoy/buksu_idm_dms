import useDepartmentImsCount from "./useDepartmentImsCount";
import useMyImsCount from "./useMyImsCount";
import useReviewedCount from "./useReviewedCount";
import useToEndorseCount from "./useToEndorseCount";
import useToReviewCount from "./useToReviewCount";
import useToReviseCount from "./useToReviseCount";

export default function useSidebarCounts() {
  const { count: myImsCount } = useMyImsCount();
  const { count: toReviseCount } = useToReviseCount();
  const { count: toReviewCount } = useToReviewCount();
  const { count: reviewedCount } = useReviewedCount();
  const { count: departmentImsCount } = useDepartmentImsCount();
  const { count: toEndorseCount } = useToEndorseCount();

  return {
    myImsCount,
    toReviseCount,
    toReviewCount,
    reviewedCount,
    toEndorseCount,
    departmentImsCount,
  };
}
