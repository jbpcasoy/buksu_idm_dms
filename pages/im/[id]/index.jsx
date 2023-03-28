import Layout from "@/components/layout/Layout";
import ChairpersonSuggestionView from "@/components/review/suggestion/suggestion_view/ChairpersonSuggestionView";
import CoordinatorSuggestionView from "@/components/review/suggestion/suggestion_view/CoordinatorSuggestionView";
import PeerSuggestionView from "@/components/review/suggestion/suggestion_view/PeerSuggestionView";
import useIM from "@/hooks/useIM";
import useUser from "@/hooks/useUser";
import { initDropdowns, initModals } from "flowbite";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ToggleIM from "../../../components/im/ToggleIM";

export default function ViewIM() {
  const router = useRouter();
  const { user } = useUser();
  const { iM, iMError, iMLoading, refreshIM } = useIM(router?.query?.id);

  useEffect(() => {
    initDropdowns();
    initModals();
  });

  return (
    <Layout>
      <div className='bg-white rounded-md p-4'>
        <div className='flex items-center justify-between '>
          <div>
            <h2 className='text-lg font-medium'>{iM?.title}</h2>
            <h2 className='text-xs  text-CITLGray-main'>
              Type: <span className='text-xs font-medium '>Module</span>
            </h2>
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
                className='text-white bg-CITLDarkBlue font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center'
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
                  {iM && iM.owner.userId === user?.id && (
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
                <li>
                  <Link
                    href={`/im/${iM?.id}/versions`}
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    View Versions
                  </Link>
                </li>
                <li>
                  {user?.ActiveFaculty?.Faculty?.id !== iM?.ownerId && (
                    <button
                      disabled={
                        iM?.SubmittedPeerSuggestion ||
                        (iM?.SubmittedPeerReview &&
                          user?.ActiveFaculty?.facultyId !==
                            iM?.SubmittedPeerReview?.PeerReview?.facultyId)
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
                  {user?.ActiveFaculty?.Faculty?.id !== iM?.ownerId &&
                    user?.ActiveFaculty?.ActiveCoordinator && (
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
                                ?.coordinatorId)
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
                  {user?.ActiveFaculty?.Faculty?.id !== iM?.ownerId &&
                    user?.ActiveFaculty?.ActiveChairperson && (
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
                                ?.chairpersonId)
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
          <div className='my-2 space-x-1'>
            {Boolean(
              iM?.SubmittedPeerReview && iM?.SubmittedPeerSuggestion
            ) && (
              <span className='bg-purple-400 text-purple-800 text-xs px-3 py-1 rounded-2xl'>
                Peer
              </span>
            )}
            {!Boolean(
              iM?.SubmittedPeerReview && iM?.SubmittedPeerSuggestion
            ) && (
              <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
                Peer
              </span>
            )}
            {Boolean(
              iM?.SubmittedChairpersonReview &&
                iM?.SubmittedChairpersonSuggestion
            ) && (
              <span className='bg-orange-300 text-orange-500 text-xs px-3  py-1 rounded-2xl'>
                Chairperson
              </span>
            )}
            {!Boolean(
              iM?.SubmittedChairpersonReview &&
                iM?.SubmittedChairpersonSuggestion
            ) && (
              <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
                Chairperson
              </span>
            )}
            {Boolean(
              iM?.SubmittedCoordinatorReview &&
                iM?.SubmittedCoordinatorSuggestion
            ) && (
              <span className='bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'>
                Coordinator
              </span>
            )}
            {!Boolean(
              iM?.SubmittedCoordinatorReview &&
                iM?.SubmittedCoordinatorSuggestion
            ) && (
              <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
                Coordinator
              </span>
            )}
          </div>
        )}

        {iM?.owner?.userId === user?.id && (
          <>
            {iM?.SubmittedPeerReview?.PeerReview &&
              iM?.SubmittedPeerSuggestion && (
                <PeerSuggestionView
                  peerReview={iM?.SubmittedPeerReview?.PeerReview}
                />
              )}
            {iM?.SubmittedChairpersonReview?.ChairpersonReview &&
              iM?.SubmittedChairpersonSuggestion && (
                <ChairpersonSuggestionView
                  chairpersonReview={
                    iM?.SubmittedChairpersonReview?.ChairpersonReview
                  }
                />
              )}
            {iM?.SubmittedCoordinatorReview?.CoordinatorReview &&
              iM?.SubmittedCoordinatorSuggestion && (
                <CoordinatorSuggestionView
                  coordinatorReview={
                    iM?.SubmittedCoordinatorReview?.CoordinatorReview
                  }
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
