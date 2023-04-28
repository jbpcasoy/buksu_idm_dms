import { Button, TableCell, TableRow } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";
import AdminIMActionsMenu from "./AdminIMActionsMenu";
import { useState } from "react";
import AdminIMUpdateForm from "./AdminIMUpdateForm";

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
  onEdit,
  authors,
}) {
  const router = useRouter();
  const [state, setState] = useState({
    openUpdate: false,
  });

  function openUpdateDialog(open) {
    setState((prev) => ({ ...prev, openUpdate: open }));
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
            onEdit={() => openUpdateDialog(true)}
            onView={onViewIM}
          />
        </TableCell>
      </TableRow>

      <AdminIMUpdateForm
        initialValues={{
          title,
          type,
          serialNumber,
          authors,
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
    </>
  );
}
