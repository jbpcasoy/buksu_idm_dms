import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { signIn, signOut } from "next-auth/react";
import AdminLoginButton from "../AdminLoginButton";
import AdminDrawerMenu from "./AdminDrawerMenu";

export default function AdminHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <AdminDrawerMenu />
          <Typography
            variant='h6'
            component='a'
            sx={{ flexGrow: 1 }}
            href='/admin'>
            Admin
          </Typography>
          <AdminLoginButton onSignIn={signIn} onSignOut={signOut} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
