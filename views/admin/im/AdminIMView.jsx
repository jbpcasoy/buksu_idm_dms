import { Button, TableCell, TableRow } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";
import { useState } from "react";
import AdminDeleteConfirmation from "../AdminDeleteConfirmation";
import AdminIMActionsMenu from "./AdminIMActionsMenu";
import AdminIMUpdateForm from "./AdminIMUpdateForm";

export default function AdminIMView({
  type,
  peerReviewed,
  coordinatorReviewed,
  chairpersonReviewed,
  serialNumber,
  title,
  onDelete,
  department,
  owner,
  status,
  dateCreated,
  onViewPeerReview,
  onViewChairpersonReview,
  onViewCoordinatorReview,
  onViewIM,
  onEdit,
  authors,
  onTrackIM,
}) {
  const router = useRouter();
  const [state, setState] = useState({
    openUpdate: false,
    openDelete: false,
  });

  function openUpdateDialog(open) {
    setState((prev) => ({ ...prev, openUpdate: open }));
  }

  function openDeleteDialog(open) {
    setState((prev) => ({ ...prev, openDelete: open }));
  }

  return (
    <>
      <TableRow>
        <TableCell>{serialNumber}</TableCell>
        <TableCell>{title}</TableCell>
        <TableCell>{type}</TableCell>
        <TableCell>{owner}</TableCell>
        <TableCell>{authors}</TableCell>
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
          <AdminIMActionsMenu
            onDelete={() => openDeleteDialog(true)}
            onEdit={() => openUpdateDialog(true)}
            onView={onViewIM}
            onTrackIM={onTrackIM}
          />
        </TableCell>
      </TableRow>

      <AdminIMUpdateForm
        initialValues={{
          title,
          type,
          serialNumber,
          authors,
          status,
        }}
        open={state.openUpdate}
        onClose={() => openUpdateDialog(false)}
        onSubmit={(values) =>
          onEdit(values).then((res) => {
            openUpdateDialog(false);
          })
        }
        status={status}
      />
      <AdminDeleteConfirmation
        onAgree={onDelete}
        onClose={() => openDeleteDialog(false)}
        open={state.openDelete}
        title='Delete IM'
        message='This action cannot be undone, are you sure?'
      />
    </>
  );
}
