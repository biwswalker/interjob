"use client";

import { alpha, Box, Container, Grid2, Stack, Typography } from "@mui/material";
import InterestedForm from "./form";
import { MotionViewport } from "@components/animate";
import ImageInterest from "./image";
import useResponsive from "@hooks/useResponsive";

export default function Interested() {
  const isDesktop = useResponsive("up", "md");
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          "&::before": {
            width: 1,
            height: 1,
            zIndex: -1,
            content: "''",
            opacity: 0.16,
            position: "absolute",
            backgroundColor: "background.neutral",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundImage: `url(/assets/background/overlay2.jpg)`,
          },
        }}
      >
        <Container
          sx={{ pb: 4, pt: { xs: 12, md: 12 } }}
          component={MotionViewport}
        >
          <Stack sx={{ pt: { xs: 4, md: 8 } }}>
            <Stack
              spacing={1}
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {/* <Typography
                component="div"
                variant="overline"
                sx={{ color: "text.disabled" }}
              >
                อินเตอร์จ๊อบ
              </Typography> */}
              <Stack spacing={0}>
                <Typography color="text.primary" variant="h4">
                  เปลี่ยนโอกาสให้เป็นความสำเร็จ ✈️
                </Typography>
                <Typography
                  color="text.secondary"
                  variant={isDesktop ? "body1" : "body2"}
                >
                  InterJob1999 ดูแลครบจบทุดขั้นตอน
                  บริษัทรับจัดหางานถูกต้องตามกฎหมาย 100%
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Grid2 container spacing={{ xs: 0, md: 3 }}>
              <Grid2 size={{ xs: 0, md: 5 }}>
                <ImageInterest />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 7 }}>
                <InterestedForm />
              </Grid2>
            </Grid2>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
