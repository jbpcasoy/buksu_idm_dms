import useUser from "@/hooks/useUser";
import moment from "moment/moment";
import { useEffect, useState } from "react";

export default function IM({
  showStatus = false,
  showReviewSuggestion = false,
  authors,
  showOwner = false,
  showSerialNumber = false,
  showReviewedAs = false,
  id,
  serialNumber,
  title,
  status,
  originalFileName,
  fileName,
  owner,
  createdAt,
  updatedAt,
  onView,
  peerReviewed = false,
  chairpersonReviewed = false,
  coordinatorReviewed = false,
  bottomBorder = true,
  im,
  type,
}) {
  const { user, userLoading } = useUser();
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
      } text-sm text-CITLGray-main text-left p-4 `}
    >
      {/* <td className='px-6 py-4 truncate '>{serialNumber}</td> */}

      <td className='px-6 py-4 '>{title}</td>

      <td className='px-6 py-4 '>{type}</td>

      {showOwner && <td className='px-6 py-4 '>{owner}</td>}
      <td className='px-6 py-4 '>{authors}</td>

      {showStatus && <td className='px-6 py-4 '>{status}</td>}
      {showReviewSuggestion && (
        <td className='px-4 py-4 space-x-1'>
          <div className='inline-flex  space-x-1'>
            {peerReviewed && (
              <span
                className='inline-flex items-center bg-purple-400 text-purple-800 text-xs px-3 py-1 rounded-full'
                title='Reviewed, No Suggestions'
              >
                Peer
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
                <svg
                  fill='none'
                  class='w-3 h-3  text-purple-800 rounded-full ml-1'
                  stroke='currentColor'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
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
                title='Reviewed with Suggestions'
              >
                Chairperson
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
                <svg
                  fill='none'
                  class='w-3 h-3  text-orange-500 rounded-full ml-1'
                  stroke='currentColor'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
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
                title='Reviewed with Suggestions'
              >
                Coordinator{" "}
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
                <svg
                  fill='none'
                  class='w-3 h-3  text-green-900 rounded-full ml-1'
                  stroke='currentColor'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
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

      {showReviewedAs && <td className='px-6 py-4 '>{reviewedAs}</td>}

      <td className='px-6 py-4 '>
        {moment(createdAt).format("M/D/YYYY, h:mm A")}
      </td>

      {/* <td className='px-6 py-4 '>
        {moment(updatedAt).format("M/D/YYYY, h:mm A")}
      </td> */}
      {showSerialNumber && (
        <td className='px-6 py-4 truncate '>{serialNumber}</td>
      )}

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
