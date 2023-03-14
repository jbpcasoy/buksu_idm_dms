import Layout from "@/components/layout/Layout";

export default function PeerReview() {
  return (
    <Layout>
      <div className='sm:pt-12'>
        <div className='flex items-center border border-CITLGray-lighter bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='w-full '>
            <div className='px-2 pt-10'>
              <h2 className='text-CITLDarkBlue font-bold text-2xl '>
                Instructional Material Review Form{" "}
                <span className='text-white bg-CITLOrange px-3 py-1 rounded-lg'>
                  Preview
                </span>
              </h2>
              <p className='mb-8 text-sm'>Implementation Phase</p>
            </div>

            <div className=' mt-5 border border-CITLGray-lighter rounded-lg'>
              <label
                for='helper-radio-4'
                className='font-medium text-gray-900 dark:text-gray-300'
              >
                <h3 className=' text-left font-semibold text-lg bg-CITLGray-lighter rounded-tl-md rounded-tr-md text-CITLGray-main py-3 px-5'>
                  The Title
                </h3>
              </label>

              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  1. The title is definite.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  2. The title is relevant to the contents of the instructional
                  material.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
            </div>
            <div className=' mt-5 border border-CITLGray-lighter rounded-lg'>
              <label
                for='helper-radio-4'
                className='font-medium text-gray-900 dark:text-gray-300'
              >
                <h3 className=' text-left font-semibold text-lg bg-CITLGray-lighter rounded-tl-md rounded-tr-md text-CITLGray-main py-3 px-5'>
                  The Preface
                </h3>
              </label>

              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  1. The preface is written by the author/s
                  himself/herself/themselves.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  2. It includes reasons for creating the material.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  3. It states the importance to the users.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  4. It introduces what the material is about.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
            </div>
            <div className=' mt-5 border border-CITLGray-lighter rounded-lg'>
              <label
                for='helper-radio-4'
                className='font-medium text-gray-900 dark:text-gray-300'
              >
                <h3 className=' text-left font-semibold text-lg bg-CITLGray-lighter rounded-tl-md rounded-tr-md text-CITLGray-main py-3 px-5'>
                  The Introduction in Every Chapter/Unit
                </h3>
              </label>

              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  1. The introduction in every chapter/unit gives the overview
                  of the coverage.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
            </div>
            <div className=' mt-5 border border-CITLGray-lighter rounded-lg'>
              <label
                for='helper-radio-4'
                className='font-medium text-gray-900 dark:text-gray-300'
              >
                <h3 className=' text-left font-semibold text-lg bg-CITLGray-lighter rounded-tl-md rounded-tr-md text-CITLGray-main py-3 px-5'>
                  The Learning Outcomes
                </h3>
              </label>

              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  1. The content, activities, and assessment and aligned with
                  the LOs.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  2. The learning outcomes (COs and SLOs) are addressed in the
                  instructional material.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  3. The learning outcomes are appropriate for the topics
                  covered.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
            </div>
            <div className=' mt-5 border border-CITLGray-lighter rounded-lg'>
              <label
                for='helper-radio-4'
                className='font-medium text-gray-900 dark:text-gray-300'
              >
                <h3 className=' text-left font-semibold text-lg bg-CITLGray-lighter rounded-tl-md rounded-tr-md text-CITLGray-main py-3 px-5'>
                  The Discussion/Presentation of the Concepts
                </h3>
              </label>

              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  1. The concepts are explicitly discussed.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  2. All terms are understandable to the learners.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  3. The content is free from gender-bias.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
            </div>
            <div className=' mt-5 border border-CITLGray-lighter rounded-lg'>
              <label
                for='helper-radio-4'
                className='font-medium text-gray-900 dark:text-gray-300'
              >
                <h3 className=' text-left font-semibold text-lg bg-CITLGray-lighter rounded-tl-md rounded-tr-md text-CITLGray-main py-3 px-5'>
                  The Examples for the Application of the Concepts
                </h3>
              </label>

              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  1. Examples are provided to illustrate the concepts discussed.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  2. The examples are consistent with the concepts discussed.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  3. They relate to real-world situations.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  4. They motivate students to participate in the learning
                  process.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  5. They illustrate attainment of learning outcomes.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
            </div>

            <div className=' mt-5 border border-CITLGray-lighter rounded-lg'>
              <label
                for='helper-radio-4'
                className='font-medium text-gray-900 dark:text-gray-300'
              >
                <h3 className=' text-left font-semibold text-lg bg-CITLGray-lighter rounded-tl-md rounded-tr-md text-CITLGray-main py-3 px-5'>
                  The Discussion/Presentation of the Concepts
                </h3>
              </label>

              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  1. The concepts are explicitly discussed.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  2. All terms are understandable to the learners.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  3. The content is free from gender-bias.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
            </div>
            <div className=' mt-5 border border-CITLGray-lighter rounded-lg'>
              <label
                for='helper-radio-4'
                className='font-medium text-gray-900 dark:text-gray-300'
              >
                <h3 className=' text-left font-semibold text-lg bg-CITLGray-lighter rounded-tl-md rounded-tr-md text-CITLGray-main py-3 px-5'>
                  The Exercises/Activities
                </h3>
              </label>

              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  1. The exercises/activities are appropriate for demonstrating
                  the learned concepts.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  2. There are provisions that encourage students to work
                  collaboratively.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  3. The exercises/activities develop creativity, critical
                  thinking, and problem-solving skills of the students.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  4. They encourage students to communicate effectively.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  5. They are prepared within the capability of the students.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
            </div>

            <div className=' mt-5 border border-CITLGray-lighter rounded-lg'>
              <label
                for='helper-radio-4'
                className='font-medium text-gray-900 dark:text-gray-300'
              >
                <h3 className=' text-left font-semibold text-lg bg-CITLGray-lighter rounded-tl-md rounded-tr-md text-CITLGray-main py-3 px-5'>
                  The Rubrics (if applicable)
                </h3>
              </label>

              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  1. The rubrics are appropriate for the assessment.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  2. The rubrics describe the criteria through which the
                  learners&apos; outputs are rated.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
              <div>
                <p
                  id='helper-radio-text-4'
                  className='text-sm  text-left font-semibold text-CITLGray-main py-3 px-5'
                >
                  3. The rubrics show the levels of achievements of quality of
                  the assessment outputs.
                </p>

                <ul className='items-left text-sm font-medium border px-5 mx-5 mb-5 rounded-lg sm:flex '>
                  <li className='w-full border-b border-CITLGray-200 sm:border-b-0 sm:border-r '>
                    <div className='flex items-center pl-3'>
                      <input
                        disabled
                        id='horizontal-list-radio-license'
                        type='radio'
                        value='VM'
                        name='list-radio'
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
                        id='horizontal-list-radio-id'
                        type='radio'
                        value='M'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-millitary'
                        type='radio'
                        value='JE'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NM'
                        name='list-radio'
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
                        disabled
                        id='horizontal-list-radio-passport'
                        type='radio'
                        value='NAA'
                        name='list-radio'
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
            </div>

            <div className='flex mt-4'>
              <div className='flex-auto flex flex-row-reverse justify-between'>
                <button className='text-base  ml-2  focus:outline-none flex justify-center px-4 py-2 rounded font-medium cursor-pointer shadow-xl hover:bg-CITLOrange disabled:bg-CITLGray-lighter disabled:border disabled:border-CITLGray-main disabled:text-CITLGray-main bg-CITLDarkBlue text-CITLWhite  '>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
