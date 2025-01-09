import React, { useMemo } from "react";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  Grid2,
  Button,
} from "@mui/material";
import Iconify from "@components/iconify";
import NextLink from "next/link";
import { get } from "lodash";
import { ROOTS, ROOTS_CONTENT, ROOTS_INTEREST } from "@constants/routes";
import Image from "@components/image";
import { useRouter } from "next/navigation";
const languages = {
  valueCompany: "บริษัท อินเตอร์จ๊อบ จำกัด",
  labelContact: "ติดต่อ",
};

const LINKS = [
  {
    headline: "อินเตอร์จ๊อบ",
    children: [
      { name: "หน้าหลัก", href: ROOTS },
      { name: "เนื้อหา", href: ROOTS_CONTENT },
    ],
  },
  {
    headline: "ข้อกำหนด",
    children: [
      {
        name: "เงื่อนไขและข้อกำหนด",
        href: "/privacy-policy",
        target: "_blank",
      },
    ],
  },
];

interface FooterProps {
  version: string;
}

export default function Footer({ version }: FooterProps) {
  const { push } = useRouter();

  const socials = useMemo(() => {
    return [
      {
        value: "facebook",
        name: "FaceBook",
        icon: "eva:facebook-fill",
        path: "https://wwww.facebook.com/",
        color: "#E02D69",
      },
      {
        value: "line",
        name: "Line",
        icon: "bi:line",
        path: "https://line.me/R/",
        color: "#E02D69",
      },
      {
        value: "phone",
        name: "Phone",
        icon: "mingcute:phone-line",
        color: "#E02D69",
        path: "tel://0857117774",
      },
    ];
  }, []);

  return (
    <Box component="footer" sx={{ bgcolor: "background.default" }}>
      <Divider />

      <Container sx={{ pt: 4 }}>
        <Grid2
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          <Grid2 size={{ xs: 8, md: 3 }}>
            <Typography variant="body1" sx={{ pr: { md: 5 } }}>
              {languages.valueCompany}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pr: { md: 5 } }}
            >
              ที่อยู่ 111/2 ตำบล??????? อำเภอ??????? จังหวัด??????
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1, pr: { md: 5 } }}
            >
              interjob@email.com
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pr: { md: 5 } }}
            >
              {languages.labelContact} 099 9999 999
            </Typography>

            <Stack
              alignItems={{ xs: "center", md: "flex-start" }}
              sx={{ pt: 2 }}
            >
              <Button
                size="large"
                variant="contained"
                sx={{ borderRadius: 3 }}
                startIcon={<Iconify icon="lets-icons:chat-fill" />}
                onClick={() => push(ROOTS_INTEREST)}
              >
                รับคำปรึกษาฟรี
              </Button>
            </Stack>

            <Stack
              spacing={1}
              direction="row"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
            >
              {socials.map((social) => (
                <NextLink
                  key={social.value}
                  href={social.path}
                  target="_blank"
                  passHref
                >
                  <IconButton key={social.name}>
                    <Iconify icon={social.icon} />
                  </IconButton>
                </NextLink>
              ))}
            </Stack>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 7 }}>
            <Stack
              spacing={5}
              alignItems={{ xs: "center", md: "flex-start" }}
              direction={{ xs: "column", md: "row" }}
            >
              <Stack
                spacing={2}
                alignItems={{ xs: "center", md: "flex-start" }}
                sx={{
                  flex: 1,
                  borderRadius: 1,
                  overflow: "hidden",
                  maxWidth: "200px",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{
                    alignItems: "center",
                    backgroundColor: "#66c05c",
                    px: 2,
                    py: 1,
                    width: 1,
                    cursor: "pointer",
                  }}
                  component={NextLink}
                  href="https://line.me/R/"
                  target="_blank"
                >
                  <Iconify width={32} icon="bi:line" color="common.white" />
                  <Stack spacing={0}>
                    <Typography variant="body2" color="common.white">
                      ไลน์ไอดี
                    </Typography>
                    <Typography color="common.white">@interjob</Typography>
                  </Stack>
                </Stack>
                <Stack
                  sx={{
                    px: 3,
                    py: 2,
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "0 !important",
                    backgroundColor: "background.paper",
                  }}
                >
                  <Image
                    src="/assets/images/qr.png"
                    sx={{ maxWidth: "200px" }}
                  />
                </Stack>
              </Stack>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: "center", md: "flex-start" }}
                  sx={{ flex: 1 }}
                >
                  <Typography
                    component="div"
                    variant="overline"
                    // color="text.secondary"
                  >
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <NextLink
                      key={link.name}
                      href={link.href}
                      target={get(link, "target", undefined)}
                      scroll={false}
                      passHref
                    >
                      {link.name}
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid2>
        </Grid2>
        <Typography
          variant="caption"
          component="div"
          color="text.disabled"
          sx={{ mt: 3, pb: 5, textAlign: { xs: "center", md: "left" } }}
        >
          © 1999. InterJob.com (เวอร์ชั่น {version})
        </Typography>
      </Container>
    </Box>
  );
}
