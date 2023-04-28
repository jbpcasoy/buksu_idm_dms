import { initModals } from "flowbite";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

export default function ContactModal({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      value: "",
      pageNumber: "",
      remarks: "",
    },
    validateOnMount: true,
    validateOnChange: true,
    validationSchema: Yup.object({
      value: Yup.string().required("Suggestion is required"),
      pageNumber: Yup.number()
        .integer("Page Number must be an integer")
        .required("Page number is required"),
      remarks: Yup.string(),
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
    <div
      id='alert-2'
      className='inline-flex items-center p-4 mb-4 text-orange-400 rounded-lg bg-orange-100 dark:bg-gray-800 dark:text-red-400'
      role='alert'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        className='flex-shrink-0'
        height='32'
        viewBox='0 0 24 24'
        fill='none'
      >
        <path
          d='M12 9v5M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12v-.01Z'
          stroke='#FF8A65'
          strokeWidth='1.5'
          strokeLinecap='round'
          stroke-Linejoin='round'
        ></path>
        <path
          d='M11.995 17h.009'
          stroke='#FF8A65'
          strokeWidth='2'
          strokeLinecap='round'
          stroke-Linejoin='round'
        ></path>
      </svg>

      <div className='ml-3 text-sm font-medium'>
        Your account is not yet added as faculty. Please{" "}
        <button
          href='#'
          type='button'
          data-modal-target='crypto-modal'
          data-modal-toggle='crypto-modal'
          className='font-medium underline hover:no-underline'
        >
          contact
        </button>{" "}
        the administrator for activation.
      </div>
      <div
        id='crypto-modal'
        tabindex='-1'
        aria-hidden='true'
        class='fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div class='relative w-full max-w-md max-h-full'>
          <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <button
              type='button'
              class='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
              data-modal-hide='crypto-modal'
            >
              <svg
                aria-hidden='true'
                class='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span class='sr-only'>Close modal</span>
            </button>

            <div class='px-6 py-4 border-b rounded-t dark:border-gray-600'>
              <h3 class='text-base font-semibold text-left text-gray-900 lg:text-xl dark:text-white'>
                Contact us
              </h3>
            </div>

            <div class='p-6'>
              <ul class='my-4 space-y-3'>
                <li>
                  <a
                    href='https://m.me/110429694111266'
                    class='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
                  >
                    <img
                      src='/IMAGES/messenger-logo.svg'
                      className='h-6'
                      alt=''
                    />

                    <span class='flex-1 ml-3 whitespace-nowrap'>Messenger</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://buksu.edu.ph/'
                    class='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z'
                        fill='#006aff'
                      ></path>
                      <path
                        d='M8.998 21.75h-1c-.41 0-.75-.34-.75-.75s.32-.74.73-.75a29.49 29.49 0 0 1 0-16.5.745.745 0 0 1-.73-.75c0-.41.34-.75.75-.75h1c.24 0 .47.12.61.31.14.2.18.45.1.68a27.948 27.948 0 0 0 0 17.53c.08.23.04.48-.1.68-.14.18-.37.3-.61.3ZM14.998 21.75a.745.745 0 0 1-.71-.99 27.948 27.948 0 0 0 0-17.53.749.749 0 1 1 1.42-.48 29.318 29.318 0 0 1 0 18.47c-.1.33-.4.53-.71.53Z'
                        fill='#006aff'
                      ></path>
                      <path
                        d='M12 17.2c-2.79 0-5.57-.39-8.25-1.18-.01.4-.34.73-.75.73s-.75-.34-.75-.75v-1c0-.24.12-.47.31-.61.2-.14.45-.18.68-.1a27.948 27.948 0 0 0 17.53 0 .75.75 0 0 1 .68.1c.2.14.31.37.31.61v1c0 .41-.34.75-.75.75s-.74-.32-.75-.73c-2.69.79-5.47 1.18-8.26 1.18ZM21 9.75c-.08 0-.16-.01-.24-.04a27.948 27.948 0 0 0-17.53 0c-.4.13-.82-.08-.95-.47-.12-.4.09-.82.48-.95a29.318 29.318 0 0 1 18.47 0c.39.13.61.56.47.95a.73.73 0 0 1-.7.51Z'
                        fill='#006aff'
                      ></path>
                    </svg>

                    <span class='flex-1 ml-3 whitespace-nowrap'>Website</span>
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        fill='#006aff'
                        d='M11.05 14.95L9.2 16.8c-.39.39-1.01.39-1.41.01-.11-.11-.22-.21-.33-.32a28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.1.1.21.2.31.3.4.39.41 1.03.01 1.43zM21.97 18.33a2.54 2.54 0 01-.25 1.09c-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z'
                      ></path>
                    </svg>
                    <span class='flex-1 ml-3 whitespace-nowrap'>Local 139</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
