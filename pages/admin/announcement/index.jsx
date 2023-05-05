import AdminLayout from "@/components/admin/AdminLayout";
import AdminAnnouncement from "@/components/admin/announcement/AdminAnnouncement";
import frontendReadAnnouncements from "@/services/frontend/announcement/frontendReadAnnouncements";
import Sort from "@/views/admin/Sort";
import {
  Box,
  IconButton,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import AdminAddAnnouncementForm from "@/views/admin/announcement/AdminAddAnnouncementForm";
import frontendCreateAnnouncement from "@/services/frontend/announcement/frontendCreateAnnouncement";
import { useSnackbar } from "notistack";

export default function AdminAnnouncementPage() {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [announcements, setAnnouncements] = useState([]);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    title: "",
    description: "",
    link: "",
    sortColumn: "title",
    sortOrder: "asc",
    openAdd: false,
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadAnnouncements({
      limit: state.limit,
      page: state.page + 1,
      title: state.title,
      description: state.description,
      link: state.link,
      sortColumn: state.sortColumn,
      sortOrder: state.sortOrder,
    }).then((res) => {
      if (!subscribe) return;
      setAnnouncements(res.data);
      setTotal(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [state]);

  async function onAdd(value) {
    const { title, description, link } = value;

    return frontendCreateAnnouncement({ title, description, link })
      .then((res) => {
        enqueueSnackbar({
          message: "Announcement added successfully",
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to add announcement",
          variant: "error",
        });
      });
  }

  function openAddDialog(open) {
    setState((prev) => ({ ...prev, openAdd: open }));
  }

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

  function handleTitleChange(e) {
    setState((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  }
  const debouncedHandleTitleChange = _.debounce(handleTitleChange, 800);

  function handleDescriptionChange(e) {
    setState((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  }
  const debouncedHandleDescriptionChange = _.debounce(
    handleDescriptionChange,
    800
  );

  function handleLinkChange(e) {
    setState((prev) => ({
      ...prev,
      link: e.target.value,
    }));
  }
  const debouncedHandleLinkChange = _.debounce(handleLinkChange, 800);

  function handleSortByChange(e) {
    setState((prev) => ({
      ...prev,
      sortColumn: e.target.value,
    }));
  }
  function handleSortOrderChange(e, value) {
    setState((prev) => ({
      ...prev,
      sortOrder: value,
    }));
  }

  return (
    <AdminLayout>
      <Box sx={{ m: 1 }}>
        <Toolbar>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Typography variant='h6'>Announcements</Typography>
            <Tooltip title='Add'>
              <IconButton onClick={() => openAddDialog(true)}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
        <Stack direction='row' spacing={1} sx={{ px: 2 }}>
          <TextField
            size='small'
            label='Title'
            onChange={debouncedHandleTitleChange}
          />
          <TextField
            size='small'
            label='Description'
            onChange={debouncedHandleDescriptionChange}
          />
          <TextField
            size='small'
            label='Link'
            onChange={debouncedHandleLinkChange}
          />
          <Sort
            onChangeSortColumn={handleSortByChange}
            onChangeSortOrder={handleSortOrderChange}
            sortColumn={state.sortColumn}
            sortOptions={[
              { value: "title", label: "Title" },
              { value: "description", label: "Description" },
              { value: "link", label: "Link" },
            ]}
            sortOrder={state.sortOrder}
          />
        </Stack>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>link</TableCell>
                <TableCell width={100}>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {announcements?.map((announcement) => (
                <AdminAnnouncement
                  announcement={announcement}
                  key={announcement.id}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={total}
        rowsPerPage={state.limit}
        page={state.page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <AdminAddAnnouncementForm
        open={state.openAdd}
        onClose={() => openAddDialog(false)}
        onSubmit={onAdd}
      />
    </AdminLayout>
  );
}
