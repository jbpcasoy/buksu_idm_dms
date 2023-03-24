import useNotification from "@/hooks/notification/useNotification";
import { useEffect } from "react";
import NotificationItemBase from "./NotificationItemBase";

export default function ChairpersonReviewNotificationItem({ notification }) {
  const {
    notification: notificationData,
    notificationError,
    notificationLoading,
  } = useNotification({ notificationId: notification?.id });

  useEffect(() => {
    console.log({ notificationData, notificationError, notificationLoading });
  }, [notificationData, notificationError, notificationLoading]);

  return (
    <NotificationItemBase
      loading={notificationLoading}
      notificationId={notificationData?.id}
      href={`/im/${notificationData?.SubmittedChairpersonReview?.IM?.id}`}
      imgSrc={
        notificationData?.SubmittedChairpersonReview?.ChairpersonReview
          ?.Chairperson?.Faculty?.user?.image
      }
      time={notificationData?.createdAt}
      icon={
        <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-orange-400  border border-white rounded-full dark:border-gray-800'>
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
      }
    >
      New Chairperson Review from{" "}
      <span className='font-semibold text-gray-900 dark:text-white'>
        {
          notificationData?.SubmittedChairpersonReview?.ChairpersonReview
            ?.Chairperson?.Faculty?.user?.name
        }
      </span>
      {` On IM: "${notificationData?.SubmittedChairpersonReview?.IM?.title}"`}
    </NotificationItemBase>
  );
}
