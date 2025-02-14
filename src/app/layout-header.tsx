"use client";

import Logo from "@components/logo";
import { HEADER } from "@constants/layout";
import useOffSetTop from "@hooks/useOffSetTop";
import useResponsive from "@hooks/useResponsive";
import {
  AppBar,
  Box,
  BoxProps,
  Button,
  Container,
  Stack,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import NavDesktop from "@components/header/desktop";
import NavMobile from "@components/header/mobile";
import { bgBlur } from "@utils/cssStyles";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import Iconify from "@components/iconify";
import { ROOTS_INTEREST } from "@constants/routes";
import NextLink from "next/link";

const navConfig = [
  {
    title: "หน้าหลัก",
    path: "/",
  },
  {
    title: "บทความ",
    path: "/contents",
  },
  {
    title: "งานทั้งหมด",
    path: "/jobs",
  },
];

// const BoxTextRunnerContainer = styled(Box)(() => ({
//   width: '100%',
//   overflow: "hidden",
//   whiteSpace: "nowrap",
//   position: "relative",
// }));

// const BoxTextRunnerWrapper = styled(Box)(() => ({
//   display: "inline-block",
//   paddingLeft: "100%",
//   animation: "scroll 20s linear infinite",
//   "@keyframes scroll": {
//     "0%": { transform: "translateX(100%)" },
//     "100%": { transform: "translateX(-100%)" },
//   },
// }));

interface Header {
  forceOffSetTop?: boolean;
  activeMenu?: string;
}

export default function Header({ forceOffSetTop = false, activeMenu }: Header) {
  const theme = useTheme();
  const { push } = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isDesktop = useResponsive("up", "md");
  const { isOffset } = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  const menus = useMemo(() => {
    return navConfig;
  }, []);

  return (
    <>
      <AppBar color="primary" sx={{ boxShadow: 0 }}>
        <Container
          sx={{
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {isDesktop && (
            <Typography variant="body2">อินเตอร์จ๊อบ.com</Typography>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={2}>
            <Stack
              direction="row"
              spacing={0.6}
              component={NextLink}
              href="https://www.facebook.com/profile.php?id=61560598166555"
              target="_blank"
              sx={{ cursor: "pointer" }}
            >
              <Iconify icon="line-md:facebook" />
              <Typography variant="body2">Interjob1999</Typography>
            </Stack>
            {isDesktop && (
              <Stack
                direction="row"
                spacing={0.6}
                component={NextLink}
                href="tel://0952534555"
                target="_blank"
                sx={{ cursor: "pointer" }}
              >
                <Iconify icon="line-md:phone-twotone" />
                <Typography variant="body2">095-2534-555</Typography>
              </Stack>
            )}
            <Stack
              direction="row"
              spacing={0.6}
              component={NextLink}
              href="https://lin.ee/bOqkEe8"
              target="_blank"
              sx={{ cursor: "pointer" }}
            >
              <Iconify icon="fontisto:line" />
              <Typography variant="body2">@interjob1999</Typography>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
      <AppBar color="transparent" sx={{ boxShadow: 0, marginTop: "40px" }}>
        <Toolbar
          // disableGutters
          sx={{
            height: {
              xs: HEADER.H_MOBILE,
              // md: HEADER.H_MAIN_DESKTOP,
              md: forceOffSetTop
                ? HEADER.H_MAIN_DESKTOP - 8
                : isOffset
                  ? HEADER.H_MAIN_DESKTOP - 8
                  : HEADER.H_MAIN_DESKTOP,
            },
            transition: theme.transitions.create(
              ["height", "background-color"],
              {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }
            ),
            ...bgBlur({ color: theme.palette.common.white, opacity: 0.64 }),
            ...(isOffset && {
              ...bgBlur({ color: theme.palette.common.white, opacity: 0.88 }),
            }),
          }}
        >
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Logo sx={{ height: { xs: 44, md: 64 } }} />
            {/* <BoxTextRunnerContainer>
              <BoxTextRunnerWrapper>
                <Typography component="p" sx={{ display: "inline-block" }}>
                  เปลี่ยนโอกาสให้เป็นความสำเร็จ ✈️ InterJob1999
                  ดูแลครบจบทุดขั้นตอน บริษัทรับจัดหางานถูกต้องตามกฎหมาย 100%
                </Typography>
              </BoxTextRunnerWrapper>
            </BoxTextRunnerContainer> */}
            <Box sx={{ flexGrow: 1 }} />
            {isDesktop && (
              <NavDesktop
                isOffset={isOffset || forceOffSetTop}
                active={activeMenu}
                data={menus}
              />
            )}

            {!isDesktop && (
              <NavMobile
                isOffset={isOffset || forceOffSetTop}
                data={navConfig}
              />
            )}

            {isDesktop && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => push(ROOTS_INTEREST)}
                sx={{ borderRadius: 24 }}
                startIcon={
                  <Iconify icon="iconamoon:information-circle-duotone" />
                }
              >
                ติดต่อสอบถามฟรี
              </Button>
            )}
          </Container>
        </Toolbar>
        {isOffset && <Shadow />}
      </AppBar>
    </>
  );
}

function Shadow({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: "auto",
        borderRadius: "50%",
        position: "absolute",
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.card,
        ...sx,
      }}
      {...other}
    />
  );
}
