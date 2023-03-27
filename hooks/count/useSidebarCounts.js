import useDepartmentImsCount from "./useDepartmentImsCount";
import useMyImsCount from "./useMyImsCount";
import useToReviewCount from "./useToReviewCount";
import useToReviseCount from "./useToReviseCount";

export default function useSidebarCounts() {
  const { count: myImsCount } = useMyImsCount();
  const { count: toReviseCount } = useToReviseCount();
  const { count: toReviewCount } = useToReviewCount();
  const { count: reviewedCount } = useToReviewCount();
  const { count: departmentImsCount } = useDepartmentImsCount();

  return {
    myImsCount,
    toReviseCount,
    toReviewCount,
    reviewedCount,
    departmentImsCount,
  };
}
