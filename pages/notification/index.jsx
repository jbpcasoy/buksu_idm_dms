import Layout from "@/components/layout/Layout";
import NotificationItem from "@/components/NotificationItem";
import useNotifications from "@/hooks/notification/useNotifications";
import useUser from "@/hooks/useUser";

export default function Notifications() {
  const { user, userError, useLoading } = useUser();
  const { notifications, notificationsLoading, notificationsError } =
    useNotifications({ limit: 5, page: 1, userId: user?.id });

  return (
    <Layout>
      <div className='border border-CITLGray-lighter rounded-lg'>
        <div className='flex justify-between px-4 py-4 text-xl font-semibold text-left text-gray-700 rounded-t-lg bg-CITLGray-light dark:bg-gray-800 dark:text-white'>
          <div className='pt-2'>Notifications</div>
          <div>
            <select
              id='default'
              className='bg-CITLGray-light w-32 border-CITLGray-lighter border text-CITLGray-main rounded-lg text-sm font-medium'
            >
              <option value='' selected>
                Filter
              </option>
              <option value='SUBMITTED'>Submitted</option>
              <option value='DEPARTMENT_REVIEWED'>Department Reviewed</option>
              <option value='DEPARTMENT_ENDORSED'>Department Endorsed</option>
              <option value='CITL_REVIEWED'>CITL Reviewed</option>
              <option value='CITL_ENDORSED'>CITL Endorsed</option>
            </select>
          </div>
        </div>

        <div className='divide-y divide-gray-100 dark:divide-gray-700'>
          {notifications.map((notification) => (
            <NotificationItem notification={notification} />
          ))}
          {/* <a
            href='#'
            className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='rounded-full w-11 h-11'
                src='/IMAGES/2x2.png'
                alt='Jese image'
              />
              <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800'>
                <svg
                  className='w-3 h-3 text-white'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
                  <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
                </svg>
              </div>
            </div>
            <div className='w-full pl-3'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                New message from{" "}
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Jese Leos
                </span>
                : {`"Hey, what's up? All set for the presentation?"`}
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                a few moments ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='rounded-full w-11 h-11'
                src='/IMAGES/2x2.png'
                alt='Joseph image'
              />
              <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800'>
                <svg
                  className='w-3 h-3 text-white'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z'></path>
                </svg>
              </div>
            </div>
            <div className='w-full pl-3'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Joseph Mcfall
                </span>{" "}
                and{" "}
                <span className='font-medium text-gray-900 dark:text-white'>
                  5 others
                </span>{" "}
                started following you.
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                10 minutes ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='rounded-full w-11 h-11'
                src='/IMAGES/2x2.png'
                alt='Bonnie image'
              />
              <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800'>
                <svg
                  className='w-3 h-3 text-white'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
            </div>
            <div className='w-full pl-3'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Bonnie Green
                </span>{" "}
                and{" "}
                <span className='font-medium text-gray-900 dark:text-white'>
                  141 others
                </span>{" "}
                love your story. See it and view more stories.
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                44 minutes ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='rounded-full w-11 h-11'
                src='/IMAGES/2x2.png'
                alt='Leslie image'
              />
              <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-800'>
                <svg
                  className='w-3 h-3 text-white'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
            </div>
            <div className='w-full pl-3'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Leslie Livingston
                </span>{" "}
                mentioned you in a comment:{" "}
                <span className='font-medium text-blue-500' href='#'>
                  @bonnie.green
                </span>{" "}
                what do you say?
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                1 hour ago
              </div>
            </div>
          </a>
          <a
            href='#'
            className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            <div className='flex-shrink-0'>
              <img
                className='rounded-full w-11 h-11'
                src='/IMAGES/2x2.png'
                alt='Robert image'
              />
              <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800'>
                <svg
                  className='w-3 h-3 text-white'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z'></path>
                </svg>
              </div>
            </div>
            <div className='w-full pl-3'>
              <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  Robert Brown
                </span>{" "}
                posted a new video: Glassmorphism - learn how to implement the
                new design trend.
              </div>
              <div className='text-xs text-blue-600 dark:text-blue-500'>
                3 hours ago
              </div>
            </div>
          </a> */}
          <div className='flex flex-row items-center bg-CITLGray-light justify-end px-6 py-3 w-full'>
            {/* <span className='text-sm text-gray-700 dark:text-gray-400 '>
              Showing{" "}
              <span className='font-semibold text-gray-900 dark:text-white'></span>
              <span className='font-semibold text-gray-900 dark:text-white'></span>{" "}
              of{" "}
              <span className='font-semibold text-gray-900 dark:text-white'></span>{" "}
              Entries
            </span> */}

            <span className='text-sm text-gray-700 dark:text-gray-400 '></span>

            <div className='inline-flex xs:mt-0 ml-2 gap-x-1'>
              <button className='inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-CITLGray-main'>
                <svg
                  aria-hidden='true'
                  className='w-4 h-54 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Prev
              </button>
              <button className='inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-gray-800 border-0  rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-CITLGray-main'>
                Next
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 ml-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
