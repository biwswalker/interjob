"use client";

import { m } from "framer-motion";
import NextLink from "next/link";
import {
  Grid2,
  Container,
  CardContent,
  Typography,
  Card,
  Box,
  alpha,
  styled,
  Stack,
  Button,
} from "@mui/material";
import useResponsive from "@hooks/useResponsive";
import { fDate } from "@utils/formatTime";
import TextMaxLine from "@components/text-max-line";
import { ROOTS_CONTENT } from "@constants/routes";
import { kebabCase } from "change-case";
import Image from "@components/image";
import { bgGradient } from "@utils/cssStyles";
import { MotionViewport, varFade } from "@components/animate";
import Iconify from "@components/iconify";
import { useRouter } from "next/navigation";

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
            <BlogCard
              fullCard
              post={{
                title:
                  "ตรงกันข้ามกับความเชื่อที่นิยมกัน Lorem Ipsum ไม่ได้เป็นเพียงแค่ชุดตัวอักษรที่สุ่มขึ้นมามั่วๆ แต่หากมีที่มาจากวรรณกรรมละตินคลาสสิกชิ้นหนึ่งในยุค 45 ปีก่อนคริสตศักราช",
                cover: "/assets/images/content_1.jpg",
                createdAt: new Date().toISOString(),
                id: "1",
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <BlogCard
              fullCard
              post={{
                title: "มีท่อนต่างๆ ของ Lorem Ipsum ให้หยิบมาใช้งานได้มากมาย",
                cover: "/assets/images/content_2.jpg",
                createdAt: new Date().toISOString(),
                id: "2",
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <BlogCard
              fullCard
              post={{
                title:
                  "มีหลักฐานที่เป็นข้อเท็จจริงยืนยันมานานแล้ว ว่าเนื้อหาที่อ่านรู้เรื่องนั้นจะไปกวนสมาธิของคนอ่านให้เขวไปจากส่วนที้เป็น Layout",
                cover: "/assets/images/content_3.jpg",
                createdAt: new Date().toISOString(),
                id: "3",
              }}
            />
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

const StyledOverlay = styled("div")(({ theme }) => ({
  top: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: alpha(theme.palette.grey[900], 0.64),
}));

type IBlogPost = {
  id: string;
  cover: string;
  title: string;
  createdAt: Date | string | number;
  //   description: string;
  //   tags: string[];
  //   body: string;
};

type Props = {
  post: IBlogPost;
  fullCard?: boolean;
};

function BlogCard({ post, fullCard }: Props) {
  const isDesktop = useResponsive("up", "md");

  const { cover, title, createdAt } = post;

  if (isDesktop && fullCard) {
    return (
      <Card>
        <PostContent title={title} createdAt={createdAt} isLarge={fullCard} />
        <StyledOverlay />
        <Image alt="cover" src={cover} sx={{ height: 360 }} />
      </Card>
    );
  }

  return (
    <Card>
      <Box sx={{ position: "relative" }}>
        <Image alt="cover" src={cover} ratio="4/3" />
      </Box>
      <PostContent title={title} createdAt={createdAt} />
    </Card>
  );
}

type PostContentProps = {
  title: string;
  createdAt: Date | string | number;
  isLarge?: boolean;
  isSmall?: boolean;
};

export function PostContent({
  title,
  createdAt,
  isLarge,
  isSmall,
}: PostContentProps) {
  const isDesktop = useResponsive("up", "md");
  const linkTo = `${ROOTS_CONTENT}/${kebabCase(title)}`;

  return (
    <CardContent
      sx={{
        pt: 4.5,
        width: 1,
        ...((isLarge || isSmall) && {
          pt: 0,
          zIndex: 9,
          bottom: 0,
          position: "absolute",
          color: "common.white",
        }),
      }}
    >
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          color: "text.disabled",
          ...((isLarge || isSmall) && {
            opacity: 0.64,
            color: "common.white",
          }),
        }}
      >
        {fDate(createdAt)}
      </Typography>

      <NextLink href={linkTo} passHref>
        <TextMaxLine
          // asLink
          variant={isDesktop && isLarge ? "h5" : "subtitle2"}
          line={2}
          persistent
        >
          {title}
        </TextMaxLine>
      </NextLink>
    </CardContent>
  );
}
