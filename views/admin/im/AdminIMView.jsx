import { Button, TableCell, TableRow } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";
import AdminIMActionsMenu from "./AdminIMActionsMenu";

export default function AdminIMView({
  type,
  peerReviewed,
  coordinatorReviewed,
  chairpersonReviewed,
  serialNumber,
  title,
  department,
  owner,
  status,
  dateCreated,
  onViewPeerReview,
  onViewChairpersonReview,
  onViewCoordinatorReview,
  onViewIM,
}) {
  const router = useRouter();

  return (
    <TableRow>
      <TableCell>{serialNumber}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>{owner}</TableCell>
      <TableCell>{department}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell align='center'>
        <Button
          size='small'
          variant='contained'
          onClick={onViewPeerReview}
          disabled={!peerReviewed}
        >
          View
        </Button>
      </TableCell>
      <TableCell align='center'>
        <Button
          size='small'
          variant='contained'
          onClick={onViewChairpersonReview}
          disabled={!chairpersonReviewed}
        >
          View
        </Button>
      </TableCell>
      <TableCell align='center'>
        <Button
          size='small'
          variant='contained'
          onClick={onViewCoordinatorReview}
          disabled={!coordinatorReviewed}
        >
          View
        </Button>
      </TableCell>
      <TableCell>{moment(dateCreated).format("lll")}</TableCell>
      <TableCell>
        <AdminIMActionsMenu onView={onViewIM} />
      </TableCell>
    </TableRow>
  );
}
