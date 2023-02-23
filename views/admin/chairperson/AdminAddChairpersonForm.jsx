import ActiveFacultySelectField from "@/components/admin/form/ActiveFacultySelectField";
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

export default function AdminAddChairpersonForm({ open, onClose, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      facultyId: "",
    },
    validationSchema: Yup.object({
      facultyId: Yup.string().required("Faculty is required."),
    }),
    onSubmit: (values) => {
      const { facultyId } = values;

      onSubmit({ facultyId }).then((res) => {
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
            <ActiveFacultySelectField
              {...formik.getFieldProps("facultyId")}
              onChange={(facultyId) =>
                formik.setFieldValue("facultyId", facultyId)
              }
              error={Boolean(
                formik.touched.facultyId && formik.errors.facultyId
              )}
              helperText={formik.touched.facultyId && formik.errors.facultyId}
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
