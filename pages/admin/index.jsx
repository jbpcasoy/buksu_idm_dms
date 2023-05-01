import AdminLayout from "@/components/admin/AdminLayout";
import EndorsedIM from "@/components/admin/dashboard/EndorsedIM";
import { ApprovedIMsLine } from "@/components/charts/ApprovedIMsLine";
import Chart from "@/components/charts/Chart";
import NumberOfFaculties from "@/components/charts/Faculties";
import { Box, Toolbar, Typography } from "@mui/material";

export default function AdminHome() {
  return (
    <AdminLayout>
      <Box sx={{ m: 1 }}>
        <Toolbar>
          <Typography variant='h6'>Dashboard</Typography>
        </Toolbar>
        <EndorsedIM />
      </Box>
    </AdminLayout>
  );
}
