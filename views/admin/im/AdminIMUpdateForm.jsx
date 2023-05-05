import InfoIcon from "@mui/icons-material/Info";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AdminIMUpdateForm({
  open,
  onClose,
  onSubmit,
  initialValues,
  status,
}) {
  const formik = useFormik({
    initialValues: {
      title: initialValues.title,
      type: initialValues.type,
      serialNumber: initialValues.serialNumber,
      authors: initialValues.authors,
      status: initialValues.status,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      type: Yup.string().required("Type is required"),
      authors: Yup.string().required("Authors is required"),
      status: Yup.string().required("Status is required"),
      serialNumber: Yup.string().nullable(),
    }),
    onSubmit: (values) => {
      return onSubmit({
        ...values,
        status:
          values.status === initialValues.status ? undefined : values.status,
      }).then((res) => {
        onClose();
      });
    },
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogTitle>Update IM</DialogTitle>
        <DialogContent>
          <Stack spacing={1}>
            <DialogContentText>
              This will change the IM&apos;s data across resources.
            </DialogContentText>
            <TextField
              label='Title'
              size='small'
              helperText={formik.touched.title && formik.errors.title}
              fullWidth
              {...formik.getFieldProps("title")}
              error={formik.touched.title && formik.errors.title}
            />
            <TextField
              multiline
              label='Authors'
              size='small'
              helperText={formik.touched.authors && formik.errors.authors}
              fullWidth
              {...formik.getFieldProps("authors")}
              error={formik.touched.authors && formik.errors.authors}
            />
            <FormControl size='small' sx={{ width: "auto" }}>
              <InputLabel>Type</InputLabel>
              <Select
                value={formik.values.type}
                label='Type'
                fullWidth
                {...formik.getFieldProps("type")}
              >
                <MenuItem value={"MODULE"}>MODULE</MenuItem>
                <MenuItem value={"COURSE_FILE"}>COURSE_FILE</MenuItem>
                <MenuItem value={"WORKTEXT"}>WORKTEXT</MenuItem>
                <MenuItem value={"TEXTBOOK"}>TEXTBOOK</MenuItem>
              </Select>
            </FormControl>
            {(initialValues.status === "SUBMITTED" ||
              initialValues.status === "DEPARTMENT_REVISED" ||
              initialValues.status === "CITL_REVISED") && (
              <FormControl size='small' sx={{ width: "auto" }}>
                <InputLabel>Status</InputLabel>
                <Select
                  value={formik.values.status}
                  label='Status'
                  fullWidth
                  {...formik.getFieldProps("status")}
                >
                  {initialValues.status === "SUBMITTED" && (
                    <MenuItem value={"SUBMITTED"}>SUBMITTED</MenuItem>
                  )}
                  {initialValues.status === "SUBMITTED" && (
                    <MenuItem value={"DRAFT"}>DRAFT</MenuItem>
                  )}
                  {initialValues.status === "DEPARTMENT_REVISED" && (
                    <MenuItem value={"DEPARTMENT_REVISED"}>
                      DEPARTMENT_REVISED
                    </MenuItem>
                  )}
                  {initialValues.status === "DEPARTMENT_REVISED" && (
                    <MenuItem value={"DEPARTMENT_REVIEWED"}>
                      DEPARTMENT_REVIEWED
                    </MenuItem>
                  )}
                  {initialValues.status === "CITL_REVISED" && (
                    <MenuItem value={"CITL_REVISED"}>CITL_REVISED</MenuItem>
                  )}
                  {initialValues.status === "CITL_REVISED" && (
                    <MenuItem value={"CITL_REVIEWED"}>CITL_REVIEWED</MenuItem>
                  )}
                </Select>
              </FormControl>
            )}
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='center'
              spacing={1}
            >
              <TextField
                disabled={status !== "CITL_ENDORSED"}
                label='Serial No.'
                size='small'
                helperText={
                  formik.touched.serialNumber && formik.errors.serialNumber
                }
                fullWidth
                {...formik.getFieldProps("serialNumber")}
                error={
                  formik.touched.serialNumber && formik.errors.serialNumber
                }
              />
              <Tooltip title='Serial Number can only be set if IM status is CITL_ENDORSED'>
                <InfoIcon />
              </Tooltip>
            </Stack>
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
