import ChairpersonQuestion from "@/components/review/ChairpersonQuestion";
import IMInfo from "@/components/review/IMInfo";
import Instructions from "@/components/review/Instructions";
import ConfirmChairpersonReview from "@/components/review/preview/ConfirmChairpersonReview";
import ReviewPage from "@/components/review/ReviewPage";
import ChairpersonSuggestion from "@/components/review/suggestion/ChairpersonSuggestion";
import { countQuestions, sections } from "@/constants/questions";
import UserContext from "@/contexts/UserContext";
import frontendCreateChairpersonReview from "@/services/frontend/chairperson_review/frontendCreateChairpersonReview";
import frontendReadChairpersonReviews from "@/services/frontend/chairperson_review/frontendReadChairpersonReview";
import frontendReadIM from "@/services/frontend/im/frontendReadIM";
import frontendCreateSubmittedChairpersonReview from "@/services/frontend/submitted_chairperson_review/frontendCreateSubmittedChairpersonReview";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const ChairpersonReviewPage = () => {
  const { user, userLoading, userError } = useContext(UserContext);
  const router = useRouter();
  const [iM, setIM] = useState();
  const [chairpersonReview, setChairpersonReview] = useState();
  const [step, setStep] = useState(0);
  const [iMInfo, setIMInfo] = useState(
    <IMInfo
      key='info'
      authors=''
      title=''
      type='MODULE'
      onNext={handleNext}
      loading={!chairpersonReview}
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
    <ConfirmChairpersonReview
      key='confirm'
      chairpersonReviewId={chairpersonReview?.id}
      onPrevious={handlePrevious}
      onSubmit={handleSubmit}
    />,
    <ChairpersonSuggestion
      key='suggestion'
      chairpersonReview={chairpersonReview}
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
    return frontendCreateSubmittedChairpersonReview({
      chairpersonReviewId: chairpersonReview.id,
    })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        handleNext();
      });
  }

  useEffect(() => {
    if (!iM?.SubmittedChairpersonReview) return;

    setStep(countQuestions(sections) + 2);
  }, [iM?.SubmittedChairpersonReview]);

  function generateQuestions(sections) {
    const questions = [];
    for (let section of sections) {
      if (!section.active) continue;
      for (let question of section.questions) {
        if (question.active) {
          questions.push(
            <ChairpersonQuestion
              key={question.id}
              questionId={question.id}
              chairpersonReview={chairpersonReview}
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
        loading={!chairpersonReview}
        authors={iM.authors}
        title={iM.title}
        type={iM.type}
        onNext={handleNext}
      />
    );
  }, [iM, chairpersonReview]);

  useEffect(() => {
    console.log({ user });
    if (!iM?.id || !user?.ActiveFaculty) return;
    let subscribe = true;

    frontendCreateChairpersonReview({
      iMId: iM.id,
    })
      .then((res) => {
        if (!subscribe) return;

        setChairpersonReview(res);
      })
      .catch((err) => {
        frontendReadChairpersonReviews({
          iMId: iM.id,
          chairpersonId: user.ActiveFaculty.ActiveChairperson.chairpersonId,
        }).then((res) => {
          if (!subscribe) return;

          setChairpersonReview(res.data[0]);
        });
      });

    return () => {
      subscribe = false;
    };
  }, [iM, user]);

  useEffect(() => {
    console.log({ chairpersonReview });
  }, [chairpersonReview]);

  return (
    <ReviewPage reviewingAs='Chairperson' step={step} steps={steps} iM={iM} />
  );
};
export default ChairpersonReviewPage;
