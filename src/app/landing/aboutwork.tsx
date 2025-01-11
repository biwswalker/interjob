"use client";

import { m } from "framer-motion";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { Box, Paper, Container, Typography, Grid2 } from "@mui/material";
import useResponsive from "@hooks/useResponsive";
import { bgBlur, bgGradient } from "@utils/cssStyles";
import { MotionViewport, varFade } from "@components/animate";

const TESTIMONIALS = [
  {
    name: "ภาคก่อสร้าง",
    available: 'จำนวน 15,000 คน',
    content: `พฤษภาคม 2548 เป็นต้นมา  โดยให้บริษัทจัดหางานอิสราเอลที่รัฐบาลคัดเลือกจำนวน 42 บริษัทเป็นนายจ้างแทนที่ให้ผู้รับเหมาก่อสร้างเป็นนายจ้างเช่นเดิม  บริษัทจัดหางานเหล่านี้จะได้โควตาวีซ่าจากรัฐบาลโดยตรง เป็นผู้รับผิดชอบจ่ายค่าจ้างให้ลูกจ้าง ทำประกัน รวมทั้งจัดสวัสดิการต่าง ๆ ให้ลูกจ้างของตนด้วย   ซึ่งโควต้าจำนวน 15,000 คนนี้  รวมถึงแรงงานต่างชาติที่ทำงานก่อสร้างในประเทศอิสราเอลอยู่แล้ว โดยรัฐบาลอิสราเอลจะพิจารณาให้นำเข้าต่อเมื่อมีแรงงานคนเก่าเดินทางออกนอกประเทศไปแล้ว   เป็นการนำเข้าเพื่อทดแทนแรงงานเก่าเท่านั้น`,
  },
  {
    name: "งานอุตสาหกรรมบริการและร้านอาหาร",
    available: 'จำนวน 1,500 คน',
    content: `ได้แยกโควต้าเป็นงานอุตสาหกรรมบริการ จำนวน 1,500 คน   และงานในร้านอาหารที่ต้องการผู้ชำนาญงานและมีฝีมือ ซึ่งคนอิสราเอลทำไม่ได้ เช่นประกอบอาหารไทย ญี่ปุ่น จีน  จำนวน 1,150 คน `,
  },
  {
    name: "งานเกษตร",
    available: 'จำนวน 26,000 คน',
    content: `โควตางานเกษตร 26,000 คน รวมถึงแรงงานที่ทำงานในอิสราเอลแล้ว โดยทุกเดือนมกราคม หน่วยงานที่เกี่ยวข้องจะทบทวนโควตา นายจ้างที่มีแรงงานต่างชาติและต้องการเพิ่มต้องจ้างแรงงานผิดกฎหมายที่ถูกจับก่อน และต่อวีซ่าลูกจ้างภายในเดือนกุมภาพันธ์ เมื่อทราบจำนวนแรงงานที่ขาดจึงอนุญาตให้นำเข้าแรงงานใหม่แทนคนเดิมที่เดินทางกลับ`,
  },
  {
    name: "งานดูแลคนชราและผู้พิการ",
    available: 'ตามตวามจำเป็น',
    content: `ในปี 2549 ทางการอิสราเอลไม่จำกัดจำนวนโควต้าเพราะมีคนชราและผู้พิการต้องการคนดูแลมากขึ้น ซึ่งเป็นสิ่งจำเป็น ประกอบกับคนอิสราเอลไม่นิยมทำงานนี้ หรือถ้าจ้างคนอิสราเอลต้องจ้างในอัตราค่าจ้างสูงมาก  อย่างไรก็ตาม ก่อนจะอนุญาตจ้างแรงงานต่างชาติ จะมีการตรวจสอบ หากเห็นว่าจำเป็นจึงจะอนุญาตให้จ้างได้ เนื่องจากเป็นธุรกิจที่มีความต้องการแรงงานต่างชาติมาก ขณะนี้จึงมีบริษัทจัดหางานอิสราเอลที่ได้รับอนุญาตให้นำเข้าแรงงานต่างชาติไปทำงานดูแลคนชรา คนป่วย และผู้พิการในประเทศอิสราเอลประมาณ 400 บริษัท`,
  },
];

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: "/assets/images/content_2.jpg",
  }),
  textAlign: "center",
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    padding: 0,
    height: 840,
    textAlign: "left",
    overflow: "hidden",
  },
}));

export default function AboutWork() {
  const isDesktop = useResponsive("up", "md");

  return (
    <StyledRoot>
      <Container
        component={MotionViewport}
        sx={{ position: "relative", height: 1 }}
      >
        <Grid2
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ height: 1 }}
        >
          <Grid2 size={{ xs: 10, md: 4 }}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <m.div variants={varFade().inUp}>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  อินเตอร์จ๊อบ
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: "common.white" }}>
                  ข้อมูลด้านแรงงาน
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: "common.white", fontWeight: "light" }}>
                  ความต้องการแรงงานต่างชาติในอิสราเอลมีจำนวนมาก
                  โดยเฉพาะในสาขาอาชีพที่ใช้แรงงานไร้ฝีมือ งานสกปรก อันตราย
                  และงานหนัก ซึ่งชาวอิสราเอลไม่ต้องการทำ
                  แต่ทางการอิสราเอลอนุญาตนำเข้าแรงงานต่างชาติใน 4
                  ประเภทกิจการเท่านั้น คือ ภาคงานเกษตร , ภาคการก่อสร้าง ,
                  ภาคงานบริการ (ดูแลคนชราและผู้พิการ) และภาคอุตสาหกรรมบริการ
                  และร้านอาหาร
                </Typography>
                <Typography
                  sx={{ color: "common.white", pt: 2, fontWeight: "light" }}
                >
                  นอกจากนี้
                  รัฐบาลอิสราเอลมีการควบคุมและกำหนดโควต้าการนำเข้าแรงงานต่างชาติทุกปีโดยในปีพ.ศ.
                  2549 ได้กำหนดโควตาอนุญาตให้จ้างแรงงานต่างชาติ ดังนี้
                </Typography>
              </m.div>
            </Box>
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 7, lg: 6 }}
            sx={{
              right: { md: 24 },
              position: { md: "absolute" },
            }}
          >
            <Grid2 container spacing={isDesktop ? 3 : 0} alignItems="center">
              <Grid2 size={{ xs: 12, md: 6 }}>
                {TESTIMONIALS.slice(0, 2).map((testimonial) => (
                  <m.div key={testimonial.name} variants={varFade().inUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                {TESTIMONIALS.slice(2, 4).map((testimonial) => (
                  <m.div key={testimonial.name} variants={varFade().inUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </StyledRoot>
  );
}

type TestimonialCardProps = {
  testimonial: {
    name: string;
    available: string;
    content: string;
  };
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const theme = useTheme();

  const { name, available, content } = testimonial;

  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: "common.white",
        ...bgBlur({
          color: theme.palette.common.white,
          opacity: 0.04,
        }),
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>

      <Typography
        gutterBottom
        component="div"
        variant="caption"
        sx={{ color: "grey.500" }}
      >
        {available}
      </Typography>
      {/* <Rating value={rating} readOnly size="small" /> */}

      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}
