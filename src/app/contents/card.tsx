"use client";

import NextLink from "next/link";
import {
  CardContent,
  Typography,
  Card,
  Box,
  alpha,
  styled,
} from "@mui/material";
import useResponsive from "@hooks/useResponsive";
import { fDate } from "@utils/formatTime";
import TextMaxLine from "@components/text-max-line";
import { ROOTS_CONTENT } from "@constants/routes";
import Image from "@components/image";
import { IBlogPost } from "./constants";

const StyledOverlay = styled("div")(({ theme }) => ({
  top: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: alpha(theme.palette.grey[900], 0.64),
}));

type Props = {
  post: IBlogPost;
  fullCard?: boolean;
};

export function BlogCard({ post, fullCard }: Props) {
  const isDesktop = useResponsive("up", "md");

  const { cover, title, sortTitle, createdAt } = post;

  if (isDesktop && fullCard) {
    return (
      <Card>
        <PostContent
          title={title}
          sortTitle={sortTitle}
          createdAt={createdAt}
          isLarge={fullCard}
        />
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
      <PostContent title={title} sortTitle={sortTitle} createdAt={createdAt} />
    </Card>
  );
}

type PostContentProps = {
  title: string;
  sortTitle: string;
  createdAt: Date | string | number;
  isLarge?: boolean;
  isSmall?: boolean;
};

export function PostContent({
  title,
  sortTitle,
  createdAt,
  isLarge,
  isSmall,
}: PostContentProps) {
  const isDesktop = useResponsive("up", "md");
  const linkTo = `${ROOTS_CONTENT}/${sortTitle}`;

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
