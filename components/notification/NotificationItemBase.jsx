import useReadNotification from "@/hooks/read_notification/useReadNotification";
import frontendCreateReadNotification from "@/services/frontend/read_notification/frontendCreateReadNotification";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotificationItemBase({
  loading,
  notificationId,
  href,
  imgSrc,
  icon,
  time,
  children,
  refreshNotifications,
}) {
  const router = useRouter();

  const { readNotification, readNotificationLoading, readNotificationError } =
    useReadNotification({ notificationId });

  useEffect(() => {
    console.log({
      readNotification,
      readNotificationLoading,
      readNotificationError,
    });
  }, [readNotification, readNotificationLoading, readNotificationError]);

  async function handleView() {
    return frontendCreateReadNotification({
      notificationId,
    })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        router.push(href);
        refreshNotifications();
      });
  }

  if (loading)
    return (
      <div
        role='status'
        className=' p-4 border border-gray-200 rounded shadow animate-pulse md:p-2 dark:border-gray-700'
      >
        <div className='flex items-center space-x-3'>
          <svg
            className='text-gray-200 w-14 h-14 dark:text-gray-700'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
              clip-rule='evenodd'
            ></path>
          </svg>
          <div>
            <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-64 mb-2'></div>
            <div className='w-96 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          </div>
        </div>
        <span className='sr-only'>Loading...</span>
      </div>
    );

  return (
    <div className={`${readNotification ? "bg-gray-50" : "bg-blue-100"}`}>
      <button
        onClick={handleView}
        className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-left w-full'
      >
        <div className='flex-shrink-0'>
          <img className='rounded-full w-11 h-11' alt='from' src={imgSrc} />
          {icon}
        </div>
        <div className='w-full pl-3'>
          <div className='text-gray-500 text-sm mb-1.5 dark:text-gray-400'>
            {children}
          </div>
          <div className='text-xs text-blue-600 dark:text-blue-500'>
            {moment(time).fromNow()}
          </div>
        </div>
      </button>
    </div>
  );
}
