import IMInfo from "@/components/review/IMInfo";
import ReviewPage from "@/components/review/ReviewPage";
import IMDCoordinatorSuggestion from "@/components/review/suggestion/IMDCoordinatorSuggestion";
import frontendReadIM from "@/services/frontend/im/frontendReadIM";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const IMDCoordinatorReviewPage = () => {
  //   const { user, userLoading, userError } = useContext(UserContext);
  const router = useRouter();
  const [iM, setIM] = useState();
  //   const [iMDCoordinatorReview, setIMDCoordinatorReview] = useState();
  const [step, setStep] = useState(0);
  const [iMInfo, setIMInfo] = useState(
    <IMInfo
      key='info'
      authors=''
      title=''
      type='MODULE'
      onNext={handleNext}
      loading={!iM}
    />
  );
  const steps = [
    iMInfo,
    // <Instructions
    //   key='instruction'
    //   onNext={handleNext}
    //   onPrevious={handlePrevious}
    // />,
    // ...generateQuestions(sections),
    // <ConfirmIMDCoordinatorReview
    //   key='confirm'
    //   iMDCoordinatorReviewId={iMDCoordinator?.id}
    //   onPrevious={handlePrevious}
    //   onSubmit={handleSubmit}
    // />,
    <IMDCoordinatorSuggestion
      key='suggestion'
      //   imdCoordinatorReview={iMDCoordinatorReview}
      onFinish={() => {
        router.push(`/im/${iM.id}`);
      }}
      onPrevious={handlePrevious}
    />,
  ];

  function handlePrevious() {
    return setStep((prev) => prev - 1);
  }

  function handleNext() {
    return setStep((prev) => prev + 1);
  }

  //   async function handleSubmit() {
  //     return frontendCreateSubmittedIMDCoordinatorReview({
  //       iMDCoordinatorReviewId: iMDCoordinatorReview.id,
  //     })
  //       .catch((err) => {
  //         console.error(err);
  //       })
  //       .finally(() => {
  //         handleNext();
  //       });
  //   }

  //   useEffect(() => {
  //     if (!iM?.SubmittedIMDCoordinatorReview) return;

  //     setStep(countQuestions(sections) + 2);
  //   }, [iM?.SubmittedIMDCoordinatorReview]);

  //   function generateQuestions(sections) {
  //     const questions = [];

  //     for (let section of sections) {
  //       if (!section.active) continue;
  //       for (let question of section.questions) {
  //         if (question.active) {
  //           questions.push(
  //             <IMDCoordinatorQuestion
  //               key={question.id}
  //               questionId={question.id}
  //               iMDCoordinatorReview={iMDCoordinatorReview}
  //               title={section.title}
  //               question={question.label}
  //               onNext={handleNext}
  //               onPrevious={handlePrevious}
  //             />
  //           );
  //         }
  //       }
  //     }

  //     return questions;
  //   }

  useEffect(() => {
    let subscribe = true;
    const id = router?.query?.id;
    if (!id) return;

    frontendReadIM(id).then((res) => {
      if (!subscribe) return;

      setIM(res);
    });

    return () => {
      subscribe = false;
    };
  }, [router?.query?.id]);

  useEffect(() => {
    console.log({ iM });
    if (!iM) return;

    setIMInfo(
      <IMInfo
        loading={!iM}
        authors={iM.authors}
        title={iM.title}
        type={iM.type}
        onNext={handleNext}
      />
    );
  }, [iM]);

  //   useEffect(() => {
  //     console.log({ user });
  //     if (!iM?.id || !user?.ActiveFaculty) return;
  //     let subscribe = true;

  //     frontendCreateIMDCoordinatorReview({
  //       iMId: iM.id,
  //     })
  //       .then((res) => {
  //         if (!subscribe) return;

  //         setIMDCoordinatorReview(res);
  //       })
  //       .catch((err) => {
  //         frontendReadIMDCoordinatorReviews({
  //           iMId: iM.id,
  //           facultyId: user.ActiveFaculty.Faculty.id,
  //         }).then((res) => {
  //           if (!subscribe) return;

  //           setIMDCoordinatorReview(res.data[0]);
  //         });
  //       });

  //     return () => {
  //       subscribe = false;
  //     };
  //   }, [iM, user]);

  //   useEffect(() => {
  //     console.log({ iMDCoordinatorReview });
  //   }, [iMDCoordinatorReview]);

  return (
    <ReviewPage
      reviewingAs='IMD Coordinator'
      step={step}
      steps={steps}
      iM={iM}
    />
  );
};
export default IMDCoordinatorReviewPage;
