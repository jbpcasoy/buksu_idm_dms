import ActiveFacultySelectField from "@/components/admin/form/ActiveFacultySelectField";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AdminAddAnnouncementForm({ open, onClose, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      link: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required."),
      description: Yup.string().required("Description is required."),
      link: Yup.string().required("Link is required."),
    }),
    onSubmit: (values) => {
      const { title, description, link } = values;

      onSubmit({ title, description, link }).then((res) => {
        onClose();
      });
    },
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Add Announcement</DialogTitle>
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Stack spacing={1} sx={{ mt: 1 }}>
            <TextField
              label='Title'
              size='small'
              {...formik.getFieldProps("title")}
              error={formik.touched.title && formik.errors.title}
              helperText={formik.title && formik.errors.title}
            />
            <TextField
              label='Description'
              size='small'
              {...formik.getFieldProps("description")}
              error={formik.touched.description && formik.errors.description}
              helperText={formik.description && formik.errors.description}
            />
            <TextField
              label='Link'
              size='small'
              {...formik.getFieldProps("link")}
              error={formik.touched.link && formik.errors.link}
              helperText={formik.link && formik.errors.link}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit' disable={formik.isSubmitting}>
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
