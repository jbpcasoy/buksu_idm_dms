import useCITLConfirmedCount from "./useCITLConfirmedCount";
import useCITLEndorsedCount from "./useCITLEndorsedCount";
import useCITLReviewedCount from "./useCITLReviewedCount";
import useCITLToEndorseCount from "./useCITLToEndorseCount";
import useCITLToReviewCount from "./useCITLToReviewCount";
import useCollegeImsCount from "./useCollegeImsCount";
import useConfirmedCount from "./useConfirmedCount";
import useDepartmentImsCount from "./useDepartmentImsCount";
import useEndorsedCount from "./useEndorsedCount";
import useImsCount from "./useImsCount";
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
  const { count: cITLToReviewCount } = useCITLToReviewCount();
  const { count: cITLReviewedCount } = useCITLReviewedCount();
  const { count: cITLToEndorseCount } = useCITLToEndorseCount();
  const { count: cITLEndorsedCount } = useCITLEndorsedCount();
  const { count: cITLConfirmedCount } = useCITLConfirmedCount();
  const { count: imsCount } = useImsCount();

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
    cITLToReviewCount,
    cITLReviewedCount,
    imsCount,
    cITLToEndorseCount,
    cITLEndorsedCount,
    cITLConfirmedCount,
  };
}
