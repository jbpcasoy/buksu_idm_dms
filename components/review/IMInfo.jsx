export default function IMInfo({
  title,
  loading = true,
  authors,
  type,
  onNext,
}) {
  return (
    <div>
      <div className='grid gap-6 mb-6'>
        <div>
          <label
            className='block mb-1 text-sm font-semibold text-CITLDarkBlue '
            htmlhtmlFor='title'
          >
            Title
          </label>
          <input
            value={title}
            disabled
            className='border disabled:text-CITLGray-main border-gray-400 bg-CITLGray-light focus:ring-CITLOrange focus:border-CITLOrange p-2 w-full rounded-md'
            type='text'
            id='title'
          />
        </div>
      </div>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div>
          <label
            className='block mb-1 text-sm font-semibold text-CITLDarkBlue '
            htmlhtmlFor='authors'
          >
            Author/s
          </label>
          <input
            value={authors}
            disabled
            className='border disabled:text-CITLGray-main border-gray-400 bg-CITLGray-light focus:ring-CITLOrange focus:border-CITLOrange p-2 w-full rounded-md'
            type='text'
            id='authors'
            required
          />
        </div>

        <div>
          <label
            htmlFor='im_type'
            className='block mb-1 text-sm font-semibold text-gray-900 dark:text-white'
          >
            Select an IM type
          </label>
          <select
            value={type}
            disabled
            id='im_type'
            className='border disabled:text-CITLGray-main border-gray-400 bg-CITLGray-light focus:ring-CITLOrange focus:border-CITLOrange p-2 w-full rounded-md'
          >
            <option value='MODULE' selected>
              Module
            </option>
            <option value='COURSE_FILE'>Course File</option>
            <option value='WORKTEXT'>Worktext</option>
            <option value='TEXTBOOK'>Textbook</option>
          </select>
        </div>
      </div>

      <div className='flex mt-4'>
        <div className='flex-auto flex flex-row-reverse justify-between'>
          <button
            disabled={loading}
            onClick={onNext}
            // className='text-base  ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl enabled:hover:bg-CITLOrange disabled:bg-CITLGray-lighter disabled:border disabled:border-CITLGray-main disabled:text-CITLGray-main bg-CITLDarkBlue text-CITLWhite'
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
                  strokeLinejoin='round'
                  stroke-width='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </span>

            <span className='text-sm font-medium transition-all group-hover:mr-4'>
              Next
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
