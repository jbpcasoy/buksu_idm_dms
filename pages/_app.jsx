import "@/styles/globals.css";
import theme from "@/theme";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";
import { closeSnackbar, SnackbarProvider } from "notistack";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        anchorOrigin={{
          horizontal: "left",
          vertical: "top",
        }}
        action={(key) => (
          <IconButton color='inherit' onClick={() => closeSnackbar(key)}>
            <CloseIcon />
          </IconButton>
        )}
      >
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
