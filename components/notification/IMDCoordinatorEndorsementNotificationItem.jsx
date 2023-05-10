import useNotification from "@/hooks/notification/useNotification";
import { useEffect } from "react";
import NotificationItemBase from "./NotificationItemBase";

export default function IMDCoordinatorEndorsementNotificationItem({
  notification,
  refreshNotifications,
}) {
  const {
    notification: notificationData,
    notificationError,
    notificationLoading,
  } = useNotification({ notificationId: notification?.id });

  useEffect(() => {
    console.log("IMDCoordinatorSuggestionNotificationItem", {
      notificationData,
      notificationError,
      notificationLoading,
    });
  }, [notificationData, notificationError, notificationLoading]);

  return (
    <NotificationItemBase
      refreshNotifications={refreshNotifications}
      loading={notificationLoading}
      notificationId={notificationData?.id}
      href={`/im/${notificationData?.IMDCoordinatorEndorsement?.IM?.id}`}
      imgSrc={
        notificationData?.IMDCoordinatorEndorsement?.IMDCoordinator?.User?.image
      }
      time={notificationData?.createdAt}
      icon={
        <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-CITLDarkBlue  border border-white rounded-full dark:border-gray-800'>
          <svg
            fill='none'
            className='w-3 h-3 text-white'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 12.75l6 6 9-13.5'
            ></path>
          </svg>
        </div>
      }
    >
      New IMD Coordinator Endorsement from{" "}
      <span className='font-semibold text-gray-900 dark:text-white'>
        {
          notificationData?.IMDCoordinatorEndorsement?.IMDCoordinator?.User
            ?.name
        }
      </span>
      {` on IM: "${notificationData?.IMDCoordinatorEndorsement?.IM?.title}"`}
    </NotificationItemBase>
  );
}
