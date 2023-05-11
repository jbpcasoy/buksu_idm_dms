import AdminLayout from "@/components/admin/AdminLayout";
import IMEvent from "@/components/admin/im_event/IMEvent";
import useIMEvents from "@/hooks/im_event/useIMEvents";
import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TablePagination,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function IMTracking() {
  const [state, setState] = useState({
    page: 0,
    limit: 10,
    sortColumn: "updatedAt",
    sortOrder: "asc",
  });
  const router = useRouter();

  const { iMEvents, iMEventsLoading, iMEventsError } = useIMEvents({
    limit: state.limit,
    page: state.page + 1,
    iMId: router?.query?.id,
  });

  function handleChangePage(_, page) {
    setState((prev) => ({ ...prev, page }));
  }

  function handleChangeRowsPerPage(event) {
    setState((prev) => ({
      ...prev,
      limit: parseInt(event.target.value, 10),
      page: 0,
    }));
  }

  useEffect(() => {
    console.log({ iMEvents });
  }, [iMEvents]);

  return (
    <AdminLayout>
      <Toolbar>
        <Typography variant='h6'>IM Tracking</Typography>
      </Toolbar>
      <Container maxWidth='md'>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {iMEvents?.data?.map((iMEvent) => (
            <IMEvent iMEventId={iMEvent.id} key={iMEvent.id} />
          ))}
        </List>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={iMEvents?.total}
          rowsPerPage={state.limit}
          page={state.page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
    </AdminLayout>
  );
}
