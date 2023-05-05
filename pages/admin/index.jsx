import AdminLayout from "@/components/admin/AdminLayout";
import EndorsedIM from "@/components/admin/dashboard/EndorsedIM";
import FacultyChart from "@/components/admin/dashboard/FacultyChart";
import IMPieChart from "@/components/admin/dashboard/IMPieChart";
import { Box, Grid, Toolbar, Typography } from "@mui/material";

export default function AdminHome() {
  return (
    <AdminLayout>
      <Box sx={{ m: 1 }}>
        <Toolbar>
          <Typography variant='h6'>Dashboard</Typography>
        </Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <EndorsedIM />
          </Grid>
          <Grid item xs={12} md={4}>
            <IMPieChart />
          </Grid>
          <Grid item xs={12}>
            <FacultyChart />
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
}
