import { useState } from "react";

export default function ConfirmReview({ children, onSubmit, onPrevious }) {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {children}

      <div className='flex mt-4'>
        <div className='flex-auto flex flex-row-reverse justify-between'>
          <button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              onSubmit().finally(() => {
                setLoading(false);
              });
            }}
            className='group relative inline-flex items-center overflow-hidden rounded bg-CITLOrange px-8 py-3 text-CITLDarkBlue focus:outline-none '
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
              Submit Review
            </span>
          </button>
          <button
            disabled={loading}
            onClick={onPrevious}
            className='group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-CITLGray-main focus:outline-none focus:ring active:text-CITLGray-main'
          >
            <span className='absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4'>
              <svg
                className='h-5 w-5 rotate-180'
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

            <span className='text-sm font-medium transition-all group-hover:ml-4'>
              Previous
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
