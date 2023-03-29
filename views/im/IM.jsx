import UserContext from "@/contexts/UserContext";
import moment from "moment/moment";
import { useContext, useEffect, useState } from "react";

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
          {peerReviewed && (
            <span className='bg-purple-400 text-purple-800 text-xs px-3 py-1 rounded-2xl'>
              Peer
            </span>
          )}
          {!peerReviewed && (
            <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
              Peer
            </span>
          )}

          {chairpersonReviewed && (
            <span className='bg-orange-300 text-orange-500 text-xs px-3  py-1 rounded-2xl'>
              Chairperson
            </span>
          )}

          {!chairpersonReviewed && (
            <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
              Chairperson
            </span>
          )}
          {coordinatorReviewed && (
            <span className='bg-green-300 text-green-900 text-xs px-3 py-1 rounded-2xl'>
              Coordinator
            </span>
          )}
          {!coordinatorReviewed && (
            <span className='bg-red-300 text-red-600 text-xs px-3 py-1 rounded-2xl'>
              Coordinator
            </span>
          )}
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
          className=' px-5 py-2.5 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-lg  hover:bg-transparent hover:text-CITLDarkBlue hover:border-CITLDarkBlue border  shadow-xl  mr-3'
        >
          View
        </button>
      </td>
    </tr>
  );
}
