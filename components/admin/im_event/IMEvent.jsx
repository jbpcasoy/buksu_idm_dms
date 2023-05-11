import useIMEvent from "@/hooks/im_event/useIMEvent";
import React, { useEffect } from "react";
import IMCreatedEvent from "./IMCreatedEvent";
import {
  Avatar,
  IconButton,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import { orange } from "@mui/material/colors";
import moment from "moment";
import ForwardIcon from "@mui/icons-material/Forward";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useState } from "react";
import { useRouter } from "next/router";
import useIM from "@/hooks/useIM";
import IMNewVersionEvent from "./IMNewVersionEvent";
import IMSubmittedEvent from "./IMSubmittedEvent";
import IMSubmittedPeerReviewEvent from "./IMSubmittedPeerReviewEvent";
import IMSubmittedCoordinatorReviewEvent from "./IMSubmittedCoordinatorReviewEvent";
import IMSubmittedChairpersonReviewEvent from "./IMSubmittedChairpersonReviewEvent";
import IMSubmittedCoordinatorSuggestionEvent from "./IMSubmittedCoordinatorSuggestionEvent";
import IMSubmittedChairpersonSuggestionEvent from "./IMSubmittedChairpersonSuggestionEvent";
import IMSubmittedPeerSuggestionEvent from "./IMSubmittedPeerSuggestionEvent";
import IMDepartmentReviewedEvent from "./IMDepartmentReviewedEvent";
import IMDepartmentRevisedEvent from "./IMDepartmentRevisedEvent";
import IMCoordinatorEndorsementEvent from "./IMCoordinatorEndorsementEvent";
import IMDeanEndorsementEvent from "./IMDeanEndorsementEvent";
import IMSubmittedIMDCoordinatorSuggestionEvent from "./IMSubmittedIMDCoordinatorSuggestionEvent";
import IMCITLReviewedEvent from "./IMCITLReviewedEvent";
import IMCITLRevisedEvent from "./IMCITLRevisedEvent";
import IMIMDCoordinatorEndorsedEvent from "./IMIMDCoordinatorEndorsedEvent";

export default function IMEvent({ iMEventId }) {
  const { iMEvent, iMEventLoading, iMEventError } = useIMEvent({ iMEventId });
  const [link, setLink] = useState();
  const router = useRouter();
  const { iM, iMError, iMLoading, refreshIM } = useIM(router.query.id);

  if (iMEvent?.IMEventType === "IM_CREATED") {
    return <IMCreatedEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "NEW_VERSION") {
    return <IMNewVersionEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED") {
    return <IMSubmittedEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_PEER_REVIEW") {
    return <IMSubmittedPeerReviewEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_COORDINATOR_REVIEW") {
    return <IMSubmittedCoordinatorReviewEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_CHAIRPERSON_REVIEW") {
    return <IMSubmittedChairpersonReviewEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_COORDINATOR_SUGGESTION") {
    return <IMSubmittedCoordinatorSuggestionEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_CHAIRPERSON_SUGGESTION") {
    return <IMSubmittedChairpersonSuggestionEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_PEER_SUGGESTION") {
    return <IMSubmittedPeerSuggestionEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "DEPARTMENT_REVIEWED") {
    return <IMDepartmentReviewedEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "DEPARTMENT_REVISED") {
    return <IMDepartmentRevisedEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "COORDINATOR_ENDORSEMENT") {
    return <IMCoordinatorEndorsementEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "DEAN_ENDORSEMENT") {
    return <IMDeanEndorsementEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "SUBMITTED_IMD_COORDINATOR_SUGGESTION") {
    return <IMSubmittedIMDCoordinatorSuggestionEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "CITL_REVIEWED") {
    return <IMCITLReviewedEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "CITL_REVISED") {
    return <IMCITLRevisedEvent iMEvent={iMEvent} />;
  } else if (iMEvent?.IMEventType === "IMD_COORDINATOR_ENDORSEMENT") {
    return <IMIMDCoordinatorEndorsedEvent iMEvent={iMEvent} />;
  }
}
