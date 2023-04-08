import moment from "moment";

export default function IMNewVersionEvent({ iMEvent }) {
  return (
    <li className='mb-10 ml-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-CITLGray-light rounded-full -left-3 ring-8 ring-CITLGray-light'>
        <svg
          fill='currentColor'
          className='w-8 h-8 text-CITLOrange dark:text-blue-300'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            clip-rule='evenodd'
            fill-rule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
          ></path>
        </svg>
      </span>
      <h3 className='flex items-center mb-1 text-md font-semibold text-gray-900 dark:text-white'>
        New Version Uploaded
        {/* <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>
            Latest
        </span> */}
      </h3>
      <time className='block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500'>
        {moment(iMEvent.createdAt).format("LLL")}
      </time>
      <p className='mb-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
        New version was uploaded for{" "}
        <span className='font-semibold text-green-400'>
          &quot;{iMEvent?.File?.originalFileName}&quot;
        </span>{" "}
        | IM: {iMEvent?.File?.iM?.title}.
      </p>

      <a
        href={`/im/${iMEvent?.File?.iM?.id}/versions/${iMEvent?.File?.id}`}
        className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
      >
        <svg
          className='w-5 h-5 mr-2'
          fill='none'
          stroke='currentColor'
          stroke-width='1.5'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
          ></path>
        </svg>{" "}
        View Version
      </a>
    </li>
  );
}
