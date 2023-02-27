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

export default function AdminAddCollegeDepartmentForm({
  collegeId,
  open,
  onClose,
  onSubmit,
}) {
  const formik = useFormik({
    initialValues: {
      name: "",
      collegeId: collegeId,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
    }),
    onSubmit: (values) => {
      return onSubmit(values).then((res) => {
        formik.resetForm();
        onClose();
      });
    },
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogTitle>Add Department</DialogTitle>
        <DialogContent>
          <Stack spacing={1} sx={{ mt: 1 }}>
            <TextField
              label='Name'
              size='small'
              {...formik.getFieldProps("name")}
              error={formik.touched.name && formik.errors.name}
              helperText={formik.touched && formik.errors.name}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
