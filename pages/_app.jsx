import { UserContextProvider } from "@/contexts/UserContext";
import "@/styles/globals.css";
import theme from "@/theme";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { SessionProvider } from "next-auth/react";
import { closeSnackbar, SnackbarProvider } from "notistack";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  RadialLinearScale,
  Filler
);

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
          <UserContextProvider>
            <Component {...pageProps} />
          </UserContextProvider>
        </SessionProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
