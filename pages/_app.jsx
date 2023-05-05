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
import { NextSeo } from "next-seo";
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
    <>
      <NextSeo
        title='BukSU IMD DMS'
        description='The official Document Management System of the Center for Innovative Teaching and Learning.'
        openGraph={{
          type: "website",
          url: process.env.NEXT_PUBLIC_HOST_URL,
          title: "BukSU IMD DMS",
          description:
            "The official Document Management System of the Center for Innovative Teaching and Learning.",
          images: [
            {
              url: "/IMAGES/og_image.png",
              alt: "BukSU",
              width: 800,
              height: 600,
            },
          ],
        }}
      />
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
    </>
  );
}
