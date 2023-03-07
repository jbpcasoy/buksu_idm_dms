import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AdminIMReviewSectionUpdateForm({
  open,
  onClose,
  onSubmit,
  initialValues,
}) {
  const formik = useFormik({
    initialValues: {
      title: initialValues.title,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
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
        <DialogTitle>Update Section</DialogTitle>
        <DialogContent>
          <Stack spacing={1}>
            <DialogContentText>
              If this section have corresponding references, this will fail.
            </DialogContentText>
            <TextField
              label='Title'
              helperText={formik.touched.title && formik.errors.title}
              fullWidth
              {...formik.getFieldProps("title")}
              error={formik.touched.title && formik.errors.title}
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
