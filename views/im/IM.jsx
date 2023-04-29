import UserContext from "@/contexts/UserContext";
import moment from "moment/moment";
import { useContext, useEffect, useState } from "react";

export default function IM({
  showStatus = false,
  showReviewSuggestion = false,
  authors,
  showOwner = false,
  showSerialNumber = false,
  collegeName,
  showReviewedAs = false,
  id,
  departmentName,
  serialNumber,
  title,
  status,
  originalFileName,
  fileName,
  owner,
  showDepartmentName = false,
  date,
  updatedAt,
  onView,
  peerReviewed = false,
  chairpersonReviewed = false,
  coordinatorReviewed = false,
  peerSuggested = false,
  chairpersonSuggested = false,
  coordinatorSuggested = false,
  bottomBorder = true,
  im,
  type,
}) {
  const { user, userLoading } = useContext(UserContext);
  const [reviewedAs, setReviewedAs] = useState("-");
  useEffect(() => {
    if (!user || userLoading) return;
    const reviewedAsTemp = [];
    if (user.id === im.SubmittedPeerReview?.PeerReview?.Faculty?.userId) {
      if (peerReviewed) reviewedAsTemp.push("Peer");
      else reviewedAsTemp.push("Peer (INC)");
    }
    if (
      user.id ===
      im.SubmittedCoordinatorReview?.CoordinatorReview?.Coordinator?.Faculty
        ?.userId
    ) {
      if (coordinatorReviewed) reviewedAsTemp.push("Coordinator");
      else reviewedAsTemp.push("Coordinator (INC)");
    }
    if (
      user.id ===
      im.SubmittedChairpersonReview?.ChairpersonReview?.Chairperson?.Faculty
        ?.userId
    ) {
      if (chairpersonReviewed) reviewedAsTemp.push("Chairperson");
      else reviewedAsTemp.push("Chairperson (INC)");
    }
    setReviewedAs(reviewedAsTemp.join(", "));
  }, [im, user]);

  return (
    <tr
      className={` bg-white ${
        bottomBorder ? "border-b dark:border-CITLGray-light" : ""
      } text-xs font-normal text-CITLGray-main text-left p-4 `}
    >
      <td className='px-6 py-4 w-32'>{title}</td>

      <td className='px-6 py-4 '>{type}</td>

      {showOwner && <td className='px-6 py-4'>{owner}</td>}

      {showDepartmentName && (
        <td className='px-6 py-4'>
          {departmentName} | {collegeName}
        </td>
      )}
      <td className='px-6 py-4 w-32 '>{authors}</td>

      {showStatus && <td className='px-6 py-4 '>{status}</td>}
      {showReviewSuggestion && (
        <td className='px-4 py-4 space-y-1 '>
          <div className='grid grid-flow-row space-y-1 w-32'>
            {peerReviewed && (
              <span
                className='inline-flex items-center bg-purple-400 text-purple-800 text-xs px-3 py-1 rounded-full'
                title={
                  peerSuggested
                    ? "Reviewed with Suggestions"
                    : "Reviewed, No Suggestions"
                }
              >
                Peer
                {peerSuggested && (
                  <svg
                    aria-hidden='true'
                    className='w-3 h-3  text-purple-800 rounded-full ml-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                )}
                {!peerSuggested && (
                  <svg
                    fill='none'
                    className='w-3 h-3  text-purple-800 rounded-full ml-1'
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
            {!peerReviewed && (
              <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
                Peer
              </span>
            )}

            {chairpersonReviewed && (
              <span
                className='inline-flex items-center bg-orange-300 text-orange-500 text-xs px-3  py-1 rounded-2xl'
                title={
                  chairpersonSuggested
                    ? "Reviewed with Suggestions"
                    : "Reviewed, No Suggestions"
                }
              >
                Chairperson
                {chairpersonSuggested && (
                  <svg
                    aria-hidden='true'
                    className='w-3 h-3  text-orange-500 rounded-full ml-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                )}
                {!chairpersonSuggested && (
                  <svg
                    fill='none'
                    className='w-3 h-3  text-orange-500 rounded-full ml-1'
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

            {!chairpersonReviewed && (
              <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
                Chairperson
              </span>
            )}
            {coordinatorReviewed && (
              <span
                className='inline-flex items-center bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'
                title={
                  coordinatorSuggested
                    ? "Reviewed with Suggestions"
                    : "Reviewed, No Suggestions"
                }
              >
                Coordinator{" "}
                {coordinatorSuggested && (
                  <svg
                    aria-hidden='true'
                    className='w-3 h-3  text-green-900 rounded-full ml-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                )}
                {!coordinatorSuggested && (
                  <svg
                    fill='none'
                    className='w-3 h-3  text-green-900 rounded-full ml-1'
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
            {!coordinatorReviewed && (
              <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
                Coordinator
              </span>
            )}
          </div>{" "}
        </td>
      )}

      <td className='px-6 py-4  '>{moment(date).format("M/D/YYYY, h:mm A")}</td>

      {/* <td className='px-6 py-4 '>
        {moment(updatedAt).format("M/D/YYYY, h:mm A")}
      </td> */}
      {showSerialNumber && <td className='px-6 py-4 w-36 '>{serialNumber}</td>}

      <td className='bg-white  font-medium text-slate-400  items-center justify-center px-6 py-4 '>
        <button
          onClick={onView}
          className=' px-5 py-2.5 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-md  hover:bg-transparent hover:text-CITLDarkBlue hover:border-CITLDarkBlue border  shadow-xl  mr-3'
        >
          View
        </button>
      </td>
    </tr>
  );
}
