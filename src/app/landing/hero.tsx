"use client";

import { MotionViewport, varFade } from "@components/animate";
import Iconify from "@components/iconify";
import { ROOTS_INTEREST } from "@constants/routes";
import useResponsive from "@hooks/useResponsive";
import {
  alpha,
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { bgGradient, textGradient } from "@utils/cssStyles";
import { m, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

const StyledRoot = styled("div")(({ theme }) => ({
  position: "relative",
  ...bgGradient({
    color: alpha(theme.palette.common.white, 0.88),
    imgUrl: "/assets/background/overlay.jpg",
  }),
}));

const StyledDescription = styled(m.div)(({ theme }) => ({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(8, 0),
  height: "100%",
  gap: "12px",
  textAlign: "center",
}));

const StyledGradientText = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.grey[300]} 0%, ${theme.palette.primary.main} 25%, ${theme.palette.grey[300]} 50%, ${theme.palette.primary.main} 75%, ${theme.palette.grey[300]} 100%`
  ),
  backgroundSize: "600%",
  fontFamily: "'Barlow', sans-serif",
  fontSize: `${64 / 16}rem`,
  fontWeight: 600,
  textAlign: "center",
  lineHeight: 0.8,
  padding: 0,
  marginTop: 8,
  marginBottom: 8,
  letterSpacing: 8,
  [theme.breakpoints.up("md")]: {
    fontSize: `${84 / 16}rem`,
  },
}));

const StyledGradientYellowText = styled(m.h1)(({ theme }) => ({
  ...textGradient(
    `300deg, ${theme.palette.warning.dark} 0%, ${theme.palette.warning.main} 25%, ${theme.palette.warning.dark} 50%, ${theme.palette.warning.main} 75%, ${theme.palette.warning.dark} 100%`
  ),
  backgroundSize: "600%",
  fontFamily: "'Barlow', sans-serif",
  fontSize: `${64 / 16}rem`,
  fontWeight: 600,
  textAlign: "center",
  lineHeight: 0.8,
  padding: 0,
  marginTop: 8,
  marginBottom: 8,
  letterSpacing: 8,
  [theme.breakpoints.up("md")]: {
    fontSize: `${84 / 16}rem`,
  },
}));

export default function Hero() {
  const theme = useTheme();
  const { push } = useRouter();
  const isDesktop = useResponsive("up", "md");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.23], [0.72, 1]);
  const y = useTransform(scrollYProgress, [0, 0.9], ["10%", "0%"]);

  return (
    <>
      <StyledRoot>
        <Container component={MotionViewport}>
          <Grid2 container>
            <Grid2 size={{ xs: 12 }}>
              <StyledDescription style={{ y, opacity }}>
                <m.div variants={varFade().in}>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <StyledGradientText
                      animate={{ backgroundPosition: "200% center" }}
                      transition={{
                        repeatType: "reverse",
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity,
                      }}
                    >
                      Inter
                    </StyledGradientText>
                    <StyledGradientYellowText
                      animate={{ backgroundPosition: "200% center" }}
                      transition={{
                        repeatType: "reverse",
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity,
                      }}
                    >
                      Job
                    </StyledGradientYellowText>
                    <StyledGradientText
                      animate={{ backgroundPosition: "200% center" }}
                      transition={{
                        repeatType: "reverse",
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity,
                      }}
                    >
                      1999
                    </StyledGradientText>
                  </Stack>
                </m.div>

                <m.div variants={varFade().in}>
                  <Typography
                    variant="h4"
                    fontWeight="light"
                    color="text.secondary"
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                        md: "20px",
                        lg: "22px",
                      },
                    }}
                  >
                    สร้างอนาคตที่มั่นคงในต่างแดน
                    ด้วยบริการจัดหางานที่เชื่อถือได้และกระบวนการที่โปร่งใสทุกขั้นตอน
                    {/* ไปทำงานถูกกฏหมาย ผ่านขั้นตอนสอบ และส่งเดินทางโดยรัฐบาล */}
                    {isDesktop ? <br /> : <> </>}
                    ถูกต้องตามกฏหมาย100%
                  </Typography>
                </m.div>

                <m.div variants={varFade().in}>
                  <Stack
                    spacing={1.5}
                    direction={{ xs: "column-reverse", sm: "row" }}
                    sx={{ my: 5 }}
                  >
                    <Stack alignItems="center" spacing={2}>
                      <Button
                        color="primary"
                        size="large"
                        variant="contained"
                        onClick={() => push(ROOTS_INTEREST)}
                        sx={{ borderRadius: 3 }}
                        startIcon={
                          <Iconify
                            icon="lets-icons:chat-alt-2-duotone"
                            width={24}
                          />
                        }
                      >
                        รับคำปรีกษาฟรี
                      </Button>
                    </Stack>
                  </Stack>
                </m.div>
              </StyledDescription>
            </Grid2>
          </Grid2>
        </Container>
      </StyledRoot>
    </>
  );
}
