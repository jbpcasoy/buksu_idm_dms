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
          for='helper-radio-4'
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
                  for='vm'
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
                  for='m'
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
                  for='je'
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
                  for='nm'
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
                  for='naa'
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
              className='text-base  ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:bg-CITLOrange bg-CITLDarkBlue text-CITLWhite  disabled:bg-CITLGray-lighter disabled:border disabled:border-CITLGray-main disabled:text-CITLGray-main'
            >
              Next
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
              className='text-base  flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl enabled:hover:border-CITLOrange  bg-gray-100 disabled:bg-CITLGray-lighter  text-CITLGray-main  border  border-CITLGray-main'
            >
              Previous
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
