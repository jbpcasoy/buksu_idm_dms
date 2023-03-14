export default function PreviewQuestion({ question }) {
  return (
    <div>
      <p
        id='helper-radio-text-4'
        className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
      >
        {question.label}
      </p>

      <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
        <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
          <div className='flex items-center pl-3'>
            <input
              name={question.id}
              type='radio'
              className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main  bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
            />
            <label
              for='horizontal-list-radio-license'
              className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
            >
              Very Much
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r '>
          <div className='flex items-center pl-3'>
            <input
              name={question.id}
              type='radio'
              value='M'
              className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
            />
            <label
              for='horizontal-list-radio-id'
              className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
            >
              Much
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r '>
          <div className='flex items-center pl-3'>
            <input
              name={question.id}
              type='radio'
              value='JE'
              className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
            />
            <label
              for='horizontal-list-radio-millitary'
              className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
            >
              Just Enough
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r'>
          <div className='flex items-center pl-3'>
            <input
              name={question.id}
              type='radio'
              value='NM'
              className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
            />
            <label
              for='horizontal-list-radio-passport'
              className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main'
            >
              Not Much
            </label>
          </div>
        </li>
        <li className='w-full '>
          <div className='flex items-center pl-3'>
            <input
              name={question.id}
              type='radio'
              value='NAA'
              className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
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
  );
}
