import ReviewPage from "@/components/page/review/ReviewPage";
import IMInfo from "@/components/review/IMInfo";
import Instructions from "@/components/review/Instructions";
import PeerQuestion from "@/components/review/PeerQuestion";
import { countQuestions, sections } from "@/constants/questions";
import useUser from "@/hooks/useUser";
import frontendReadIM from "@/services/frontend/im/frontendReadIM";
import frontendCreatePeerReview from "@/services/frontend/peer_review/frontendCreatePeerReview";
import frontendReadPeerReview from "@/services/frontend/peer_review/frontendReadPeerReview";
import frontendCreateSubmittedPeerReview from "@/services/frontend/submitted_pper_review/frontendCreateSubmittedPeerReview";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PeerReviewPage = () => {
  const { user, userLoading, userError } = useUser();
  const router = useRouter();
  const [iM, setIM] = useState();
  const [peerReview, setPeerReview] = useState();
  const [step, setStep] = useState(0);
  const [iMInfo, setIMInfo] = useState(
    <IMInfo key='info' authors='' title='' type='MODULE' onNext={handleNext} />
  );
  const steps = [
    iMInfo,
    <Instructions
      key='instruction'
      onNext={handleNext}
      onPrevious={handlePrevious}
    />,
    ...generateQuestions(sections),
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
        router.push(`/im/${iM.id}`);
      });
  }

  function generateQuestions(sections) {
    const questions = [];
    const questionNumber = countQuestions(sections);
    let i = 0;

    for (let section of sections) {
      for (let question of section.questions) {
        questions.push(
          <PeerQuestion
            key={question.id}
            questionId={question.id}
            peerReview={peerReview}
            title={section.title}
            question={question.label}
            onNext={handleNext}
            disableNext={i === questionNumber - 1}
            disableSubmit={i < questionNumber - 1}
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
          />
        );

        i++;
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
        authors={iM.authors}
        title={iM.title}
        type={iM.type}
        onNext={handleNext}
      />
    );
  }, [iM]);

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
        frontendReadPeerReview({
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

  return (
    // <Layout>
    //   <div className='sm:pt-12'>
    //     <div className='flex items-center border border-CITLGray-lighter bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
    //       <div className='w-full '>
    //         {step < steps.length - 1 && (
    //           <div className='p-4 '>
    //             <div className='flex mt-10'>
    //               <div className='w-9/12 border-t-4 transition duration-500 ease-in-out border-CITLOrange'>
    //                 <div className=' top-0 mt-2 text-xs font-medium uppercase text-CITLOrange'>
    //                   step {step + 1} of {steps.length}
    //                 </div>
    //               </div>
    //               <div className='w-3/12 border-t-4 ml-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div>
    //             </div>
    //           </div>
    //         )}
    //         {step === steps.length - 1 && (
    //           <div className='p-4 '>
    //             <div className='flex mt-10'>
    //               <div className='w-full border-t-4 transition duration-500 ease-in-out border-CITLOrange'>
    //                 <div className=' top-0 mt-2 text-xs font-medium uppercase text-CITLOrange'>
    //                   step {step + 1} of {steps.length}
    //                 </div>
    //               </div>
    //               {/* <div className='w-3/12 border-t-4 ml-2 transition duration-500 ease-in-out border-CITLGray-lighter'></div> */}
    //             </div>
    //           </div>
    //         )}

    //         <div className='px-2 pt-10'>
    //           <h2 className='text-CITLDarkBlue font-bold text-2xl '>
    //             Instructional Material Review Form
    //           </h2>
    //           <p className='mb-8 text-sm'>Implementation Phase</p>

    //           {steps[step]}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
    <ReviewPage step={step} steps={steps} />
  );
};
export default PeerReviewPage;
