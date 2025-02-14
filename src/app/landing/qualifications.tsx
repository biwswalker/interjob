"use client";

import { m } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Box,
  Container,
  Stack,
  Typography,
  Grid2,
} from "@mui/material";
import { bgGradient } from "@utils/cssStyles";
import Iconify from "@components/iconify";
import Image from "@components/image";
import { MotionViewport, varFade } from "@components/animate";
import { ROOTS_INTEREST } from "@constants/routes";

const qualifications = [
  [
    "งานอุตสาหกรรม และก่อสร้าง รับเฉพาะเพศชาย",
    "งานเกษตร รับเพศชาย – หญิง",
    "อายุระหว่าง 18 – 39 ปีบริบูรณ์",
    "ไม่จำกัดวุฒิการศึกษา",
    "สายตาไม่บอดสี",
  ],
  [
    "ความประพฤติดี ไม่มีคดีอาญา",
    "ไม่เคยทำผิดกฎหมายต่างประเทศ",
    "ไม่มีประวัติยาเสพติด",
    "ไม่เคยอาศัยในประเทศต่างประเทศ รวมกัน 5 ปี หรือมากกว่า 5 ปีขึ้นไป",
    "ร่างกายสมบูรณ์ สุขภาพแข็งแรง และไม่เป็นโรคร้ายแรง",
  ],
];

export default function QualificationSection() {
  const theme = useTheme();

  return (
    <Container component={MotionViewport}>
      <Stack
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
        sx={{
          ...bgGradient({
            direction: "135deg",
            startColor: theme.palette.primary.main,
            endColor: theme.palette.primary.dark,
          }),
          borderRadius: 2,
          //   pb: { xs: 5, md: 0 },
          p: { xs: 5, md: 4 },
        }}
      >
        {/* <Content /> */}
        <Description />
      </Stack>
    </Container>
  );
}

function Description() {
  return (
    <Box
      sx={{
        textAlign: {
          xs: "center",
          md: "left",
        },
      }}
    >
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: "common.white", typography: "h2", mb: 1 }}
      >
        คุณสมบัติ
      </Box>
      <Box
        component={m.div}
        variants={varFade().inDown}
        sx={{ color: "common.white", typography: "body1", mb: 2 }}
      >
        คุณสมบัติ คุณสมบัติของผู้ที่ต้องการสมัครไปทำงานอิสลาเอล
      </Box>

      <Grid2 container spacing={{ xs: 1, md: 2 }} sx={{ mb: 3 }}>
        {qualifications.map((items, index) => (
          <Grid2 sx={{ xs: 12, md: 6 }} key={`grid-${index}`}>
            <Stack spacing={0.8} component={m.div} variants={varFade().inUp}>
              {items.map((item, itenIndex) => (
                <Stack
                  direction="row"
                  // alignItems="center"
                  // justifyContent="start"
                  key={`${item}-${itenIndex}`}
                >
                  <Iconify
                    icon="lets-icons:star-fill"
                    color="common.white"
                    sx={{ mr: 1 }}
                  />
                  <Typography
                    color="common.white"
                    fontWeight="light"
                    textAlign="start"
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid2>
        ))}
      </Grid2>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "flex-start" }}
        spacing={2}
      >
        <m.div variants={varFade().inRight}>
          <Button
            color="inherit"
            size="large"
            variant="contained"
            target="_blank"
            rel="noopener"
            href={ROOTS_INTEREST}
            sx={{
              color: "grey.800",
              bgcolor: "common.white",
            }}
          >
            สนใจ, ปรึกษาเลย
          </Button>
        </m.div>

        {/* <m.div variants={varFade().inRight}>
          <Button
            color="inherit"
            size="large"
            variant="outlined"
            target="_blank"
            rel="noopener"
            href={PATH_FREE_VERSION}
            endIcon={
              <Iconify
                icon="eva:external-link-fill"
                width={16}
                sx={{ mr: 0.5 }}
              />
            }
            sx={{
              color: "common.white",
              "&:hover": { borderColor: "currentColor" },
            }}
          >
            Get Free Version
          </Button>
        </m.div> */}
      </Stack>
    </Box>
  );
}

// ----------------------------------------------------------------------

function Content() {
  return (
    <Stack component={m.div} variants={varFade().inUp} alignItems="center">
      <m.div
        animate={{
          y: [-20, 0, -20],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Image
          visibleByDefault
          disabledEffect
          alt="rocket"
          src="/assets/images/home/rocket.png"
          sx={{ maxWidth: 460 }}
        />
      </m.div>
    </Stack>
  );
}
