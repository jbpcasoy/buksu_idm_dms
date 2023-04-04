import UserSelectField from "@/components/admin/form/UserSelectField";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AdminAddIMDCoordinatorForm({
  open,
  onClose,
  onSubmit,
}) {
  const formik = useFormik({
    initialValues: {
      userId: "",
    },
    validationSchema: Yup.object({
      userId: Yup.string().required("User is required"),
    }),
    onSubmit: (values) => {
      const { userId } = values;

      onSubmit({ userId }).then((res) => {
        onClose();
      });
    },
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Add IMD Coordinator</DialogTitle>
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Stack spacing={1} sx={{ mt: 1 }}>
            <UserSelectField
              {...formik.getFieldProps("userId")}
              onChange={(userId) => formik.setFieldValue("userId", userId)}
              error={Boolean(formik.touched.userId && formik.errors.userId)}
              helperText={formik.touched.userId && formik.errors.userId}
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
