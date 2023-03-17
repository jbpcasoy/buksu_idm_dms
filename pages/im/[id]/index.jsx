import Layout from "@/components/layout/Layout";
import ChairpersonSuggestionView from "@/components/review/suggestion/suggestion_view/ChairpersonSuggestionView";
import CoordinatorSuggestionView from "@/components/review/suggestion/suggestion_view/CoordinatorSuggestionView";
import PeerSuggestionView from "@/components/review/suggestion/suggestion_view/PeerSuggestionView";
import useIM from "@/hooks/useIM";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import ToggleIM from "../ToggleIM";

export default function ViewIM() {
  const router = useRouter();
  const { user } = useUser();
  const { iM, iMError, iMLoading } = useIM(router?.query?.id);

  console.log({ router });

  return (
    <Layout>
      <div className='bg-white rounded-md p-4'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-lg font-medium'>{iM?.title}</h2>
          <button
            id='dropdownDefaultButton'
            data-dropdown-toggle='dropdown'
            class='text-white bg-CITLDarkBlue font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center'
            type='button'
          >
            Options{" "}
            <svg
              class='w-4 h-4 ml-2'
              aria-hidden='true'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          </button>

          <div
            id='dropdown'
            class='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
          >
            <ul
              class='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdownDefaultButton'
            >
              <li>
                {/*  EDIT IM should be visible and accessible only for the owner of the IM
                 */}
                <button
                  data-modal-target='authentication-modal'
                  data-modal-toggle='authentication-modal'
                  class='block text-sm  text-left px-4 py-2.5  hover:bg-gray-100 w-full'
                  type='button'
                >
                  Edit IM
                </button>
              </li>
              <li>
                <a
                  href={`/im/${iM?.id}/versions`}
                  class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  View Versions
                </a>
              </li>
              <li>
                {user?.ActiveFaculty?.Faculty?.id !== iM?.ownerId && (
                  <button
                    disabled={
                      iM?.SubmittedPeerReview &&
                      user?.ActiveFaculty?.facultyId !==
                        iM?.SubmittedPeerReview?.PeerReview?.facultyId
                    }
                    title={
                      iM?.SubmittedPeerReview &&
                      user?.ActiveFaculty?.facultyId !==
                        iM?.SubmittedPeerReview?.PeerReview?.facultyId
                        ? "Other peer's review exists"
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
                        iM?.SubmittedCoordinatorReview &&
                        user?.ActiveFaculty?.ActiveCoordinator
                          ?.coordinatorId !==
                          iM?.SubmittedCoordinatorReview?.CoordinatorReview
                            ?.coordinatorId
                      }
                      title={
                        iM?.SubmittedCoordinatorReview &&
                        user?.ActiveFaculty?.ActiveCoordinator
                          ?.coordinatorId !==
                          iM?.SubmittedCoordinatorReview?.CoordinatorReview
                            ?.coordinatorId
                          ? "Other coordinator's review exists"
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
                        iM?.SubmittedChairpersonReview &&
                        user?.ActiveFaculty?.ActiveChairperson
                          ?.chairpersonId !==
                          iM?.SubmittedChairpersonReview?.ChairpersonReview
                            ?.chairpersonId
                      }
                      title={
                        iM?.SubmittedChairpersonReview &&
                        user?.ActiveFaculty?.ActiveChairperson
                          ?.chairpersonId !==
                          iM?.SubmittedChairpersonReview?.ChairpersonReview
                            ?.chairpersonId
                          ? "Other chairperson's review exists"
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

        <ToggleIM class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
          Edit IM
        </ToggleIM>

        {iM?.owner?.userId === user?.id && (
          <>
            {iM?.SubmittedPeerReview?.PeerReview && (
              <PeerSuggestionView
                peerReview={iM?.SubmittedPeerReview?.PeerReview}
              />
            )}
            {iM?.SubmittedChairpersonReview?.ChairpersonReview && (
              <ChairpersonSuggestionView
                chairpersonReview={
                  iM?.SubmittedChairpersonReview?.ChairpersonReview
                }
              />
            )}
            {iM?.SubmittedCoordinatorReview?.CoordinatorReview && (
              <CoordinatorSuggestionView
                coordinatorReview={
                  iM?.SubmittedCoordinatorReview?.CoordinatorReview
                }
              />
            )}
          </>
        )}

        {/* TODO change pdf url into dynamic */}
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
