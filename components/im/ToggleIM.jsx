import frontendUpdateIM from "@/services/frontend/im/frontendUpdateIM";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ToggleIM({ iM, onUpdate }) {
  const formik = useFormik({
    initialValues: {
      title: iM.title,
      authors: iM.authors,
      type: iM.type,
    },
    // validateOnMount: true,
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required."),
      authors: Yup.string().required("Authors is required."),
      type: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      const { title, authors, type } = values;

      return frontendUpdateIM(iM.id, { title, type, authors }).finally(() => {
        onUpdate();
      });
    },
  });

  // useEffect(() => {
  //   console.log({ iM });
  //   formik.setValues({ title: iM.title, authors: iM.authors, type: iM.type });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [iM]);

  return (
    <div className=''>
      <div
        id='im-update-modal'
        tabIndex='-1'
        aria-hidden='true'
        className='fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full'
      >
        <div className='relative w-full h-full max-w-md md:h-auto'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            {/* <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="im-update-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
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
              <span className="sr-only">Close modal</span>
            </button> */}
            <div className='px-6 py-6 lg:px-8'>
              <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white '>
                Edit your IM
              </h3>

              <form
                className='space-y-6'
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor='title'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Title
                  </label>
                  <input
                    id='title'
                    type='text'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLDarkBlue focus:border-CITLDarkBlue block w-full p-2.5 '
                    placeholder='Title'
                    {...formik.getFieldProps("title")}
                    required
                  />
                  <p className='text-sm text-red-600'>
                    {formik.touched.title && formik.errors.title}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor='author'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Author
                  </label>
                  <input
                    id='authors'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-CITLDarkBlue focus:border-CITLDarkBlue block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    placeholder='Authors'
                    {...formik.getFieldProps("authors")}
                    required
                  />
                  <p className='text-sm text-red-600'>
                    {formik.touched.authors && formik.errors.authors}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor='type'
                    className='block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Type
                  </label>
                  <select
                    id='type'
                    className='bg-gray-50 border border-gray-300 text-CITLGray-main text-sm rounded-md focus:ring-CITLDarkBlue focus:border-CITLDarkBlue block w-full p-2.5'
                    {...formik.getFieldProps("type")}
                  >
                    <option value='MODULE'>Module</option>
                    <option value='COURSE_FILE'>Course File</option>
                    <option value='WORKTEXT'>Worktext</option>
                    <option value='TEXTBOOK'>Textbook</option>
                  </select>
                </div>
                {/* <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div> */}
                {/* <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </Link>
                </div> */}
                <button
                  type='submit'
                  disabled={
                    !formik.isValid ||
                    !formik.values.title ||
                    !formik.values.authors ||
                    !formik.values.type
                  }
                  data-modal-hide='im-update-modal'
                  className='w-full text-white bg-CITLDarkBlue hover:bg-transparent border hover:border-CITLDarkBlue hover:text-CITLDarkBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-CITLGray-main'
                >
                  Confirm changes
                </button>
                {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <Link
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
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
