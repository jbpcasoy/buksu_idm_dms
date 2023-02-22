import DepartmentSelectField from "@/components/admin/form/DepartmentSelectField";
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

export default function AdminAddFacultyForm({ open, onClose, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      departmentId: "",
      userId: "",
    },
    validationSchema: Yup.object({
      departmentId: Yup.string().required("Department is required."),
      userId: Yup.string().required("User is required"),
    }),
    onSubmit: (values) => {
      const { departmentId, userId } = values;

      onSubmit({ departmentId, userId }).then((res) => {
        onClose();
      });
    },
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Add Faculty</DialogTitle>
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Stack spacing={1} sx={{ mt: 1 }}>
            <DepartmentSelectField
              {...formik.getFieldProps("departmentId")}
              onChange={(departmentId) =>
                formik.setFieldValue("departmentId", departmentId)
              }
              error={Boolean(
                formik.touched.departmentId && formik.errors.departmentId
              )}
              helperText={
                formik.touched.departmentId && formik.errors.departmentId
              }
            />
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
