"use client";

import { m } from "framer-motion";
import { alpha, styled } from "@mui/material/styles";
import { Box, Card, Container, Typography, Stack } from "@mui/material";
import Image from "@components/image";
import { MotionViewport, varFade } from "@components/animate";

const CARDS = [
  {
    icon: " /assets/icons/ic_search.svg",
    title: "ค้นหาและเลือกงานที่เหมาะสม",
    description:
      "เลือกตำแหน่งงานและประเทศที่คุณสนใจผ่านแพลตฟอร์มจัดหางานที่ได้รับการรับรอง เช่น บริษัทจัดหางานที่ถูกกฏหมาย",
  },
  {
    icon: " /assets/icons/ic_question.svg",
    title: "สมัครงานและเตรียมเอกสาร",
    description:
      "ยื่นใบสมัครพร้อมเอกสารสำคัญ เช่น หนังสือเดินทาง ประวัติการทำงาน ใบรับรองแพทย์ และเอกสารอื่นๆที่บริษัทจัดหางานแจ้งให้จัดเตรียม",
  },
  {
    icon: " /assets/icons/ic_contract.svg",
    title: "รอสัญญาจ้าง",
    description:
      "เมื่อสอบผ่านแล้วรอสัญญาจ้าง จากนายจ้างจะเป็นผู้เลือกตัว ไปทำงาน ขั้นตอนนี้จะใช้ระยะเวลาขึ้นอยู่กับ นายจ้างเท่านั้น",
  },
  {
    icon: " /assets/icons/ic_plane.svg",
    title: "บินไปทำงานต่างประเทศ",
    description:
      "เมื่อนายจ้างเรียกตัวแล้วจะทำการแจ้งให้เตรียมตัว เพื่อบินไปทำงานประเทศอิสลาเอล โดยรัฐจะเป็นผู้จัดส่งและดูแลตลอดการเดินทาง",
  },
];

const StyledRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(15, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: "center",
  padding: theme.spacing(5, 5),
  [theme.breakpoints.up("md")]: {
    boxShadow: "none",
  },
}));

export default function Works() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            textAlign: "center",
            mb: { xs: 5, md: 10 },
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

          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              ไปทำงาน
              <Typography variant="h2" component="span" color="warning.main">
                ต่างประเทศ
              </Typography>{" "}
              <br />
              ใน 4 ขั้นตอน
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 3 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            md: "repeat(4, 1fr)",
          }}
        >
          {CARDS.map((card, index) => {
            const isOdd = index % 2 === 1;

            return (
              <m.div variants={varFade().inUp} key={card.title}>
                <StyledCard
                  sx={{
                    ...(isOdd && {
                      boxShadow: (theme) => ({
                        md: `-40px 40px 80px ${
                          theme.palette.mode === "light"
                            ? alpha(theme.palette.grey[500], 0.16)
                            : alpha(theme.palette.common.black, 0.4)
                        }`,
                      }),
                    }),
                  }}
                >
                  <Image
                    src={card.icon}
                    alt={card.title}
                    sx={{ mx: "auto", width: 48, height: 48 }}
                  />

                  <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{ color: "text.secondary", fontWeight: "light" }}
                  >
                    {card.description}
                  </Typography>
                </StyledCard>
              </m.div>
            );
          })}
        </Box>

        <Stack
          spacing={3}
          sx={{
            textAlign: "center",
            mt: { xs: 5, md: 6 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="body1" fontWeight="light">
              <Typography variant="subtitle1" component="span">
                คำแนะนำ:
              </Typography>{" "}
              การทำงานในต่างประเทศอย่างถูกกฎหมายช่วยให้คุณมั่นใจในความปลอดภัยและสิทธิที่คุณควรได้รับ
              อย่าลืมตรวจสอบข้อมูลและเลือกช่องทางที่น่าเชื่อถือเสมอ!
            </Typography>
          </m.div>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
