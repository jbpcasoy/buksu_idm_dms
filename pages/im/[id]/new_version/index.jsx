import Layout from "@/components/layout/Layout";
import ChairpersonSuggestionView from "@/components/review/suggestion/suggestion_view/ChairpersonSuggestionView";
import CoordinatorSuggestionView from "@/components/review/suggestion/suggestion_view/CoordinatorSuggestionView";
import IMDCoordinatorSuggestionView from "@/components/review/suggestion/suggestion_view/IMDCoordinatorSuggestionView";
import PeerSuggestionView from "@/components/review/suggestion/suggestion_view/PeerSuggestionView";
import UserContext from "@/contexts/UserContext";
import useIM from "@/hooks/useIM";
import frontendCreateActiveFile from "@/services/frontend/active_file/frontendCreateActiveFile";
import frontendUpdateActiveFile from "@/services/frontend/active_file/frontendUpdateIMFile";
import frontendCreateFile from "@/services/frontend/file/frontendCreateFile";
import uploadIMFile from "@/services/frontend/im/upload/uploadIMFile";
import { initDropdowns, initModals } from "flowbite";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useContext, useEffect, useState } from "react";

export default function ViewIM() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { iM, iMError, iMLoading, refreshIM } = useIM(router?.query?.id);
  const [file, setFile] = useState();
  const [filePreviewUrl, setFilePreviewUrl] = useState();
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();

  async function handleSubmit() {
    try {
      const createdFile = await frontendCreateFile({
        iMId: iM.id,
        originalFileName: file.name,
      });
      await uploadIMFile({ file, fileId: createdFile.id });
      await frontendUpdateActiveFile(iM?.ActiveFile?.id, {
        fileId: createdFile.id,
      }).catch((err) => {
        return frontendCreateActiveFile({
          iMId: iM.id,
          fileId: createdFile.id,
        });
      });
      enqueueSnackbar({
        message: "New version uploaded successfully",
        variant: "success",
      });
      router.push(`/im/${router.query.id}`);
    } catch (err) {
      enqueueSnackbar({
        message: "Failed to upload new version",
        variant: "error",
      });
    }
  }

  useEffect(() => {
    initDropdowns();
    initModals();
  });

  useEffect(() => {
    if (!file) {
      setFilePreviewUrl(null);
      return;
    }
    console.log({ file });
    const url = URL.createObjectURL(file);
    setFilePreviewUrl(url);
  }, [file]);

  function handleDrop(e) {
    e.preventDefault();
    console.log({ e });
    const file = e.dataTransfer.files[0];
    setFile(file);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

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
                  className='w-8 h-8 rounded-full sm:h-8 object-center object-cover'
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

            {iM?.IMDCoordinatorSuggestion
              ?.SubmittedIMDCoordinatorSuggestion && (
              <IMDCoordinatorSuggestionView
                IMDCoordinatorReview={iM?.IMDCoordinatorSuggestion}
              />
            )}
          </>
        )}

        {!filePreviewUrl && (
          <div className='flex items-center justify-center w-full mt-6 mb-6'>
            <label
              htmlFor='dropzone-file'
              className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent  dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <svg
                  aria-hidden='true'
                  className='w-10 h-10 mb-3 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                  ></path>
                </svg>
                <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                  <span className='font-semibold flex justify-center'>
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  PDF files only
                </p>
              </div>
              <input
                id='dropzone-file'
                type='file'
                multiple={false}
                className='hidden'
                accept='application/pdf'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
        )}

        <div className='text-right'>
          {filePreviewUrl && (
            <>
              <iframe
                src={filePreviewUrl}
                className='w-full h-screen mt-6 mb-6'
              />
              <button
                type='button'
                // disabled={formik.isSubmitting}
                className='mr-4 text-CITLDarkBlue  bg-transparent border border-CITLDarkBlue hover:text-CITLWhite hover:bg-CITLDarkBlue font-medium rounded-md text-sm sm:w-auto px-5 py-3 text-center disabled:bg-CITLGray-main'
                onClick={() => {
                  setFile(null);
                }}
              >
                Replace File
              </button>
            </>
          )}

          <button
            // disabled={formik.isSubmitting}
            onClick={handleSubmit}
            className='group relative inline-flex items-center overflow-hidden rounded-md bg-CITLOrange px-8 py-3 text-CITLDarkBlue '
          >
            <span className='absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4'>
              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </span>

            <span className='text-sm font-medium transition-all group-hover:mr-4'>
              Submit
            </span>
          </button>
        </div>
      </div>
    </Layout>
  );
}
