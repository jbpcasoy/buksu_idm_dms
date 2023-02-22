import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Tooltip } from "@mui/material";
import { useSession } from "next-auth/react";

export default function AdminLoginButton({ onSignOut, onSignIn }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <Tooltip title='Logout'>
        <IconButton onClick={onSignOut} aria-label='delete'>
          <LogoutIcon sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Tooltip title='Login'>
      <IconButton onClick={onSignIn} aria-label='delete'>
        <LoginIcon sx={{ color: "white" }} />
      </IconButton>
    </Tooltip>
  );
}
