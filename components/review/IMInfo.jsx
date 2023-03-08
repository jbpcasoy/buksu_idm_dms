export default function IMInfo({ title, authors, type, onNext }) {
  return (
    <div>
      <div className='grid gap-6 mb-6'>
        <div>
          <label
            className='block mb-1 text-sm font-semibold text-CITLDarkBlue '
            htmlFor='title'
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
            htmlFor='authors'
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
            for='im_type'
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
            onClick={onNext} // continue
            className='text-base  ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:bg-CITLOrange bg-CITLDarkBlue text-CITLWhite  '
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
