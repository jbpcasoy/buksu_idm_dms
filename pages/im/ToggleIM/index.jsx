import { useEffect, useState } from "react";

export default function ToggleIM({ onSubmit, defaultName }) {
  const [state, setState] = useState({
    name: "",
  });

  useEffect(() => {
    setState((prev) => ({ ...prev, name: defaultName }));
  }, [defaultName]);

  return (
    <div className=''>
      <button
        data-modal-target='authentication-modal'
        data-modal-toggle='authentication-modal'
        class='block text-sm font-medium text-center px-4 py-2.5 text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-CITLDarkBlue hover:text-CITLWhite'
        type='button'
      >
        Edit IM
      </button>

      <div
        id='authentication-modal'
        tabindex='-1'
        aria-hidden='true'
        class='fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full'
      >
        <div class='relative w-full h-full max-w-md md:h-auto'>
          <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            {/* <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button> */}
            <div class='px-6 py-6 lg:px-8'>
              <h3 class='mb-4 text-xl font-medium text-gray-900 dark:text-white '>
                Edit your IM
              </h3>

              <form
                className='space-y-6'
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit(state);
                }}
              >
                <div>
                  <label
                    for='name'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLDarkBlue focus:border-CITLDarkBlue block w-full p-2.5 '
                    placeholder='Name'
                    value={state.name}
                    onChange={(e) =>
                      setState((prev) => {
                        return { ...prev, name: e.target.value };
                      })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    for='author'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Author
                  </label>
                  <input
                    type='author'
                    id='author'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-CITLDarkBlue focus:border-CITLDarkBlue block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    placeholder='Name'
                    required
                  />
                </div>
                <div>
                  <label
                    for='type'
                    className='block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Type
                  </label>
                  <select
                    id='type'
                    className='bg-gray-50 border border-gray-300 text-CITLGray-main text-sm rounded-lg focus:ring-CITLDarkBlue focus:border-CITLDarkBlue block w-full p-2.5'
                  >
                    <option value='MODULE' selected>
                      Module
                    </option>
                    <option value='COURSE_FILE'>Course File</option>
                    <option value='WORKTEXT'>Worktext</option>
                    <option value='TEXTBOOK'>Textbook</option>
                  </select>
                </div>
                {/* <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div> */}
                {/* <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="#"
                    class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </Link>
                </div> */}
                <button
                  type='submit'
                  class='w-full text-white bg-CITLDarkBlue hover:bg-transparent border hover:border-CITLDarkBlue hover:text-CITLDarkBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Confirm changes
                </button>
                {/* <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <Link
                    href="#"
                    class="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </Link>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
