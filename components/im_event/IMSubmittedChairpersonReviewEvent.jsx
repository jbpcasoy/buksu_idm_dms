import moment from "moment";

export default function IMSubmittedChairpersonReviewEvent({ iMEvent }) {
  return (
    <li className='mb-10 ml-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-CITLGray-light rounded-full -left-3 ring-8 ring-CITLGray-light dark:ring-gray-900 dark:bg-blue-900'>
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
      <h3 className='mb-1 text-md font-semibold text-gray-900 dark:text-white'>
        Chairperson Review
      </h3>
      <time className='block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500'>
        {moment(iMEvent.createdAt).format("LLL")}
      </time>
      <p className='mb-4 text-sm font-normal text-gray-500 dark:text-gray-400'>
        IM{" "}
        <span className='font-semibold text-green-400'>
          &quot;{iMEvent?.SubmittedChairpersonReview?.IM?.title}&quot;
        </span>{" "}
        was reviewed by{" "}
        <span className='font-semibold text-CITLDarkBlue'>
          {
            iMEvent?.SubmittedChairpersonReview?.ChairpersonReview?.Chairperson
              ?.Faculty?.user?.name
          }
        </span>
        .
      </p>
    </li>
  );
}
