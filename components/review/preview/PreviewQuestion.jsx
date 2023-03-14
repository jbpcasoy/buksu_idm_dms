export default function PreviewQuestion({
  question,
  answer,
  onSelect,
  loading,
}) {
  return (
    <div>
      <p
        id='helper-radio-text-4'
        className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
      >
        {loading ? "Loading..." : question.label}
      </p>

      <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
        <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
          <div className='flex items-center pl-3'>
            <input
              onChange={() => onSelect("VM")}
              disabled={loading}
              name={question.id}
              checked={answer === "VM"}
              id={question.id + "-vm"}
              type='radio'
              className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main  bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
            />
            <label
              for={question.id + "-vm"}
              className='w-full py-3 ml-2 text-sm font-medium text-CITLGray-main '
            >
              Very Much
            </label>
          </div>
        </li>
        <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r '>
          <div className='flex items-center pl-3'>
            <input
              onChange={() => onSelect("M")}
              disabled={loading}
              name={question.id}
              checked={answer === "M"}
              type='radio'
              id={question.id + "-m"}
              value='M'
              className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
            />
            <label
              for={question.id + "-m"}
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
              name={question.id}
              onChange={() => onSelect("JE")}
              checked={answer === "JE"}
              type='radio'
              id={question.id + "-je"}
              value='JE'
              className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
            />
            <label
              for={question.id + "-je"}
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
              name={question.id}
              onChange={() => onSelect("NM")}
              checked={answer === "NM"}
              type='radio'
              id={question.id + "-nm"}
              value='NM'
              className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
            />
            <label
              for={question.id + "-nm"}
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
              name={question.id}
              type='radio'
              onChange={() => onSelect("NAA")}
              checked={answer === "NAA"}
              id={question.id + "-naa"}
              value='NAA'
              className='w-4 h-4 text-CITLDarkBlue disabled:text-CITLGray-main bg-CITLGray-light border-CITLDarkBlue focus:ring-CITLDarkBlue'
            />
            <label
              for={question.id + "-naa"}
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
