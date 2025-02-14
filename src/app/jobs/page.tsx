"use client";

import { m } from "framer-motion";
import {
  Grid2,
  Container,
  Typography,
  alpha,
  styled,
  Stack,
} from "@mui/material";
import { bgGradient } from "@utils/cssStyles";
import { MotionViewport, varFade } from "@components/animate";
import { JobsCard } from "./card";
import { _mockJobs } from "./constants";

const StyledRoot = styled("div")(({ theme }) => ({
  position: "relative",
  ...bgGradient({
    color: alpha(theme.palette.common.white, 0.9),
    imgUrl: "/assets/background/overlay.jpg",
  }),
  padding: theme.spacing(20, 5, 8),
}));

export default function JobsPage() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack sx={{ pb: 3 }}>
          <Stack
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <m.div variants={varFade().inUp}>
              <Typography
                component="div"
                variant="overline"
                sx={{ color: "text.disabled" }}
              >
                อินเตอร์จ๊อบ
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography
                variant="h2"
                sx={{
                  textShadow: (theme) =>
                    theme.palette.mode === "light"
                      ? "unset"
                      : `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
                }}
              >
                งานทั้งหมด
              </Typography>
            </m.div>
          </Stack>
        </Stack>

        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <JobsCard job={_mockJobs[0]} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <JobsCard job={_mockJobs[1]} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <JobsCard job={_mockJobs[2]} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <JobsCard job={_mockJobs[3]} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <JobsCard job={_mockJobs[4]} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <JobsCard job={_mockJobs[5]} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <JobsCard job={_mockJobs[6]} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <JobsCard job={_mockJobs[7]} />
          </Grid2>
          {/* <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <JobsCard job={_mockJobs[8]} />
          </Grid2> */}
        </Grid2>
      </Container>
    </StyledRoot>
  );
}
