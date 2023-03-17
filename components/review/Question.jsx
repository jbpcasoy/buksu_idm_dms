export default function Question({
  loading,
  answer,
  handleSelect,
  title,
  question,
  onNext,
  onPrevious,
  onSubmit,
  disableNext = false,
  disablePrevious = false,
  disableSubmit = true,
  handleRespond,
}) {
  console.log({ answer });
  return (
    <div>
      <div className=' mt-5 border border-CITLOrange rounded-lg py-2 px-3'>
        <label
          htmlFor='helper-radio-4'
          className='font-medium text-gray-900 dark:text-gray-300'
        >
          <h3 className=' text-center font-semibold text-lg text-CITLGray-main py-3'>
            {loading ? "Loading..." : title}
          </h3>
        </label>

        <div>
          <p
            id='helper-radio-text-4'
            className='text-sm  text-center font-normal text-CITLGray-main py-3'
          >
            {loading ? "Loading..." : question}
          </p>

          <ul className='items-center w-full text-sm font-medium  bg-CITLGray-lighter border  rounded-lg sm:flex '>
            <li className='w-full border-b border-CITLGray- sm:border-b-0 sm:border-r '>
              <div className='flex items-center pl-3'>
                <input
                  disabled={loading}
                  id='vm'
                  type='radio'
                  value='VM'
                  checked={answer === "VM" && !loading}
                  onChange={handleSelect}
                  name='list-radio'
                  className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main  bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                />
                <label
                  htmlFor='vm'
                  className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
                >
                  Very Much
                </label>
              </div>
            </li>
            <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r '>
              <div className='flex items-center pl-3'>
                <input
                  disabled={loading}
                  id='m'
                  type='radio'
                  value='M'
                  checked={answer === "M" && !loading}
                  onChange={handleSelect}
                  name='list-radio'
                  className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                />
                <label
                  htmlFor='m'
                  className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                >
                  Much
                </label>
              </div>
            </li>
            <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r '>
              <div className='flex items-center pl-3'>
                <input
                  disabled={loading}
                  id='je'
                  type='radio'
                  value='JE'
                  checked={answer === "JE" && !loading}
                  onChange={handleSelect}
                  name='list-radio'
                  className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                />
                <label
                  htmlFor='je'
                  className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                >
                  Just Enough
                </label>
              </div>
            </li>
            <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r'>
              <div className='flex items-center pl-3'>
                <input
                  disabled={loading}
                  id='nm'
                  type='radio'
                  checked={answer === "NM" && !loading}
                  onChange={handleSelect}
                  value='NM'
                  name='list-radio'
                  className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                />
                <label
                  htmlFor='nm'
                  className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                >
                  Not Much
                </label>
              </div>
            </li>
            <li className='w-full '>
              <div className='flex items-center pl-3'>
                <input
                  disabled={loading}
                  checked={answer === "NAA" && !loading}
                  onChange={handleSelect}
                  id='naa'
                  type='radio'
                  value='NAA'
                  name='list-radio'
                  className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
                />
                <label
                  htmlFor='naa'
                  className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
                >
                  Not at All
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex mt-4'>
        <div className='flex-auto flex flex-row-reverse justify-between'>
          {!disableNext && (
            <button
              disabled={!answer || loading}
              onClick={() => {
                handleRespond().then(() => onNext());
              }}
              className='group relative inline-flex items-center overflow-hidden rounded bg-CITLDarkBlue px-8 py-3 text-white focus:outline-none focus:ring active:bg-CITLDarkBlue disabled:bg-CITLGray-lighter disabled:border disabled:border-CITLGray-main disabled:text-CITLGray-main'
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
          )}
          {!disableSubmit && (
            <button
              disabled={loading}
              onClick={() => {
                handleRespond().then(() => onSubmit());
              }}
              className='text-base  ml-2 hover:scale-110 disabled:hover:scale- focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:bg-red-500 disabled:bg-CITLGray-lighter disabled:border disabled:border-CITLGray-main disabled:text-CITLGray-main bg-red-700 text-CITLWhite  '
            >
              Submit
            </button>
          )}
          {!disablePrevious && (
            <button
              onClick={onPrevious}
              disabled={loading}
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
          )}
        </div>
      </div>
    </div>
  );
}
