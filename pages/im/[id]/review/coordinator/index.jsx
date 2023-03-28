import CoordinatorQuestion from "@/components/review/CoordinatorQuestion";
import IMInfo from "@/components/review/IMInfo";
import Instructions from "@/components/review/Instructions";
import ConfirmCoordinatorReview from "@/components/review/preview/ConfirmCoordinatorReview";
import ReviewPage from "@/components/review/ReviewPage";
import CoordinatorSuggestion from "@/components/review/suggestion/CoordinatorSuggestion";
import { countQuestions, sections } from "@/constants/questions";
import UserContext from "@/contexts/UserContext";
import frontendCreateSubmittedCoordinatorReview from "@/services/api/submitted_coordinator_review/frontendCreateSubmittedCoordinatorReview";
import frontendCreateCoordinatorReview from "@/services/frontend/coordinator_review/frontendCreateCoordinatorReview";
import frontendReadCoordinatorReviews from "@/services/frontend/coordinator_review/frontendReadCoordinatorReviews";
import frontendReadIM from "@/services/frontend/im/frontendReadIM";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const CoordinatorReviewPage = () => {
  const { user, userLoading, userError } = useContext(UserContext);
  const router = useRouter();
  const [iM, setIM] = useState();
  const [coordinatorReview, setCoordinatorReview] = useState();
  const [step, setStep] = useState(0);
  const [iMInfo, setIMInfo] = useState(
    <IMInfo
      key='info'
      authors=''
      title=''
      type='MODULE'
      onNext={handleNext}
      loading={!coordinatorReview}
    />
  );
  const steps = [
    iMInfo,
    <Instructions
      key='instruction'
      onNext={handleNext}
      onPrevious={handlePrevious}
    />,
    ...generateQuestions(sections),
    <ConfirmCoordinatorReview
      key='confirm'
      coordinatorReviewId={coordinatorReview?.id}
      onPrevious={handlePrevious}
      onSubmit={handleSubmit}
    />,
    <CoordinatorSuggestion
      key='suggestion'
      coordinatorReview={coordinatorReview}
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

  async function handleSubmit() {
    return frontendCreateSubmittedCoordinatorReview({
      coordinatorReviewId: coordinatorReview.id,
    })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        handleNext();
      });
  }

  useEffect(() => {
    if (!iM?.SubmittedCoordinatorReview) return;

    setStep(countQuestions(sections) + 2);
  }, [iM?.SubmittedCoordinatorReview]);

  function generateQuestions(sections) {
    const questions = [];

    for (let section of sections) {
      if (!section.active) continue;
      for (let question of section.questions) {
        if (question.active) {
          questions.push(
            <CoordinatorQuestion
              key={question.id}
              questionId={question.id}
              coordinatorReview={coordinatorReview}
              title={section.title}
              question={question.label}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          );
        }
      }
    }

    return questions;
  }

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
        loading={!coordinatorReview}
        authors={iM.authors}
        title={iM.title}
        type={iM.type}
        onNext={handleNext}
      />
    );
  }, [iM, coordinatorReview]);

  useEffect(() => {
    console.log({ user });
    if (!iM?.id || !user?.ActiveFaculty) return;
    let subscribe = true;

    frontendCreateCoordinatorReview({
      iMId: iM.id,
    })
      .then((res) => {
        if (!subscribe) return;

        setCoordinatorReview(res);
      })
      .catch((err) => {
        frontendReadCoordinatorReviews({
          iMId: iM.id,
          coordinatorId: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
        }).then((res) => {
          if (!subscribe) return;

          setCoordinatorReview(res.data[0]);
        });
      });

    return () => {
      subscribe = false;
    };
  }, [iM, user]);

  useEffect(() => {
    console.log({ coordinatorReview });
  }, [coordinatorReview]);

  return <ReviewPage reviewingAs='Coordinator' step={step} steps={steps} />;
};
export default CoordinatorReviewPage;
