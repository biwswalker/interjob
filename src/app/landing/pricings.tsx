"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { styled } from "@mui/material/styles";
import {
  Box,
  Tab,
  Tabs,
  Stack,
  Button,
  Container,
  Typography,
  StackProps,
} from "@mui/material";
import useResponsive from "@hooks/useResponsive";
import Iconify from "@components/iconify";
import { varFade, MotionViewport } from "@components/animate";
import { useRouter } from "next/navigation";
import { ROOTS_INTEREST } from "@constants/routes";

const StyledRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(15, 0),
  },
}));

export default function PricingPlans() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Description />
        <Content />
      </Container>
    </StyledRoot>
  );
}

function Description() {
  return (
    <Stack spacing={1} sx={{ mb: 4, textAlign: "center" }}>
      <m.div variants={varFade().inUp}>
        <Typography
          component="div"
          variant="overline"
          sx={{ mb: 2, color: "text.disabled" }}
        >
          อินเตอร์จ๊อบ
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography variant="h2">ค่าใช้จ่าย</Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography sx={{ color: "text.secondary" }}>
          ค่าใช้จ่ายในการไปทำงานประเทศอิสลาเอล
        </Typography>
      </m.div>
    </Stack>
  );
}

const _plans = [
  {
    tab: "study",
    license: "เรียนและสอบ",
    commons: [
      "เรียนภาษาอังกฤษเตรียมสอบ 10,000 บาท",
      "สมัครสอบ (24USD) 820 บาท",
    ],
    options: [
      //   "JavaScript version",
      //   "TypeScript version",
      //   "Design Resources",
      //   "Commercial applications",
    ],
    icons: [
      //   "/assets/icons/platforms/ic_sketch.svg",
    ],
    price: "10,820 บาท",
  },
  {
    tab: "contract",
    license: "ได้รับสัญญาจ้าง",
    commons: [
      "ตรวจสุขภาพ 1,500 บาท",
      "ตรวจประวัติอาชญากรรม CID 100 บาท",
      "ฝึกอบรมวัฒนธรรมต่างประเทศ เตรียมบิน 4,500 บาท",
    ],
    options: [],
    icons: [],
    price: "6,100 บาท",
  },
  {
    tab: "letgo",
    license: "บินไปทำงาน",
    commons: [
      "ทำหนังสือเดินทาง 1,040 บาท",
      "บัตรสมาชิกกองทุน 450 บาท",
      "ตั๋วเครื่องบินไปต่างประเทศ 10,450 บาท",
    ],
    options: [],
    icons: [],
    price: "11,940 บาท",
  },
];

function Content() {
  const { push } = useRouter();
  const isDesktop = useResponsive("up", "md");

  const [currentTab, setCurrentTab] = useState("study");

  const desktopList = (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      sx={{
        borderRadius: 2,
        border: (theme) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      {_plans.map((plan) => (
        <m.div key={plan.license} variants={varFade().in}>
          <PlanCard key={plan.license} plan={plan} />
        </m.div>
      ))}
    </Box>
  );

  const mobileList = (
    <>
      <Stack alignItems="center" sx={{ mb: 5 }}>
        <Tabs
          value={currentTab}
          onChange={(event, newValue) => setCurrentTab(newValue)}
        >
          {_plans.map((tab) => (
            <Tab key={tab.license} value={tab.tab} label={tab.license} />
          ))}
        </Tabs>
      </Stack>

      <Box
        sx={{
          borderRadius: 2,
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        {_plans.map(
          (tab) =>
            tab.tab === currentTab && (
              <PlanCard
                key={tab.license}
                plan={tab}
                sx={{
                  borderLeft: (theme) => `dashed 1px ${theme.palette.divider}`,
                }}
              />
            )
        )}
      </Box>
    </>
  );

  return (
    <>
      {isDesktop ? desktopList : mobileList}

      <m.div variants={varFade().in}>
        <Box
          sx={{
            textAlign: "center",
            mt: {
              xs: 5,
              md: 8,
            },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h4">
              ค่าใช้จ่ายตอนอยู่ประเทศอิสลาเอลในช่วงต้น
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography sx={{ mt: 2, mb: 5, color: "text.secondary" }}>
              เงินสำรองติดตัวเพื่อใช้จ่ายใน 1-2 เดือนแรก{" "}
              <Typography
                component="span"
                fontWeight="bold"
                sx={{ mt: 2, mb: 5, color: "text.primary" }}
              >
                30,000
              </Typography>{" "}
              บาท
            </Typography>
          </m.div>
        </Box>
      </m.div>

      {/* <m.div variants={varFade().in}>
        <Box
          sx={{
            textAlign: "center",
            mt: {
              xs: 5,
              md: 10,
            },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h4">ยังมีคำถามอยู่ใช่ไหม?</Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography sx={{ mt: 2, mb: 5, color: "text.secondary" }}>
              โปรดอธิบายกรณีของคุณเพื่อรับคำแนะนำที่ถูกต้องที่สุด
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Button
              color="inherit"
              size="large"
              variant="contained"
              onClick={() => push(ROOTS_INTEREST)}
              href="mailto:support@minimals.cc?subject=[Feedback] from Customer"
              sx={{
                bgcolor: "text.primary",
                color: (theme) =>
                  theme.palette.mode === "light" ? "common.white" : "grey.800",
                "&:hover": {
                  bgcolor: "text.primary",
                },
              }}
            >
              รับคำแนะนำ
            </Button>
          </m.div>
        </Box>
      </m.div> */}
    </>
  );
}

// ----------------------------------------------------------------------

interface PlanCardProps extends StackProps {
  plan: {
    license: string;
    commons: string[];
    options: string[];
    icons: string[];
    price: string;
    tab: string;
  };
}

function PlanCard({ plan, sx, ...other }: PlanCardProps) {
  const { license, commons, options, icons, price, tab } = plan;

  const study = tab === "study";
  const contract = tab === "contract";
  const letgo = tab === "letgo";

  return (
    <Stack
      spacing={2}
      sx={{
        height: 1,
        p: 5,
        ...(contract && {
          borderLeft: (theme) => `dashed 1px ${theme.palette.divider}`,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...sx,
        }),
      }}
      {...other}
    >
      <Stack spacing={1}>
        <Typography
          variant="overline"
          component="div"
          sx={{ color: "text.disabled" }}
        >
          ค่าใช้จ่าย
        </Typography>

        <Box sx={{ position: "relative" }}>
          <Typography variant="h4">{license}</Typography>
          <Box
            sx={{
              left: 0,
              bottom: 4,
              width: 80,
              height: 8,
              opacity: 0.48,
              bgcolor: "warning.main",
              position: "absolute",
              ...(study && { bgcolor: "primary.main" }),
              ...(contract && { bgcolor: "warning.main" }),
              ...(letgo && { bgcolor: "success.main" }),
            }}
          />
        </Box>
      </Stack>

      <Stack spacing={2}>
        {commons.map((option) => (
          <Stack key={option} spacing={1} direction="row" alignItems="center">
            <Iconify icon="eva:checkmark-fill" width={16} />
            <Typography variant="body2">{option}</Typography>
          </Stack>
        ))}
      </Stack>
      <Box sx={{ flexGrow: 1 }} />
      <Stack alignItems="flex-end">
        <Typography typography="h3">{price}</Typography>
      </Stack>
    </Stack>
  );
}
