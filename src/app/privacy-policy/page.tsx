"use client";

import { m } from "framer-motion";
import {
  Grid2,
  Container,
  Typography,
  alpha,
  styled,
  Stack,
} from "@mui/material";
import { bgGradient } from "@utils/cssStyles";
import { MotionViewport, varFade } from "@components/animate";

const StyledRoot = styled("div")(({ theme }) => ({
  position: "relative",
  ...bgGradient({
    color: alpha(theme.palette.common.white, 0.9),
    imgUrl: "/assets/background/overlay.jpg",
  }),
  padding: theme.spacing(20, 5, 8),
}));

export default function TermsPage() {
  return (
    <StyledRoot>
      <Container component={MotionViewport} maxWidth="sm">
        <Stack sx={{ pb: 3 }}>
          <Stack sx={{ textAlign: "center" }}>
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
                เงื่อนไขและข้อกำหนด
              </Typography>
            </m.div>
            <m.div variants={varFade().inDown}>
              <Stack
                spacing={2}
                alignItems="flex-start"
                textAlign="start"
                marginTop={5}
              >
                <Stack spacing={1}>
                  <Typography variant="subtitle1">1. บทนำ</Typography>
                  <Typography variant="body1">
                    ขอต้อนรับสู่เว็บไซต์ของเรา
                    เว็บไซต์นี้มีวัตถุประสงค์เพื่อให้คำปรึกษาและแนะแนวสำหรับการหางานทำต่างประเทศ
                    กรุณาอ่านเงื่อนไขและข้อกำหนดเหล่านี้อย่างละเอียดก่อนใช้บริการ
                    การเข้าใช้งานเว็บไซต์ของคุณถือเป็นการยอมรับเงื่อนไขเหล่านี้
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    2. ขอบเขตการให้บริการ
                  </Typography>
                  <Typography variant="body1">
                    เว็บไซต์ของเรามีวัตถุประสงค์เพื่อให้ข้อมูลและคำปรึกษาเกี่ยวกับโอกาสการทำงานในต่างประเทศ
                    รวมถึงการจัดหาแหล่งข้อมูล แนวทางการสมัครงาน
                    ข้อแนะนำทางกฎหมาย หรือการเตรียมตัวอื่น ๆ
                    สำหรับการเดินทางหรือการทำงานในต่างประเทศ อย่างไรก็ตาม
                    เว็บไซต์นี้ไม่ใช่ตัวแทนจัดหางาน
                    และเราไม่สามารถรับประกันได้ว่าผู้ใช้บริการจะได้รับการจ้างงาน
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    3. การเก็บรวบรวมและคุ้มครองข้อมูลส่วนบุคคล
                  </Typography>
                  <Typography variant="body1">
                    เรามุ่งมั่นในการคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้บริการ
                    ข้อมูลที่เราเก็บรวบรวมจะถูกนำไปใช้เฉพาะสำหรับวัตถุประสงค์ในการให้คำปรึกษาและแนะนำงานต่างประเทศเท่านั้น
                    เราจะไม่เปิดเผยข้อมูลของผู้ใช้แก่บุคคลที่สามโดยไม่ได้รับความยินยอม
                    การใช้งานเว็บไซต์นี้จะอยู่ภายใต้นโยบายความเป็นส่วนตัวของเรา
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    4. ความรับผิดชอบของผู้ใช้
                  </Typography>
                  <Typography variant="body1">
                    ผู้ใช้บริการต้องรับผิดชอบในการให้ข้อมูลที่ถูกต้อง ครบถ้วน
                    และไม่ก่อให้เกิดความเข้าใจผิด
                    เว็บไซต์นี้สงวนสิทธิ์ในการยุติการให้บริการหากพบว่ามีการใช้ข้อมูลเท็จหรือการกระทำที่ขัดกับกฎหมาย
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    5. ข้อจำกัดความรับผิดชอบ
                  </Typography>
                  <Typography variant="body1">
                    เว็บไซต์นี้ให้บริการข้อมูลและคำปรึกษา “ตามสภาพที่เป็น”
                    โดยไม่รับประกันความถูกต้อง ครบถ้วน
                    หรือความเหมาะสมต่อการใช้งานเฉพาะด้าน
                    เว็บไซต์ไม่รับผิดชอบต่อความเสียหายใด ๆ
                    ที่อาจเกิดขึ้นจากการใช้งานเว็บไซต์
                    ไม่ว่าจะเป็นทางตรงหรือทางอ้อม
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    6. การเชื่อมโยงไปยังเว็บไซต์ภายนอก
                  </Typography>
                  <Typography variant="body1">
                    เว็บไซต์นี้อาจมีการเชื่อมโยงไปยังเว็บไซต์หรือแหล่งข้อมูลภายนอก
                    เราไม่รับผิดชอบต่อเนื้อหา ความถูกต้อง
                    หรือความปลอดภัยของเว็บไซต์เหล่านั้น
                    การใช้งานเว็บไซต์ภายนอกอยู่ภายใต้เงื่อนไขและข้อกำหนดของแต่ละเว็บไซต์
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    7. การเปลี่ยนแปลงเงื่อนไขและข้อกำหนด
                  </Typography>
                  <Typography variant="body1">
                    เราขอสงวนสิทธิ์ในการเปลี่ยนแปลงหรือแก้ไขเงื่อนไขและข้อกำหนดเหล่านี้ได้ทุกเมื่อโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                    การเปลี่ยนแปลงดังกล่าวจะมีผลบังคับใช้ทันทีที่ปรากฏบนเว็บไซต์
                    และผู้ใช้บริการจะต้องปฏิบัติตามเงื่อนไขใหม่ที่ได้เปลี่ยนแปลง
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    8. กฎหมายที่บังคับใช้
                  </Typography>
                  <Typography variant="body1">
                    เงื่อนไขและข้อกำหนดเหล่านี้จะอยู่ภายใต้กฎหมายของประเทศที่เว็บไซต์ตั้งอยู่
                    และข้อพิพาทใด ๆ
                    ที่เกิดขึ้นจะต้องดำเนินการในศาลที่มีอำนาจตามเขตอำนาจศาลนั้น
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle1">
                    9. การยุติการใช้งาน
                  </Typography>
                  <Typography variant="body1">
                    เรามีสิทธิ์ที่จะระงับหรือยกเลิกการให้บริการกับผู้ใช้ที่ไม่ปฏิบัติตามเงื่อนไขและข้อกำหนดนี้
                    หรือใช้บริการในลักษณะที่ผิดกฎหมาย
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant="subtitle1">10. การติดต่อ</Typography>
                  <Typography variant="body1">
                    หากคุณมีคำถามเกี่ยวกับเงื่อนไขและข้อกำหนดของเรา
                    กรุณาติดต่อเราผ่านช่องทางที่ระบุไว้ในเว็บไซต์
                  </Typography>
                </Stack>
              </Stack>
            </m.div>
          </Stack>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
