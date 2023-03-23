import IMInfo from "@/components/review/IMInfo";
import Instructions from "@/components/review/Instructions";
import PeerQuestion from "@/components/review/PeerQuestion";
import ConfirmPeerReview from "@/components/review/preview/ConfirmPeerReview";
import ReviewPage from "@/components/review/ReviewPage";
import PeerSuggestion from "@/components/review/suggestion/PeerSuggestion";
import { countQuestions, sections } from "@/constants/questions";
import useUser from "@/hooks/useUser";
import frontendReadIM from "@/services/frontend/im/frontendReadIM";
import frontendCreatePeerReview from "@/services/frontend/peer_review/frontendCreatePeerReview";
import frontendReadPeerReviews from "@/services/frontend/peer_review/frontendReadPeerReview";
import frontendCreateSubmittedPeerReview from "@/services/frontend/submitted_peer_review/frontendCreateSubmittedPeerReview";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PeerReviewPage = () => {
  const { user, userLoading, userError } = useUser();
  const router = useRouter();
  const [iM, setIM] = useState();
  const [peerReview, setPeerReview] = useState();
  const [step, setStep] = useState(0);
  const [iMInfo, setIMInfo] = useState(
    <IMInfo
      key='info'
      authors=''
      title=''
      type='MODULE'
      onNext={handleNext}
      loading={!peerReview}
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
    <ConfirmPeerReview
      key='confirm'
      peerReviewId={peerReview?.id}
      onPrevious={handlePrevious}
      onSubmit={handleSubmit}
    />,
    <PeerSuggestion
      key='suggestion'
      peerReview={peerReview}
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
    return frontendCreateSubmittedPeerReview({
      peerReviewId: peerReview.id,
    })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        handleNext();
      });
  }

  useEffect(() => {
    if (!iM?.SubmittedPeerReview) return;

    setStep(countQuestions(sections) + 2);
  }, [iM?.SubmittedPeerReview]);

  function generateQuestions(sections) {
    const questions = [];

    for (let section of sections) {
      if (!section.active) continue;
      for (let question of section.questions) {
        if (question.active) {
          questions.push(
            <PeerQuestion
              key={question.id}
              questionId={question.id}
              peerReview={peerReview}
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
        loading={!peerReview}
        authors={iM.authors}
        title={iM.title}
        type={iM.type}
        onNext={handleNext}
      />
    );
  }, [iM, peerReview]);

  useEffect(() => {
    console.log({ user });
    if (!iM?.id || !user?.ActiveFaculty) return;
    let subscribe = true;

    frontendCreatePeerReview({
      iMId: iM.id,
    })
      .then((res) => {
        if (!subscribe) return;

        setPeerReview(res);
      })
      .catch((err) => {
        frontendReadPeerReviews({
          iMId: iM.id,
          facultyId: user.ActiveFaculty.Faculty.id,
        }).then((res) => {
          if (!subscribe) return;

          setPeerReview(res.data[0]);
        });
      });

    return () => {
      subscribe = false;
    };
  }, [iM, user]);

  useEffect(() => {
    console.log({ peerReview });
  }, [peerReview]);

  return <ReviewPage reviewingAs='Peer' step={step} steps={steps} />;
};
export default PeerReviewPage;
