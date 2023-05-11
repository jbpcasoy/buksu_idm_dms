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

export default function IMDepartmentReviewedEvent({ iMEvent }) {
  return (
    <ListItem alignItems='flex-start' divider={true}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: orange[500] }}>
          <TimelineIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary='Department Reviewed'
        secondary={
          <Typography
            sx={{ display: "inline" }}
            component='span'
            variant='body2'
            color='text.primary'
          >
            {iMEvent?.IM?.title} | {moment(iMEvent.updatedAt).format("LLL")}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Link
          href={`/api/download/file/${iMEvent?.File?.fileName}`}
          target='_blank'
        >
          <OpenInNewIcon />
        </Link>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
