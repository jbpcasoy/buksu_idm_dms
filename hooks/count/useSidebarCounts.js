import useCollegeImsCount from "./useCollegeImsCount";
import useConfirmedCount from "./useConfirmedCount";
import useDepartmentImsCount from "./useDepartmentImsCount";
import useEndorsedCount from "./useEndorsedCount";
import useMyImsCount from "./useMyImsCount";
import useReviewedCount from "./useReviewedCount";
import useToConfirmCount from "./useToConfirmCount";
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
  const { count: endorsedCount } = useEndorsedCount();
  const { count: toConfirmCount } = useToConfirmCount();
  const { count: confirmedCount } = useConfirmedCount();
  const { count: collegeIMsCount } = useCollegeImsCount();

  return {
    myImsCount,
    toReviseCount,
    toReviewCount,
    reviewedCount,
    toEndorseCount,
    departmentImsCount,
    endorsedCount,
    toConfirmCount,
    confirmedCount,
    collegeIMsCount,
  };
}
