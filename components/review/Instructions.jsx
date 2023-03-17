export default function Instructions({ onNext, onPrevious }) {
  return (
    <div>
      <div className='border border-CITLOrange rounded-lg px-3 py-8'>
        <h3 className=' font-semibold text-lg text-CITLGray-main'>
          To the reviewers:
        </h3>
        <p className='text-sm font-normal text-CITLGray-main'>
          Check the column corresponding to your rating for each item.
        </p>
        <p className='text-sm font-normal text-CITLGray-main'>
          Be guided by the following descriptions.
        </p>

        <ul className='items-center w-full text-sm font-medium   rounded-lg sm:flex  dark:text-CITLDarkBlue mt-2'>
          <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
            <div className='flex items-center pl-3'>
              <input
                disabled
                id='horizontal-list-radio-license'
                type='radio'
                value=''
                name='list-radio'
                className='w-4 h-4 text-CITLDarkBlue border-CITLOrange bg-CITLOrange'
              />
              <label
                htmlFor='horizontal-list-radio-license'
                className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
              >
                Very Much{" "}
              </label>
            </div>
          </li>
          <li className='w-full  border-gray-200 sm:border-b-0  dark:border-gray-600'>
            <div className='flex items-center pl-3'>
              <input
                disabled
                id='horizontal-list-radio-id'
                type='radio'
                value=''
                name='list-radio'
                className='w-4 h-4 text-CITLDarkBlue border-CITLOrange bg-CITLOrange'
              />
              <label
                htmlFor='horizontal-list-radio-id'
                className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
              >
                Much
              </label>
            </div>
          </li>
          <li className='w-full  border-gray-200 sm:border-b-0 dark:border-gray-600'>
            <div className='flex items-center pl-3'>
              <input
                disabled
                id='horizontal-list-radio-millitary'
                type='radio'
                value=''
                name='list-radio'
                className='w-4 h-4text-CITLDarkBlue border-CITLOrange bg-CITLOrange'
              />
              <label
                htmlFor='horizontal-list-radio-millitary'
                className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
              >
                Just Enough
              </label>
            </div>
          </li>
          <li className='w-full sm:border-b-0 dark:border-gray-600'>
            <div className='flex items-center pl-3'>
              <input
                disabled
                id='horizontal-list-radio-passport'
                type='radio'
                value=''
                name='list-radio'
                className='w-4 h-4text-CITLDarkBlue border-CITLOrange bg-CITLOrange'
              />
              <label
                htmlFor='horizontal-list-radio-passport'
                className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
              >
                Not Much
              </label>
            </div>
          </li>
          <li className='w-full dark:border-gray-600'>
            <div className='flex items-center pl-3'>
              <input
                disabled
                id='horizontal-list-radio-passport'
                type='radio'
                value=''
                name='list-radio'
                className='w-4 h-4 text-CITLDarkBlue border-CITLOrange bg-CITLOrange'
              />
              <label
                htmlFor='horizontal-list-radio-passport'
                className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
              >
                Not at All
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className='flex mt-4'>
        <div className='flex-auto flex flex-row-reverse justify-between'>
          <button
            onClick={onNext}
            className='group relative inline-flex items-center overflow-hidden rounded bg-CITLDarkBlue px-8 py-3 text-white focus:outline-none focus:ring active:bg-CITLDarkBlue'
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
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </span>

            <span className='text-sm font-medium transition-all group-hover:mr-4'>
              Next
            </span>
          </button>
          <button
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
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
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
