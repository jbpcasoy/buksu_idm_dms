import Layout from "@/components/layout/Layout";
import ChairpersonSuggestionView from "@/components/review/suggestion/suggestion_view/ChairpersonSuggestionView";
import CoordinatorSuggestionView from "@/components/review/suggestion/suggestion_view/CoordinatorSuggestionView";
import IMDCoordinatorSuggestionView from "@/components/review/suggestion/suggestion_view/IMDCoordinatorSuggestionView";
import PeerSuggestionView from "@/components/review/suggestion/suggestion_view/PeerSuggestionView";
import UserContext from "@/contexts/UserContext";
import useIM from "@/hooks/useIM";
import frontendCreateCITLDirectorEndorsement from "@/services/frontend/citl_director_endorsement/frontendCreateCITLDirectorEndorsement";
import frontendCreateCoordinatorEndorsement from "@/services/frontend/coordinator_endorsement/frontendCreateCoordinatorEndorsement";
import frontendCreateDeanEndorsement from "@/services/frontend/dean_endorsement/frontendCreateDeanEndorsement";
import frontendReturnIMDCoordinatorRevision from "@/services/frontend/im/frontendReturnIMDCoordinatorRevision";
import frontendReturnIMForRevision from "@/services/frontend/im/frontendReturnIMForRevision";
import frontendSubmitIMForEndorsement from "@/services/frontend/im/frontendSubmitIMForEndorsement";
import frontendSubmitIMForIMDCoordinatorEndorsement from "@/services/frontend/im/frontendSubmitIMForIMDCoordinatorEndorsement";
import frontendSubmitIMForReview from "@/services/frontend/im/frontendSubmitIMForReview";
import frontendCreateIMDCoordinatorEndorsement from "@/services/frontend/imd_coordinator_endorsement/frontendCreateIMDCoordinatorEndorsement";
import { initDropdowns, initModals } from "flowbite";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import ToggleIM from "../../../components/im/ToggleIM";

