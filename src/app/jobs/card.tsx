"use client";

import NextLink from "next/link";
import {
  CardContent,
  Typography,
  Card,
  Box,
  alpha,
  styled,
  Button,
  Stack,
} from "@mui/material";
import useResponsive from "@hooks/useResponsive";
import Image from "@components/image";
import { IJob } from "./constants";
import Iconify from "@components/iconify";

const StyledOverlay = styled("div")(({ theme }) => ({
  top: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: alpha(theme.palette.grey[900], 0.64),
}));

type Props = {
  job: IJob;
  fullCard?: boolean;
};

export function JobsCard({ job, fullCard }: Props) {
  const isDesktop = useResponsive("up", "md");

  const { title, description, thumbnail, salary } = job;

  if (isDesktop && fullCard) {
    return (
      <Card>
        <PostContent
          title={title}
          description={description}
          salary={salary}
          isLarge={fullCard}
        />
        <StyledOverlay />
        <Image alt="cover" src={thumbnail} sx={{ height: 360 }} />
      </Card>
    );
  }

  return (
    <Card sx={{ height: 1 }}>
      <Box sx={{ position: "relative" }}>
        <Image alt="thumbnail" src={thumbnail} ratio="4/3" />
      </Box>
      <PostContent title={title} description={description} salary={salary} />
    </Card>
  );
}

type PostContentProps = {
  title: string;
  description: string;
  salary: string;
  isLarge?: boolean;
  isSmall?: boolean;
};

export function PostContent({
  title,
  description,
  salary,
  isLarge,
  isSmall,
}: PostContentProps) {
  const isDesktop = useResponsive("up", "md");
  const linkTo = `https://lin.ee/bOqkEe8`;

  return (
    <CardContent
      sx={{
        pt: 1,
        width: 1,
        flexGrow: 1,
        ...((isLarge || isSmall) && {
          pt: 0,
          zIndex: 9,
          bottom: 0,
          position: "absolute",
          color: "common.white",
        }),
      }}
    >
      <Stack>
        <Typography
          variant={isDesktop && isLarge ? "h6" : "subtitle1"}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{
            color: "text.disabled",
            ...((isLarge || isSmall) && {
              color: "common.white",
            }),
          }}
        >
          {description}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{
            color: "text.disabled",
            ...((isLarge || isSmall) && {
              color: "common.white",
            }),
          }}
        >
          {salary}
        </Typography>
        <Button
          startIcon={<Iconify icon="bi:line" color="common.white" />}
          variant="contained"
          size="large"
          color="success"
          fullWidth
          sx={{
            backgroundColor: "#66c05c",
            color: "common.white",
          }}
          component={NextLink}
          href={linkTo}
          target="_blank"
        >
          ติดต่อได้เลย
        </Button>
      </Stack>
    </CardContent>
  );
}
