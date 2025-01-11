"use client";

import { m } from "framer-motion";
import {
  Grid2,
  Container,
  Typography,
  alpha,
  styled,
  Stack,
  Button,
} from "@mui/material";
import { ROOTS_CONTENT } from "@constants/routes";
import { bgGradient } from "@utils/cssStyles";
import { MotionViewport, varFade } from "@components/animate";
import Iconify from "@components/iconify";
import { useRouter } from "next/navigation";
import { _mockBlogPosts } from "../contents/constants";
import { BlogCard } from "../contents/card";

const StyledRoot = styled("div")(({ theme }) => ({
  position: "relative",
  ...bgGradient({
    color: alpha(theme.palette.common.white, 0.9),
    imgUrl: "/assets/background/overlay.jpg",
  }),
  padding: theme.spacing(5, 5, 8),
}));

export default function BlogSection() {
  const { push } = useRouter();
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
                บทความ
              </Typography>
            </m.div>
          </Stack>
        </Stack>

        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
            <BlogCard fullCard post={_mockBlogPosts[0]} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <BlogCard fullCard post={_mockBlogPosts[1]} />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <BlogCard fullCard post={_mockBlogPosts[2]} />
          </Grid2>
        </Grid2>
      </Container>
      <Stack sx={{ flex: 1, py: 3, px: 3 }} alignItems="flex-end">
        <Button
          onClick={() => push(ROOTS_CONTENT)}
          variant="outlined"
          color="inherit"
          endIcon={<Iconify icon="basil:arrow-right-outline" />}
        >
          บทความทั้งหมด
        </Button>
      </Stack>
    </StyledRoot>
  );
}