export default function ViewIM() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { iM, iMError, iMLoading, refreshIM } = useIM(router?.query?.id);

  useEffect(() => {
    initDropdowns();
    initModals();
  });

  async function handleEndorse() {
    return frontendCreateCoordinatorEndorsement({
      iMId: iM.id,
    }).then((res) => {
      refreshIM();
    });
  }

  async function handleIMDCoordinatorEndorse() {
    return frontendCreateIMDCoordinatorEndorsement({
      submittedIMDCoordinatorSuggestionId:
        iM.IMDCoordinatorSuggestion.SubmittedIMDCoordinatorSuggestion.id,
    }).then((res) => {
      refreshIM();
    });
  }

  async function handleConfirmEndorsement() {
    return frontendCreateDeanEndorsement({
      coordinatorEndorsementId: iM.CoordinatorEndorsement.id,
    }).then((res) => {
      refreshIM();
    });
  }

  async function handleCITLDirectorConfirmEndorsement() {
    return frontendCreateCITLDirectorEndorsement({
      iMDCoordinatorEndorsementId: iM.IMDCoordinatorEndorsement.id,
    }).then((res) => {
      refreshIM();
    });
  }

  async function handleSubmitForReview() {
    return frontendSubmitIMForReview({ iMId: iM.id }).then((res) => {
      refreshIM();
    });
  }

  async function handleSubmitForEndorsement() {
    return frontendSubmitIMForEndorsement({ iMId: iM.id }).then((res) => {
      refreshIM();
    });
  }

  async function handleSubmitForIMDCoordinatorEndorsement() {
    return frontendSubmitIMForIMDCoordinatorEndorsement({ iMId: iM.id }).then(
      (res) => {
        refreshIM();
      }
    );
  }

  async function handleReturnForRevision() {
    return frontendReturnIMForRevision({ iMId: iM.id }).then((res) => {
      refreshIM();
      router.push(`/im/${iM.id}/review/coordinator`);
    });
  }

  async function handleReturnForIMDCoordinatorRevision() {
    return frontendReturnIMDCoordinatorRevision({ iMId: iM.id }).then((res) => {
      refreshIM();
      router.push(`/im/${iM.id}/review/imd_coordinator`);
    });
  }

  return (
    <Layout>
      <div className='bg-white rounded-md p-4'>
        <div className='flex items-center justify-between '>
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
            <div className='flex flex-cols mt-3'>
              <Link href={`/profile/${iM?.owner?.user?.id}`}>
                <img
                  src={iM?.owner?.user?.image}
                  className='h-8 rounded-full sm:h-8'
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

          <div className='flex items-center justify-between'>
            <div className='-mt-14'>
              <button
                id='dropdownDefaultButton'
                data-dropdown-toggle='dropdown'
                className='text-white bg-CITLDarkBlue font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center'
                type='button'
              >
                Options{" "}
                <svg
                  className='w-4 h-4 ml-2'
                  aria-hidden='true'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  ></path>
                </svg>
              </button>
              {iM?.status === "DRAFT" && (
                <div className='relative flex '>
                  <div className='absolute inline-flex items-center justify-center w-2 h-2 text-xs  bg-red-500 rounded-full -top-9 right-1 dark:border-gray-900 animate-pulse duration-75'></div>
                </div>
              )}
            </div>

            <div
              id='dropdown'
              className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
            >
              <ul
                className='py-2 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownDefaultButton'
              >
                <li>
                  {/*  EDIT IM should be visible and accessible only for the owner of the IM
                   */}
                  {iM &&
                    iM.owner.userId === user?.id &&
                    iM.status === "DRAFT" && (
                      <button
                        data-modal-target='im-update-modal'
                        data-modal-toggle='im-update-modal'
                        className='block text-sm  text-left px-4 py-2.5  hover:bg-gray-100 w-full'
                        type='button'
                      >
                        Edit IM
                      </button>
                    )}
                </li>

                {iM &&
                  iM.owner.userId === user?.id &&
                  (iM?.status === "DRAFT" ||
                    iM?.status === "DEPARTMENT_REVIEWED" ||
                    iM?.status === "CITL_REVIEWED") && (
                    <li>
                      {/*  EDIT IM should be visible and accessible only for the owner of the IM
                       */}
                      {iM && iM.owner.userId === user?.id && (
                        <Link
                          href={`/im/${iM?.id}/new_version`}
                          className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        >
                          Upload New Version
                        </Link>
                      )}
                    </li>
                  )}
                {iM &&
                  iM.owner.userId === user?.id &&
                  iM?.status === "DRAFT" && (
                    <button
                      onClick={handleSubmitForReview}
                      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter text-left w-full'
                    >
                      Submit For Review
                      <div className='relative flex '>
                        <div className='absolute inline-flex items-center justify-center w-2 h-2 text-xs  bg-red-500 rounded-full -top-6 right-1 dark:border-gray-900 animate-pulse duration-75'></div>
                      </div>
                    </button>
                  )}
                {user?.ActiveFaculty?.facultyId === iM?.ownerId && (
                  <li>
                    <Link
                      href={`/im/${iM?.id}/versions`}
                      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      View Versions
                    </Link>
                  </li>
                )}
                {user?.ActiveFaculty?.facultyId === iM?.ownerId && (
                  <li>
                    <Link
                      href={`/im/${iM?.id}/track`}
                      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      Track
                    </Link>
                  </li>
                )}
                <li>
                  {user?.ActiveFaculty?.Faculty?.id !== iM?.ownerId &&
                    user?.ActiveFaculty?.Faculty?.departmentId ===
                      iM?.owner?.departmentId &&
                    iM.status !== "DRAFT" && (
                      <button
                        disabled={
                          iM?.SubmittedPeerSuggestion ||
                          (iM?.SubmittedPeerReview &&
                            user?.ActiveFaculty?.facultyId !==
                              iM?.SubmittedPeerReview?.PeerReview?.facultyId) ||
                          iM?.status !== "SUBMITTED"
                        }
                        title={
                          iM?.SubmittedPeerReview &&
                          user?.ActiveFaculty?.facultyId !==
                            iM?.SubmittedPeerReview?.PeerReview?.facultyId
                            ? "Other peer's review exists"
                            : iM?.SubmittedPeerSuggestion
                            ? "Peer review and suggestions already exists"
                            : undefined
                        }
                        onClick={() => router.push(`/im/${iM?.id}/review/peer`)}
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter text-left w-full'
                      >
                        Peer Review
                      </button>
                    )}
                </li>
                <li>
                  {(user?.ActiveFaculty?.Faculty?.id !== iM?.ownerId ||
                    user?.ActiveFaculty?.ActiveCoordinator) &&
                    user?.ActiveFaculty?.ActiveCoordinator &&
                    user?.ActiveFaculty?.Faculty?.departmentId ===
                      iM?.owner?.departmentId &&
                    iM.status !== "DRAFT" && (
                      <button
                        onClick={() =>
                          router.push(`/im/${iM?.id}/review/coordinator`)
                        }
                        disabled={
                          iM?.SubmittedCoordinatorSuggestion ||
                          (iM?.SubmittedCoordinatorReview &&
                            user?.ActiveFaculty?.ActiveCoordinator
                              ?.coordinatorId !==
                              iM?.SubmittedCoordinatorReview?.CoordinatorReview
                                ?.coordinatorId) ||
                          iM?.status !== "SUBMITTED"
                        }
                        title={
                          iM?.SubmittedCoordinatorReview &&
                          user?.ActiveFaculty?.ActiveCoordinator
                            ?.coordinatorId !==
                            iM?.SubmittedCoordinatorReview?.CoordinatorReview
                              ?.coordinatorId
                            ? "Other coordinator's review exists"
                            : iM?.SubmittedCoordinatorSuggestion
                            ? "Coordinator review ang suggestions already exists"
                            : undefined
                        }
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter text-left w-full'
                      >
                        Coordinator Review
                      </button>
                    )}
                </li>
                <li>
                  {(user?.ActiveFaculty?.Faculty?.id !== iM?.ownerId ||
                    user?.ActiveFaculty?.ActiveChairperson) &&
                    user?.ActiveFaculty?.ActiveChairperson &&
                    user?.ActiveFaculty?.Faculty?.departmentId ===
                      iM?.owner?.departmentId &&
                    iM.status !== "DRAFT" && (
                      <button
                        onClick={() =>
                          router.push(`/im/${iM?.id}/review/chairperson`)
                        }
                        disabled={
                          iM?.SubmittedChairpersonSuggestion ||
                          (iM?.SubmittedChairpersonReview &&
                            user?.ActiveFaculty?.ActiveChairperson
                              ?.chairpersonId !==
                              iM?.SubmittedChairpersonReview?.ChairpersonReview
                                ?.chairpersonId) ||
                          iM?.status !== "SUBMITTED"
                        }
                        title={
                          iM?.SubmittedChairpersonReview &&
                          user?.ActiveFaculty?.ActiveChairperson
                            ?.chairpersonId !==
                            iM?.SubmittedChairpersonReview?.ChairpersonReview
                              ?.chairpersonId
                            ? "Other chairperson's review exists"
                            : iM?.SubmittedChairpersonSuggestion
                            ? "Chairperson review ang suggestions already exists"
                            : undefined
                        }
                        className='block w-full  text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter'
                      >
                        Chairperson Review
                      </button>
                    )}
                </li>
                {/* NOTE: for department endorsement */}
                <li>
                  {iM?.status === "DEPARTMENT_REVIEWED" &&
                    user?.ActiveFaculty?.facultyId === iM?.ownerId && (
                      <button
                        onClick={handleSubmitForEndorsement}
                        className='block w-full  text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter'
                      >
                        Submit For Endorsement
                      </button>
                    )}
                </li>
                {/* NOTE: for department revision */}
                <li>
                  {iM?.status === "DEPARTMENT_REVISED" &&
                    user?.ActiveFaculty?.ActiveCoordinator &&
                    user?.ActiveFaculty?.Faculty?.departmentId ===
                      iM?.owner?.departmentId &&
                    !iM?.CoordinatorEndorsement && (
                      <button
                        onClick={handleReturnForRevision}
                        className='block w-full  text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter'
                      >
                        Return For Revision
                      </button>
                    )}
                </li>
                {/* NOTE: for coordinator */}
                <li>
                  {iM?.status === "DEPARTMENT_REVISED" &&
                    user?.ActiveFaculty?.ActiveCoordinator && (
                      <button
                        disabled={iM?.CoordinatorEndorsement}
                        title={
                          iM?.CoordinatorEndorsement &&
                          "IM was already endorsed"
                        }
                        onClick={handleEndorse}
                        className='block w-full  text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter'
                      >
                        Endorse
                      </button>
                    )}
                </li>
                {/* NOTE: for citl endorsement */}
                <li>
                  {iM?.status === "CITL_REVIEWED" &&
                    user?.ActiveFaculty?.facultyId === iM?.ownerId && (
                      <button
                        onClick={handleSubmitForIMDCoordinatorEndorsement}
                        className='block w-full  text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter'
                      >
                        Submit For Endorsement
                      </button>
                    )}
                </li>
                {/* NOTE: for citl revision */}
                <li>
                  {iM?.status === "CITL_REVISED" &&
                    user?.IMDCoordinator?.ActiveIMDCoordinator &&
                    !iM?.IMDCoordinatorEndorsement && (
                      <button
                        onClick={handleReturnForIMDCoordinatorRevision}
                        className='block w-full  text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter'
                      >
                        Return For Revision
                      </button>
                    )}
                </li>
                {/* NOTE: for imd coordinator */}
                <li>
                  {iM?.status === "CITL_REVISED" &&
                    user?.IMDCoordinator?.ActiveIMDCoordinator && (
                      <button
                        disabled={iM?.IMDCoordinatorEndorsement}
                        title={
                          iM?.IMDCoordinatorEndorsement &&
                          "IM was already endorsed"
                        }
                        onClick={handleIMDCoordinatorEndorse}
                        className='block w-full  text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter'
                      >
                        Endorse
                      </button>
                    )}
                </li>
                {/* NOTE: for dean */}
                <li>
                  {(iM?.status === "DEPARTMENT_REVISED" ||
                    iM?.status === "DEPARTMENT_ENDORSED") &&
                    user?.ActiveFaculty?.ActiveDean && (
                      <button
                        disabled={
                          !iM?.CoordinatorEndorsement ||
                          iM?.CoordinatorEndorsement?.DeanEndorsement
                        }
                        title={
                          !iM?.CoordinatorEndorsement
                            ? "Pending coordinator endorsement"
                            : iM?.CoordinatorEndorsement?.DeanEndorsement
                            ? "Endorsement already confirmed"
                            : ""
                        }
                        onClick={handleConfirmEndorsement}
                        className='block w-full  text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter'
                      >
                        Confirm Endorsement
                      </button>
                    )}
                </li>
                {/* NOTE: for citl director */}
                <li>
                  {iM?.status === "CITL_REVISED" &&
                    user?.CITLDirector?.ActiveCITLDirector && (
                      <button
                        disabled={
                          !iM?.IMDCoordinatorEndorsement ||
                          iM?.IMDCoordinatorEndorsement?.CITLDirectorEndorsement
                        }
                        title={
                          !iM?.IMDCoordinatorEndorsement
                            ? "Pending IMD coordinator endorsement"
                            : iM?.IMDCoordinatorEndorsement
                                ?.CITLDirectorEndorsement
                            ? "Endorsement already confirmed"
                            : ""
                        }
                        onClick={handleCITLDirectorConfirmEndorsement}
                        className='block w-full  text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter'
                      >
                        Confirm Endorsement
                      </button>
                    )}
                </li>

                <li>
                  {user?.IMDCoordinator?.ActiveIMDCoordinator &&
                    (iM?.status === "DEPARTMENT_ENDORSED" ||
                      iM?.status === "CITL_REVIEWED") && (
                      <button
                        onClick={() =>
                          router.push(`/im/${iM?.id}/review/imd_coordinator`)
                        }
                        disabled={
                          iM?.IMDCoordinatorSuggestion
                            ?.SubmittedIMDCoordinatorSuggestion
                        }
                        title={
                          iM?.IMDCoordinatorSuggestion
                            ?.SubmittedIMDCoordinatorSuggestion
                            ? "Suggestions are already submitted"
                            : undefined
                        }
                        className='block w-full  text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white disabled:text-CITLGray-lighter'
                      >
                        IMD Coordinator Review
                      </button>
                    )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {iM && (
          <ToggleIM
            className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            iM={iM}
            onUpdate={refreshIM}
          >
            Edit IM
          </ToggleIM>
        )}
        {iM && (
          <div className='inline-flex space-x-1 my-1'>
            {iM?.SubmittedPeerReview && (
              <span
                className='inline-flex items-center bg-purple-400 text-purple-800 text-xs px-3 py-1 rounded-full'
                title={
                  iM?.SubmittedPeerSuggestion
                    ? "Reviewed with Suggestions"
                    : "Reviewed, No Suggestions"
                }
              >
                Peer
                {iM?.SubmittedPeerSuggestion && (
                  <svg
                    aria-hidden='true'
                    class='w-3 h-3  text-purple-800 rounded-full ml-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                )}
                {!iM?.SubmittedPeerSuggestion && (
                  <svg
                    fill='none'
                    class='w-3 h-3  text-purple-800 rounded-full ml-1'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                )}
              </span>
            )}
            {!iM?.SubmittedPeerReview && (
              <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
                Peer
              </span>
            )}

            {iM?.SubmittedChairpersonReview && (
              <span
                className='inline-flex items-center bg-orange-300 text-orange-500 text-xs px-3  py-1 rounded-2xl'
                title={
                  iM?.SubmittedChairpersonSuggestion
                    ? "Reviewed with Suggestions"
                    : "Reviewed, No Suggestions"
                }
              >
                Chairperson
                {iM?.SubmittedChairpersonSuggestion && (
                  <svg
                    aria-hidden='true'
                    class='w-3 h-3  text-orange-500 rounded-full ml-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                )}
                {!iM?.SubmittedChairpersonSuggestion && (
                  <svg
                    fill='none'
                    class='w-3 h-3  text-orange-500 rounded-full ml-1'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                )}
              </span>
            )}

            {!iM?.SubmittedChairpersonReview && (
              <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
                Chairperson
              </span>
            )}
            {iM?.SubmittedCoordinatorReview && (
              <span
                className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
                title={
                  iM?.SubmittedCoordinatorSuggestion
                    ? "Reviewed with Suggestions"
                    : "Reviewed, No Suggestions"
                }
              >
                Coordinator{" "}
                {iM?.SubmittedCoordinatorSuggestion && (
                  <svg
                    aria-hidden='true'
                    class='w-3 h-3  text-green-900 rounded-full ml-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                )}
                {!iM?.SubmittedCoordinatorSuggestion && (
                  <svg
                    fill='none'
                    class='w-3 h-3  text-green-900 rounded-full ml-1'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    ></path>
                  </svg>
                )}
              </span>
            )}
            {!iM?.SubmittedCoordinatorReview && (
              <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
                Coordinator
              </span>
            )}
          </div>
        )}

        {(iM?.owner?.userId === user?.id ||
          user?.ActiveFaculty?.ActiveChairperson ||
          user?.ActiveFaculty?.ActiveCoordinator ||
          iM?.SubmittedPeerReview?.PeerReview?.facultyId ===
            user?.ActiveFaculty?.facultyId ||
          user?.IMDCoordinator?.ActiveIMDCoordinator) && (
          <>
            {iM?.SubmittedPeerReview?.PeerReview &&
              iM?.SubmittedPeerSuggestion && (
                <PeerSuggestionView
                  peerReview={iM?.SubmittedPeerReview?.PeerReview}
                  viewOnly={true}
                />
              )}
            {iM?.SubmittedChairpersonReview?.ChairpersonReview &&
              iM?.SubmittedChairpersonSuggestion && (
                <ChairpersonSuggestionView
                  chairpersonReview={
                    iM?.SubmittedChairpersonReview?.ChairpersonReview
                  }
                  viewOnly={true}
                />
              )}
            {iM?.SubmittedCoordinatorReview?.CoordinatorReview &&
              iM?.SubmittedCoordinatorSuggestion && (
                <CoordinatorSuggestionView
                  coordinatorReview={
                    iM?.SubmittedCoordinatorReview?.CoordinatorReview
                  }
                  viewOnly={true}
                />
              )}
            {iM?.IMDCoordinatorSuggestion
              ?.SubmittedIMDCoordinatorSuggestion && (
              <IMDCoordinatorSuggestionView
                IMDCoordinatorReview={iM?.IMDCoordinatorSuggestion}
                viewOnly={true}
              />
            )}
          </>
        )}

        {process.env.NODE_ENV === "production" && iM && (
          <iframe
            src={`https://docs.google.com/gview?url=${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}&embedded=true`}
            className='w-full h-screen'
          />
        )}
        {process.env.NODE_ENV !== "production" && iM && (
          <iframe
            src={`${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}`}
            className='w-full h-screen'
          />
        )}
      </div>
    </Layout>
  );
}
