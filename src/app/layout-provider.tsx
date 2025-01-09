"use client";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@utils/createEmotionCache";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

import ThemeProvider from "@theme";
import ProgressBar from "@components/progress-bar";
import SnackbarProvider from "@components/snackbar";
import { MotionLazyContainer } from "@components/animate";
import { ThemeSettings, SettingsProvider } from "@components/settings";
import { Box } from "@mui/material";
import { th } from "date-fns/locale";

import "./globals.scss";
import "simplebar/dist/simplebar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "highlight.js/styles/monokai-sublime.css";
import Header from "./layout-header";
import Footer from "./layout-footer";

const clientSideEmotionCache = createEmotionCache();

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={th}>
        <SettingsProvider>
          <MotionLazyContainer>
            <ThemeProvider>
              <ThemeSettings>
                <SnackbarProvider>
                  <ProgressBar />
                  <Header />
                  <Layout>{children}</Layout>
                  <Footer version="1.0.0" />
                </SnackbarProvider>
              </ThemeSettings>
            </ThemeProvider>
          </MotionLazyContainer>
        </SettingsProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
}

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: "164px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box component="main" sx={{ flexGrow: 1, position: "relative" }}>
        {children}
      </Box>
    </Box>
  );
}
