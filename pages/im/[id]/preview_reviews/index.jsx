import IMPreview from "@/components/IMPreview";
import Layout from "@/components/layout/Layout";
import ChairpersonIMReviewPrintDialog from "@/components/pdf/print/ChairpersonIMReviewDialog";
import CoordinatorIMReviewPrintDialog from "@/components/pdf/print/CoordinatorIMReviewPrintDialog";
import PeerIMReviewPrintDialog from "@/components/pdf/print/PeerIMReviewPrintDialog";
import ChairpersonPreviewQuestion from "@/components/review/preview/ChairpersonPreviewQuestion";
import CoordinatorPreviewQuestion from "@/components/review/preview/CoordinatorPreviewQuestion";
import PeerPreviewQuestion from "@/components/review/preview/PeerPreviewQuestion";
import PreviewSection from "@/components/review/preview/PreviewSection";
import { sections } from "@/constants/questions";
import useIM from "@/hooks/useIM";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function PreviewReviews() {
  const router = useRouter();
  const { iM, iMError, iMLoading, refreshIM } = useIM(router?.query?.id);
  const tabs = {
    peer: "Peer",
    chairperson: "Chairperson",
    coordinator: "Coordinator",
  };
  const [state, setState] = useState({ tab: tabs.peer, openPrint: false });

  return (
    <Layout>
      <div className='flex justify-between px-1'>
        <select
          id='default'
          className='bg-CITLGray-light border-CITLGray-lighter border text-CITLGray-main  text-sm font-medium  rounded-md'
          value={state.state}
          onChange={(e) =>
            setState((prev) => ({ ...prev, tab: e.target.value }))
          }
        >
          <option key={tabs.peer} value={tabs.peer}>
            {tabs.peer}
          </option>
          <option key={tabs.chairperson} value={tabs.chairperson}>
            {tabs.chairperson}
          </option>
          <option key={tabs.coordinator} value={tabs.coordinator}>
            {tabs.coordinator}
          </option>
        </select>
      </div>

      {state.tab === tabs.peer && (
        <>
          {iM && !iM?.SubmittedPeerReview && (
            <div
              class='flex p-4 my-4 text-sm text-CITLOrange rounded-lg bg-CITLDarkBlue dark:bg-gray-800 '
              role='alert'
            >
              <svg
                aria-hidden='true'
                class='flex-shrink-0 inline w-5 h-5 mr-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span class='sr-only'>Info</span>
              <div>
                <span class='font-medium'>Not Found!</span> There&apos;s no peer
                review yet.
              </div>
            </div>
          )}

          {iM?.SubmittedPeerReview && (
            <>
              <div className='flex items-center justify-between p-2 pb-0'>
                <div>
                  <div className='flex flex-cols mt-3'>
                    <Link
                      href={`/profile/${iM?.SubmittedPeerReview?.PeerReview?.Faculty?.user?.id}`}
                    >
                      <img
                        src={
                          iM?.SubmittedPeerReview?.PeerReview?.Faculty?.user
                            ?.image
                        }
                        className='w-8 h-8 rounded-full sm:h-8'
                        alt='owner'
                      ></img>
                    </Link>
                    <div className=''>
                      <h2 className='text-xs font-semibold text-CITLGray-main pl-3 -mb-1'>
                        {
                          iM?.SubmittedPeerReview?.PeerReview?.Faculty?.user
                            ?.name
                        }
                      </h2>
                      <time className='text-xs text-CITLGray-main pl-3 '>
                        {iM?.SubmittedPeerReview?.createdAt &&
                          moment(iM?.SubmittedPeerReview?.createdAt).format(
                            "MMMM D, YYYY | h:mm A"
                          )}
                      </time>
                    </div>
                  </div>
                  <div className='lg:flex sm:flex-rows-2 gap-3'>
                    <h2 className='text-xs  text-CITLGray-main'>
                      Department:{" "}
                      <span className='text-xs font-medium '>
                        {
                          iM?.SubmittedPeerReview?.PeerReview?.Faculty
                            ?.department?.name
                        }{" "}
                        |{" "}
                        {
                          iM?.SubmittedPeerReview?.PeerReview?.Faculty
                            ?.department?.college?.name
                        }
                      </span>
                    </h2>
                  </div>
                </div>
                <PeerIMReviewPrintDialog iM={iM} />
              </div>
              {sections.map((section) => {
                return (
                  <PreviewSection key={section.title} section={section}>
                    {section.questions.map((question) => {
                      if (question.active)
                        return (
                          <PeerPreviewQuestion
                            disabled={true}
                            key={question.id}
                            question={question}
                            peerReviewId={iM?.SubmittedPeerReview?.peerReviewId}
                          />
                        );
                    })}
                  </PreviewSection>
                );
              })}
            </>
          )}
        </>
      )}

      {state.tab === tabs.chairperson && (
        <>
          {iM && !iM?.SubmittedChairpersonReview && (
            <div
              class='flex p-4 my-4 text-sm text-CITLOrange rounded-lg bg-CITLDarkBlue dark:bg-gray-800 '
              role='alert'
            >
              <svg
                aria-hidden='true'
                class='flex-shrink-0 inline w-5 h-5 mr-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span class='sr-only'>Info</span>
              <div>
                <span class='font-medium'>Not Found!</span> There&apos;s no
                chairperson review yet.
              </div>
            </div>
          )}

          {iM?.SubmittedChairpersonReview && (
            <>
              <div className='flex items-center justify-between p-2 pb-0'>
                <div>
                  <div className='flex flex-cols mt-3'>
                    <Link
                      href={`/profile/${iM?.SubmittedChairpersonReview?.ChairpersonReview?.Chairperson?.Faculty?.user?.id}`}
                    >
                      <img
                        src={
                          iM?.SubmittedChairpersonReview?.ChairpersonReview
                            ?.Chairperson?.Faculty?.user?.image
                        }
                        className='w-8 h-8 rounded-full sm:h-8'
                        alt='owner'
                      ></img>
                    </Link>
                    <div className=''>
                      <h2 className='text-xs font-semibold text-CITLGray-main pl-3 -mb-1'>
                        {
                          iM?.SubmittedChairpersonReview?.ChairpersonReview
                            ?.Chairperson?.Faculty?.user?.name
                        }
                      </h2>
                      <time className='text-xs text-CITLGray-main pl-3 '>
                        {iM?.SubmittedChairpersonReview?.createdAt &&
                          moment(
                            iM?.SubmittedChairpersonReview?.createdAt
                          ).format("MMMM D, YYYY | h:mm A")}
                      </time>
                    </div>
                  </div>
                  <div className='lg:flex sm:flex-rows-2 gap-3'>
                    <h2 className='text-xs  text-CITLGray-main'>
                      Department:{" "}
                      <span className='text-xs font-medium '>
                        {
                          iM?.SubmittedChairpersonReview?.ChairpersonReview
                            ?.Chairperson?.Faculty?.department?.name
                        }{" "}
                        |{" "}
                        {
                          iM?.SubmittedChairpersonReview?.ChairpersonReview
                            ?.Chairperson?.Faculty?.department?.college?.name
                        }
                      </span>
                    </h2>
                  </div>
                </div>

                <ChairpersonIMReviewPrintDialog iM={iM} />
              </div>
              {sections.map((section) => {
                if (section.active) {
                  return (
                    <PreviewSection key={section.title} section={section}>
                      {section.questions.map((question) => {
                        if (question.active)
                          return (
                            <ChairpersonPreviewQuestion
                              disabled={true}
                              key={question.id}
                              question={question}
                              chairpersonReviewId={
                                iM?.SubmittedChairpersonReview
                                  ?.chairpersonReviewId
                              }
                            />
                          );
                      })}
                    </PreviewSection>
                  );
                }
              })}
            </>
          )}
        </>
      )}

      {state.tab === tabs.coordinator && (
        <>
          {iM && !iM?.SubmittedCoordinatorReview && (
            <div
              class='flex p-4 my-4 text-sm text-CITLOrange rounded-lg bg-CITLDarkBlue dark:bg-gray-800 '
              role='alert'
            >
              <svg
                aria-hidden='true'
                class='flex-shrink-0 inline w-5 h-5 mr-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span class='sr-only'>Info</span>
              <div>
                <span class='font-medium'>Not Found!</span> There&apos;s no
                coordinator review yet.
              </div>
            </div>
          )}

          {iM?.SubmittedCoordinatorReview && (
            <>
              <div className='flex items-center justify-between p-2 pb-0'>
                <div>
                  <div className='flex flex-cols mt-3'>
                    <Link
                      href={`/profile/${iM?.SubmittedCoordinatorReview?.CoordinatorReview?.Coordinator?.Faculty?.user?.id}`}
                    >
                      <img
                        src={
                          iM?.SubmittedCoordinatorReview?.CoordinatorReview
                            ?.Coordinator?.Faculty?.user?.image
                        }
                        className='w-8 h-8 rounded-full sm:h-8'
                        alt='owner'
                      ></img>
                    </Link>
                    <div className=''>
                      <h2 className='text-xs font-semibold text-CITLGray-main pl-3 -mb-1'>
                        {
                          iM?.SubmittedCoordinatorReview?.CoordinatorReview
                            ?.Coordinator?.Faculty?.user?.name
                        }
                      </h2>
                      <time className='text-xs text-CITLGray-main pl-3 '>
                        {iM?.SubmittedCoordinatorReview?.createdAt &&
                          moment(
                            iM?.SubmittedCoordinatorReview?.createdAt
                          ).format("MMMM D, YYYY | h:mm A")}
                      </time>
                    </div>
                  </div>
                  <div className='lg:flex sm:flex-rows-2 gap-3'>
                    <h2 className='text-xs  text-CITLGray-main'>
                      Department:{" "}
                      <span className='text-xs font-medium '>
                        {
                          iM?.SubmittedCoordinatorReview?.CoordinatorReview
                            ?.Coordinator?.Faculty?.department?.name
                        }{" "}
                        |{" "}
                        {
                          iM?.SubmittedCoordinatorReview?.CoordinatorReview
                            ?.Coordinator?.Faculty?.department?.college?.name
                        }
                      </span>
                    </h2>
                  </div>
                </div>

                <CoordinatorIMReviewPrintDialog iM={iM} />
              </div>
              {sections.map((section) => {
                if (section.active) {
                  return (
                    <PreviewSection key={section.title} section={section}>
                      {section.questions.map((question) => {
                        if (question.active)
                          return (
                            <CoordinatorPreviewQuestion
                              disabled={true}
                              key={question.id}
                              question={question}
                              coordinatorReviewId={
                                iM?.SubmittedCoordinatorReview
                                  ?.coordinatorReviewId
                              }
                            />
                          );
                      })}
                    </PreviewSection>
                  );
                }
              })}
            </>
          )}
        </>
      )}

      <div className='p-2'>
        <div className='flex items-center justify-between pb-2'>
          <div>
            <h2 className='text-lg font-medium'>{iM?.title}</h2>
            <div className='lg:flex sm:flex-rows-2 gap-3'>
              <h2 className='text-xs  text-CITLGray-main'>
                Type: <span className='text-xs font-medium '>{iM?.type}</span>
              </h2>
              <h2 className='text-xs  text-CITLGray-main'>
                Status:{" "}
                <span className='text-xs font-medium '>{iM?.status}</span>
              </h2>
            </div>
            <div className='lg:flex sm:flex-rows-2 gap-3'>
              <h2 className='text-xs  text-CITLGray-main'>
                Department:{" "}
                <span className='text-xs font-medium '>
                  {iM?.owner?.department?.name} |{" "}
                  {iM?.owner?.department?.college?.name}
                </span>
              </h2>
            </div>
            <div className='flex flex-cols mt-3'>
              <Link href={`/profile/${iM?.owner?.user?.id}`}>
                <img
                  src={iM?.owner?.user?.image}
                  className='w-8 h-8 rounded-full sm:h-8'
                  alt='owner'
                ></img>
              </Link>
              <div className=''>
                <h2 className='text-xs font-semibold text-CITLGray-main pl-3 -mb-1'>
                  {iM?.owner?.user?.name}
                </h2>
                <time className='text-xs text-CITLGray-main pl-3 '>
                  {iM?.createdAt &&
                    moment(iM?.createdAt).format("MMMM D, YYYY | h:mm A")}
                </time>
              </div>
            </div>
          </div>
        </div>
        <IMPreview iM={iM} />
      </div>
    </Layout>
  );
}
