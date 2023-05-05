import CollegeSelectField from "@/components/admin/form/CollegeSelectField";
import { Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AdminAddDepartmentForm({ open, onClose, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      collegeId: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      collegeId: Yup.string().required("College is required"),
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
          <DialogTitle>Add Department</DialogTitle>
          <DialogContent>
            <Stack spacing={1} sx={{ mt: 1 }}>
              <CollegeSelectField
                fullWidth
                {...formik.getFieldProps("collegeId")}
                onChange={(collegeId) =>
                  formik.setFieldValue("collegeId", collegeId)
                }
                error={formik.touched.collegeId && formik.errors.collegeId}
                helperText={formik.touched.collegeId && formik.errors.collegeId}
              />
              <TextField
                label='Name'
                size='small'
                {...formik.getFieldProps("name")}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type='submit'>Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
