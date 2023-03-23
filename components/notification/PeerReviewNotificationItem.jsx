import useNotification from "@/hooks/notification/useNotification";
import { useEffect } from "react";
import NotificationItemView from "../../views/notification/NotificationItemView";

export default function PeerReviewNotificationItem({ notification }) {
  const {
    notification: notificationData,
    notificationError,
    notificationLoading,
  } = useNotification({ notificationId: notification?.id });

  useEffect(() => {
    console.log({ notificationData, notificationError, notificationLoading });
  }, [notificationData, notificationError, notificationLoading]);

  if (!notificationData) return null;
  return (
    <div className='bg-blue-100'>
      <NotificationItemView
        href={`/im/${notificationData?.SubmittedPeerReview?.IM?.id}`}
        imgSrc={
          notificationData?.SubmittedPeerReview?.PeerReview?.Faculty?.user
            ?.image
        }
        time={notificationData?.createdAt}
        icon={
          <div className='absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-400  border border-white rounded-full dark:border-gray-800'>
            <svg
              fill='currentColor'
              className="w-3 h-3 text-white"
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                clip-rule='evenodd'
                fill-rule='evenodd'
                d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
              ></path>
            </svg>
          </div>
        }
      >
        New Peer Review from{" "}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {
            notificationData?.SubmittedPeerReview?.PeerReview?.Faculty?.user
              ?.name
          }
        </span>
        : {`"On IM: ${notificationData?.SubmittedPeerReview?.IM?.title}"`}
      </NotificationItemView>
    </div>
  );
}
