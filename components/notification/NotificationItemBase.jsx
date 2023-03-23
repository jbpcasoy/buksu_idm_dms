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
      .finally(() => router.push(href));
  }
  if (loading) return <p>Loading...</p>;
  return (
    <div className={`${readNotification ? "bg-gray-50" : "bg-blue-100"}`}>
      <button
        onClick={handleView}
        className='flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-left w-full'
      >
        <div className='flex-shrink-0'>
          <img className='rounded-full w-11 h-11' src={imgSrc} />
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
