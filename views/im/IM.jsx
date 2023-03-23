import useUser from "@/hooks/useUser";
import moment from "moment/moment";
import { useEffect, useState } from "react";

export default function IM({
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
      reviewedAsTemp.push("Peer");
    }
    if (
      user.id ===
      im.SubmittedCoordinatorReview?.CoordinatorReview?.Coordinator?.Faculty
        ?.userId
    ) {
      reviewedAsTemp.push("Coordinator");
    }
    if (
      user.id ===
      im.SubmittedChairpersonReview?.ChairpersonReview?.Chairperson?.Faculty
        ?.userId
    ) {
      reviewedAsTemp.push("Chairperson");
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

      <td className='px-6 py-4 '>{owner}</td>

      <td className='px-6 py-4 '>{status}</td>
      <td className='px-4 py-4 flex gap-1 m-2 align-middle'>
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

      {/* ==REMOVED THIS ALREADY BC IT DOESNT MAKE ANY SENSE, THE AUTHOR CANNOT REVIEWED ON THEIR OWN, THEY ARE NOT THE CHAIR OR COOR. EITHER==

      <td className='px-6 py-4 '>{reviewedAs}</td> */}

      <td className='px-6 py-4 '>
        {moment(createdAt).format("M/D/YYYY, h:mm A")}
      </td>

      {/* <td className='px-6 py-4 '>
        {moment(updatedAt).format("M/D/YYYY, h:mm A")}
      </td> */}

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
