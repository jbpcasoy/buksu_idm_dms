import AdminLayout from "@/components/admin/AdminLayout";
import useSettings from "@/hooks/settings/useSettings";
import frontendUpsertSettings from "@/services/frontend/settings/frontendUpsertSettings";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

export default function SettingsPage() {
  const { settings, settingsError, settingsLoading } = useSettings();
  const formik = useFormik({
    initialValues: { vpaa: settings?.vpaa },
    validationSchema: Yup.object({
      vpaa: Yup.string().required("VPAA is required"),
    }),
    onSubmit: async (values) => {
      const { vpaa } = values;
      return frontendUpsertSettings({ vpaa });
    },
  });

  useEffect(() => {
    if (!settings) return;

    formik.setValues({
      vpaa: settings.vpaa,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

  return (
    <AdminLayout>
      <Container maxWidth='sm'>
        <Card variant='outlined' sx={{ mt: 10 }}>
          <CardHeader title='Global Settings' />
          <CardContent>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={1}>
                <Stack>
                  <TextField
                    label='VPAA'
                    size='small'
                    {...formik.getFieldProps("vpaa")}
                  />
                </Stack>
                <Stack
                  direction='row'
                  justifyContent='flex-end'
                  alignItems='center'
                >
                  <Button
                    size='small'
                    variant='contained'
                    type='submit'
                    disabled={formik.isSubmitting}
                  >
                    Save
                  </Button>
                </Stack>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Container>
    </AdminLayout>
  );
}
