import { Box, Container, Grid2, Stack } from "@mui/material";
import InterestedForm from "./form";
import { MotionViewport } from "@components/animate";
import ImageInterest from "./image";

export default function Interested() {
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
