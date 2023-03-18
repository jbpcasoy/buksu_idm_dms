import useNotifications from "@/hooks/notification/useNotifications";
import useUser from "@/hooks/useUser";
import NotificationItem from "./NotificationItem";

export default function Notifications() {
  const { user, userError, useLoading } = useUser();
  const { notifications, notificationsLoading, notificationsError } =
    useNotifications({ limit: 5, page: 1, userId: user?.id });

  return (
    <div>
      <button
        id='dropdownNotificationButton'
        data-dropdown-toggle='dropdownNotification'
        className='inline-flex items-center text-sm mt-2 font-medium text-center text-CITLWhite hover:text-CITLOrange focus:outline-none dark:hover:text-white dark:text-gray-400'
        type='button'
      >
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z'></path>
        </svg>
        <div className='relative flex '>
          <div className='absolute inline-flex items-center justify-center w-2 h-2 text-xs font- text-white bg-red-500 border-2 border-white rounded-full -top-3 right-1 dark:border-gray-900'></div>
        </div>
      </button>

      <div
        id='dropdownNotification'
        className='z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700'
        aria-labelledby='dropdownNotificationButton'
      >
        <div className='block px-4 py-2 font-medium text-left text-gray-700 rounded-t-lg bg-CITLGray-light dark:bg-gray-800 dark:text-white'>
          Notifications
        </div>
        <div className='divide-y divide-gray-100 dark:divide-gray-700'>
          {notifications.map((notification) => (
            <NotificationItem notification={notification} />
          ))}
        </div>
        <a
          href='/notification'
          className='block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-CITLGray-light hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white'
        >
          <div className='inline-flex items-center '>
            <svg
              className='w-4 h-4 mr-2 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10 12a2 2 0 100-4 2 2 0 000 4z'></path>
              <path
                fillRule='evenodd'
                d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                clipRule='evenodd'
              ></path>
            </svg>
            View all
          </div>
        </a>
      </div>
    </div>
  );
}
