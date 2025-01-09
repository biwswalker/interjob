"use client";

import Image from "@components/image";
import { Box, useTheme } from "@mui/material";

export default function ImageInterest() {
  const theme = useTheme();
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
        alignItems: "center",
        flexDirection: "column",
        p: theme.spacing(3, 2, 10, 2),
        [theme.breakpoints.up("md")]: {
          justifyContent: "center",
          p: theme.spacing(10, 0, 10, 0),
        },
      }}
    >
      <Box
        sx={{
        //   py: 5,
        //   px: 5,
          width: 1,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
          maxWidth: "var(--layout-auth-content-width)",
          overflow: 'hidden',
          maxHeight: '508px'
        }}
      >
        <Image src="/assets/images/interview.jpg" />
      </Box>
    </Box>
  );
}
