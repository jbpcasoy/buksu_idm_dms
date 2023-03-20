import useUser from "@/hooks/useUser";
import AdminHeader from "@/views/admin/layout/AdminHeader";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const { user, userError, userLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log({ user, userError, userLoading });
    if (userLoading || !user) return;

    if (user?.LoginRole?.Role === "FACULTY") {
      router.push("/my_ims");
    }
  }, [user, userError, userLoading]);

  if (user?.LoginRole?.Role !== "ADMIN") return null;

  return (
    <Box>
      <Box>
        <AdminHeader />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}
