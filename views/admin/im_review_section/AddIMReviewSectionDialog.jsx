import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AddIMReviewSectionDialog({ open, onClose, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
    }),
    onSubmit: (values) => {
      return onSubmit(values).then((res) => {
        formik.resetForm();
        onClose();
      });
    },
  });

  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth>
        <form noValidate onSubmit={formik.handleSubmit}>
          <DialogTitle>Add Section</DialogTitle>
          <DialogContent>
            <Stack spacing={1} sx={{ mt: 1 }}>
              <TextField
                label='Title'
                size='small'
                {...formik.getFieldProps("title")}
                error={formik.touched.title && formik.errors.title}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} disabled={formik.isSubmitting}>
              Cancel
            </Button>
            <Button type='submit' disabled={formik.isSubmitting}>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
