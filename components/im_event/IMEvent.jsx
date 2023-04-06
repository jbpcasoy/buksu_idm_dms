import useIMEvent from "@/hooks/im_event/useIMEvent";
import IMCITLDirectorEndorsementEvent from "./IMCITLDirectorEndorsementEvent";
import IMCoordinatorEndorsementEvent from "./IMCoordinatorEndorsementEvent";
import IMCreatedEvent from "./IMCreatedEvent";
import IMDeanEndorsementEvent from "./IMDeanEndorsementEvent";
import IMIMDCoordinatorEndorsementEvent from "./IMIMDCoordinatorEndorsementEvent";
import IMNewVersionEvent from "./IMNewVersionEvent";
import IMSubmittedChairpersonReviewEvent from "./IMSubmittedChairpersonReviewEvent";
import IMSubmittedChairpersonSuggestionEvent from "./IMSubmittedChairpersonSuggestionEvent";
import IMSubmittedCoordinatorReviewEvent from "./IMSubmittedCoordinatorReviewEvent";
import IMSubmittedCoordinatorSuggestionEvent from "./IMSubmittedCoordinatorSuggestionEvent";
import IMSubmittedIMDCoordinatorSuggestionEvent from "./IMSubmittedIMDCoordinatorSuggestionEvent";
import IMSubmittedPeerReviewEvent from "./IMSubmittedPeerReviewEvent";
import IMSubmittedPeerSuggestionEvent from "./IMSubmittedPeerSuggestionEvent";

export default function IMEvent({ iMEventId }) {
  const { iMEvent, iMEventLoading, iMEventError } = useIMEvent({ iMEventId });
  if (iMEvent?.IMEventType === "IM_CREATED") {
    return <IMCreatedEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "NEW_VERSION") {
    return <IMNewVersionEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_PEER_REVIEW") {
    return <IMSubmittedPeerReviewEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_COORDINATOR_REVIEW") {
    return <IMSubmittedCoordinatorReviewEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_CHAIRPERSON_REVIEW") {
    return <IMSubmittedChairpersonReviewEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_PEER_SUGGESTION") {
    return <IMSubmittedPeerSuggestionEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_COORDINATOR_SUGGESTION") {
    return <IMSubmittedCoordinatorSuggestionEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_CHAIRPERSON_SUGGESTION") {
    return <IMSubmittedChairpersonSuggestionEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "COORDINATOR_ENDORSEMENT") {
    return <IMCoordinatorEndorsementEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "DEAN_ENDORSEMENT") {
    return <IMDeanEndorsementEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_IMD_COORDINATOR_SUGGESTION") {
    return <IMSubmittedIMDCoordinatorSuggestionEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "IMD_COORDINATOR_ENDORSEMENT") {
    return <IMIMDCoordinatorEndorsementEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "CITL_DIRECTOR_ENDORSEMENT") {
    return <IMCITLDirectorEndorsementEvent iMEvent={iMEvent} />;
  }
}
