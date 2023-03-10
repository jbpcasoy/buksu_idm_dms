import moment from "moment/moment";

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
  type,
}) {
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

      <td className='px-6 py-4 '>
        <div>
          {status}
          <br />
          {peerReviewed && (
            <span className='bg-green-600 text-white px-3 rounded-lg'>
              Peer
            </span>
          )}
          {!peerReviewed && (
            <span className='bg-red-600 text-white px-3 rounded-lg'>Peer</span>
          )}
          <br />
          {chairpersonReviewed && (
            <span className='bg-green-600 text-white px-3 rounded-lg'>
              Chairperson
            </span>
          )}
          {!chairpersonReviewed && (
            <span className='bg-red-600 text-white px-3 rounded-lg'>
              Chairperson
            </span>
          )}
          <br />
          {coordinatorReviewed && (
            <span className='bg-green-600 text-white px-3 rounded-lg'>
              Coordinator
            </span>
          )}
          {!coordinatorReviewed && (
            <span className='bg-red-600 text-white px-3 rounded-lg'>
              Coordinator
            </span>
          )}
        </div>
      </td>

      <td className='px-6 py-4 '>
        {moment(createdAt).format("M/D/YYYY, h:mm A")}
      </td>

      {/* <td className='px-6 py-4 '>
        {moment(updatedAt).format("M/D/YYYY, h:mm A")}
      </td> */}

      <td className='bg-white  font-medium text-slate-400  items-center justify-center px-6 py-4 '>
        <button
          onClick={onView}
          className=' px-5 py-2.5 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-lg  hover:bg-CITLDarkBlue shadow-xl  mr-3'
        >
          View
        </button>
      </td>
    </tr>
  );
}
