import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { signIn, signOut } from "next-auth/react";
import AdminLoginButton from "../AdminLoginButton";
import AdminDrawerMenu from "./AdminDrawerMenu";
import { Stack } from "@mui/material";

export default function AdminHeader() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <AdminDrawerMenu />
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Typography variant='h6' component='a' href='/admin'>
            Admin
          </Typography>
          <AdminLoginButton onSignIn={signIn} onSignOut={signOut} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
