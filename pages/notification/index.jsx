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
            <NotificationItem
              notification={notification}
              key={notification.id}
            />
          ))}
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
