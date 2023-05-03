import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AdminUserUpdateForm({
  open,
  onClose,
  onSubmit,
  initialValues,
}) {
  const formik = useFormik({
    initialValues: {
      name: initialValues.name,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
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
        <DialogTitle>Update User</DialogTitle>
        <DialogContent>
          <Stack spacing={1}>
            <DialogContentText>
              This will change the user&apos;s data across resources.
            </DialogContentText>
            <TextField
              size='small'
              label='Name'
              helperText={formik.touched.name && formik.errors.name}
              fullWidth
              {...formik.getFieldProps("name")}
              error={formik.touched.name && formik.errors.name}
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
