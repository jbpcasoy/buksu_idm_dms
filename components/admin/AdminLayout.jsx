import useUser from "@/hooks/useUser";
import AdminHeader from "@/views/admin/layout/AdminHeader";
import { Box } from "@mui/material";

export default function AdminLayout({ children }) {
  const { user, userLoading, userError } = useUser();
  return (
    <Box>
      <Box>
        <AdminHeader />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}
