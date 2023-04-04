import ChairpersonReviewNotificationItem from "./ChairpersonReviewNotificationItem";
import ChairpersonSuggestionNotificationItem from "./ChairpersonSuggestionNotificationItem";
import CITLDirectorEndorsementNotificationItem from "./CITLDirectorEndorsementNotificationItem";
import CoordinatorEndorsementNotificationItem from "./CoordinatorEndorsementNotificationItem";
import CoordinatorReviewNotificationItem from "./CoordinatorReviewNotificationItem";
import CoordinatorSuggestionNotificationItem from "./CoordinatorSuggestionNotificationItem";
import DeanEndorsementNotificationItem from "./DeanEndorsementNotificationItem";
import IMDCoordinatorEndorsementNotificationItem from "./IMDCoordinatorEndorsementNotificationItem";
import IMDCoordinatorSuggestionNotificationItem from "./IMDCoordinatorSuggestionNotificationItem";
import PeerReviewNotificationItem from "./PeerReviewNotificationItem";
import PeerSuggestionNotificationItem from "./PeerSuggestionNotificationItem";

export default function NotificationItem({
  notification,
  refreshNotifications,
}) {
  if (!notification) return null;

  if (notification.Type === "SUBMITTED_PEER_REVIEW") {
    return (
      <PeerReviewNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "SUBMITTED_CHAIRPERSON_REVIEW") {
    return (
      <ChairpersonReviewNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "SUBMITTED_COORDINATOR_REVIEW") {
    return (
      <CoordinatorReviewNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "SUBMITTED_COORDINATOR_SUGGESTION") {
    return (
      <CoordinatorSuggestionNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "SUBMITTED_CHAIRPERSON_SUGGESTION") {
    return (
      <ChairpersonSuggestionNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "SUBMITTED_PEER_SUGGESTION") {
    return (
      <PeerSuggestionNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "COORDINATOR_ENDORSEMENT") {
    return (
      <CoordinatorEndorsementNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "DEAN_ENDORSEMENT") {
    return (
      <DeanEndorsementNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "SUBMITTED_IMD_COORDINATOR_SUGGESTION") {
    return (
      <IMDCoordinatorSuggestionNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "IMD_COORDINATOR_ENDORSEMENT") {
    return (
      <IMDCoordinatorEndorsementNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "CITL_DIRECTOR_ENDORSEMENT") {
    return (
      <CITLDirectorEndorsementNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  }
}
