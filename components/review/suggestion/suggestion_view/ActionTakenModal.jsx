import { initModals } from "flowbite";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

export default function ActionTakenModal({
  suggestionItemId,
  actionTaken,
  value,
  pageNumber,
  remarks,
  onSubmit,
}) {
  const formik = useFormik({
    initialValues: {
      actionTaken: "",
    },
    enableReinitialize: true,
    validateOnMount: true,
    validateOnChange: true,
    validationSchema: Yup.object({
      actionTaken: Yup.string(),
    }),
    onSubmit: (values) => {
      return onSubmit(values).then(() => {
        formik.resetForm();
      });
    },
  });

  useEffect(() => {
    initModals();
  });

  return (
    <div className=''>
      <button
        onClick={() => {
          formik.setValues({
            actionTaken: actionTaken ?? "",
          });
        }}
        data-modal-target={`update-suggestion-modal-${suggestionItemId}`}
        data-modal-toggle={`update-suggestion-modal-${suggestionItemId}`}
        className='block text-sm font-medium text-center px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100'
        type='button'
      >
        Update
      </button>

      <div
        id={`update-suggestion-modal-${suggestionItemId}`}
        tabindex='-1'
        aria-hidden='true'
        className='fixed top-0 left-0 right-0 bottom-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen md:h-full'
      >
        <div className='relative w-full h-full max-w-md md:h-auto'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='px-6 py-6 lg:px-8'>
              {/* <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white '>
                Add a Suggestion
              </h3> */}
              <div className='flex items-start justify-between mb-4  rounded-t'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Update Action Taken
                </h3>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-hide={`update-suggestion-modal-${suggestionItemId}`}
                >
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>

              <form
                className='space-y-6'
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <p>{value}</p>
                  <p>{remarks}</p>
                  <p>{pageNumber}</p>
                  <textarea
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${
                      formik.touched.actionTaken && formik.errors.actionTaken
                        ? "border border-red-600 focus:ring-red-500 focus:border-red-500"
                        : undefined
                    }`}
                    placeholder='Action Taken'
                    rows={5}
                    {...formik.getFieldProps("actionTaken")}
                  />
                  <p className='text-sm text-red-600'>
                    {formik.touched.actionTaken && formik.errors.actionTaken}
                  </p>
                </div>
                <button
                  type='submit'
                  disabled={!formik.isValid}
                  data-modal-hide={`update-suggestion-modal-${suggestionItemId}`}
                  className='mt-2 w-full text-white enabled:bg-blue-700 enabled:hover:bg-blue-800 disabled:bg-CITLGray-main  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
                >
                  Confirm changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
