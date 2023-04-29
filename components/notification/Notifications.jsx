import UserContext from "@/contexts/UserContext";
import useNotifications from "@/hooks/notification/useNotifications";
import Link from "next/link";
import { useContext } from "react";
import NotificationItem from "./NotificationItem";

export default function Notifications() {
  const { user, userError, useLoading } = useContext(UserContext);
  const {
    notifications,
    notificationsLoading,
    notificationsError,
    refreshNotifications,
  } = useNotifications({
    limit: 5,
    page: 1,
    userId: user?.id,
    facultyId: user?.ActiveFaculty?.facultyId,
  });

  return (
    <div>
      <button
        id='dropdownNotificationButton'
        data-dropdown-toggle='dropdownNotification'
        className='inline-flex items-center text-sm mt-2 font-medium text-center text-CITLWhite hover:text-CITLOrange focus:outline-none dark:hover:text-white dark:text-gray-400'
        type='button'
      >
        <svg
          fill='none'
          className='w-6 h-6'
          stroke='currentColor'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
          ></path>
        </svg>
        {notifications.total > 0 && (
          <div className='relative flex '>
            <div className='absolute inline-flex items-center justify-center w-2 h-2 text-xs font- text-white bg-red-500 border-2 border-white rounded-full -top-3 right-1 dark:border-gray-900'></div>
          </div>
        )}
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
          {notifications?.data?.map((notification) => (
            <NotificationItem
              refreshNotifications={refreshNotifications}
              notification={notification}
              key={notification.id}
            />
          ))}
        </div>
        <Link
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
        </Link>
      </div>
    </div>
  );
}
