import { Box } from "@mui/material";
import AdminHeader from "./AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <Box>
      <Box>
        <AdminHeader />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}
