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
                for='horizontal-list-radio-license'
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
                for='horizontal-list-radio-id'
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
                for='horizontal-list-radio-millitary'
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
                for='horizontal-list-radio-passport'
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
                for='horizontal-list-radio-passport'
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
            className='text-base  ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:bg-CITLOrange bg-CITLDarkBlue text-CITLWhite  '
          >
            Next
          </button>
          <button
            onClick={onPrevious}
            className='text-base  flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:border-CITLOrange hover:text-CITLOrange bg-gray-100  text-CITLGray-main  border  border-CITLGray-main'
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}
