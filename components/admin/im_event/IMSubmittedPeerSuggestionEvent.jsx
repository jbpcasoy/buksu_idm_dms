import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
import { orange } from "@mui/material/colors";
import moment from "moment";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function IMSubmittedPeerSuggestionEvent({ iMEvent }) {
  return (
    <ListItem alignItems='flex-start' divider={true}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: orange[500] }}>
          <TimelineIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary='Peer Suggestion Submitted'
        secondary={
          <Typography
            sx={{ display: "inline" }}
            component='span'
            variant='body2'
            color='text.primary'
          >
            {iMEvent?.SubmittedPeerSuggestion?.IM?.title} |{" "}
            {moment(iMEvent.updatedAt).format("LLL")}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Link
          href={`/admin/im/${iMEvent.SubmittedPeerSuggestion.iMId}`}
          target='_blank'
        >
          <OpenInNewIcon />
        </Link>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
