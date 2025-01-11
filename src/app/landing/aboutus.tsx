"use client";

import { m } from "framer-motion";
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, Button, Container, Typography, Grid2 } from "@mui/material";
import useResponsive from "@hooks/useResponsive";
import Image from "@components/image";
import Iconify from "@components/iconify";
import { MotionViewport, varFade } from "@components/animate";
import { ROOTS_INTEREST } from "@constants/routes";
import { useRouter } from "next/navigation";

const StyledRoot = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

export default function AboutWhat() {
  const theme = useTheme();
  const { push } = useRouter();

  const isDesktop = useResponsive("up", "md");

  const isLight = theme.palette.mode === "light";

  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Grid2 container spacing={3}>
          {isDesktop && (
            <Grid2 size={{ xs: 12, md: 6, lg: 7 }} sx={{ pr: { md: 7 } }}>
              <Grid2 container spacing={3} alignItems="flex-end">
                <Grid2 size={{ xs: 6 }}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 1"
                      src="/assets/images/content_3.jpg"
                      ratio="3/4"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow,
                      }}
                    />
                  </m.div>
                </Grid2>
                <Grid2 size={{ xs: 6 }}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 2"
                      src="/assets/images/content_4.jpg"
                      ratio="1/1"
                      sx={{ borderRadius: 2 }}
                    />
                  </m.div>
                </Grid2>
              </Grid2>
            </Grid2>
          )}

          <Grid2 size={{ xs: 12, md: 6, lg: 5 }}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                อินเตอร์จ๊อบคืออะไร
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? "text.secondary"
                      : "common.white",
                }}
              >
                Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
                ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
                มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
                16
                เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง
                Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
                แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์
                และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง
                มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960 เมื่อแผ่น Letraset
                วางจำหน่ายโดยมีข้อความบนนั้นเป็น Lorem Ipsum และล่าสุดกว่านั้น
                คือเมื่อซอฟท์แวร์การทำสื่อสิ่งพิมพ์ (Desktop Publishing) อย่าง
                Aldus PageMaker ได้รวมเอา Lorem Ipsum เวอร์ชั่นต่างๆ
                เข้าไว้ในซอฟท์แวร์ด้วย
              </Typography>
            </m.div>

            <Box sx={{ my: 5 }}>
              {/* {_skills.map((progress) => (
                <m.div key={progress.label} variants={varFade().inRight}>
                  <ProgressItem progress={progress} />
                </m.div>
              ))} */}
            </Box>

            <m.div variants={varFade().inRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                onClick={() => push(ROOTS_INTEREST)}
                endIcon={<Iconify icon="ic:round-arrow-right-alt" width={24} />}
              >
                ติดต่อสอบถามฟรี
              </Button>
            </m.div>
          </Grid2>
        </Grid2>
      </Container>
    </StyledRoot>
  );
}
