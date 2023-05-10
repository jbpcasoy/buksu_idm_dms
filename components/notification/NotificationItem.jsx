import CITLRevisedNotificationItem from "./CITLRevisedNotificationItem";
import ChairpersonReviewNotificationItem from "./ChairpersonReviewNotificationItem";
import ChairpersonSuggestionNotificationItem from "./ChairpersonSuggestionNotificationItem";
import CoordinatorEndorsementNotificationItem from "./CoordinatorEndorsementNotificationItem";
import CoordinatorReviewNotificationItem from "./CoordinatorReviewNotificationItem";
import CoordinatorSuggestionNotificationItem from "./CoordinatorSuggestionNotificationItem";
import DeanEndorsementNotificationItem from "./DeanEndorsementNotificationItem";
import DepartmentRevisedNotificationItem from "./DepartmentRevisedNotificationItem";
import IMDCoordinatorEndorsementNotificationItem from "./IMDCoordinatorEndorsementNotificationItem";
import IMDCoordinatorSuggestionNotificationItem from "./IMDCoordinatorSuggestionNotificationItem";
import PeerReviewNotificationItem from "./PeerReviewNotificationItem";
import PeerSuggestionNotificationItem from "./PeerSuggestionNotificationItem";
import SubmittedNotificationItem from "./SubmittedNotificationItem";

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
  } else if (notification.Type === "SUBMITTED") {
    return (
      <SubmittedNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "DEPARTMENT_REVISED") {
    return (
      <DepartmentRevisedNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  } else if (notification.Type === "CITL_REVISED") {
    return (
      <CITLRevisedNotificationItem
        notification={notification}
        refreshNotifications={refreshNotifications}
      />
    );
  }
}
