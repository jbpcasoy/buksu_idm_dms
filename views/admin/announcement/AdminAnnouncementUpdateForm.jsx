import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AdminAnnouncementUpdateForm({
  open,
  onClose,
  onSubmit,
  initialValues,
}) {
  const formik = useFormik({
    initialValues: {
      title: initialValues.title,
      description: initialValues.description,
      link: initialValues.link,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      link: Yup.string().required("Link is required"),
    }),
    onSubmit: (values) => {
      return onSubmit(values).then((res) => {
        onClose();
      });
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogTitle>Update Announcement</DialogTitle>
        <DialogContent>
          <Stack spacing={1}>
            <DialogContentText>
              This will change the announcement&apos;s data across resources.
            </DialogContentText>
            <TextField
              size='small'
              label='Title'
              helperText={formik.touched.title && formik.errors.title}
              fullWidth
              {...formik.getFieldProps("title")}
              error={formik.touched.title && formik.errors.title}
            />
            <TextField
              size='small'
              label='Description'
              helperText={
                formik.touched.description && formik.errors.description
              }
              fullWidth
              {...formik.getFieldProps("description")}
              error={formik.touched.description && formik.errors.description}
            />
            <TextField
              size='small'
              label='Link'
              helperText={formik.touched.link && formik.errors.link}
              fullWidth
              {...formik.getFieldProps("link")}
              error={formik.touched.link && formik.errors.link}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit' disabled={formik.isSubmitting}>
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
