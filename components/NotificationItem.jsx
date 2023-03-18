import ChairpersonReviewNotificationItem from "./notification/ChairpersonReviewNotificationItem";
import CoordinatorReviewNotificationItem from "./notification/CoordinatorReviewNotificationItem";
import PeerReviewNotificationItem from "./notification/PeerReviewNotificationItem";

export default function NotificationItem({ notification }) {
  if (!notification) return null;

  if (notification.Type === "SUBMITTED_PEER_REVIEW") {
    return <PeerReviewNotificationItem notification={notification} />;
  } else if (notification.Type === "SUBMITTED_CHAIRPERSON_REVIEW") {
    return <ChairpersonReviewNotificationItem notification={notification} />;
  } else if (notification.Type === "SUBMITTED_COORDINATOR_REVIEW") {
    return <CoordinatorReviewNotificationItem notification={notification} />;
  }
}
