"use client";

import FormProvider, {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@components/hook-form";
import { Box, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import * as Yup from "yup";
import REGEX from "@constants/regex";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Iconify from "@components/iconify";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useSnackbar } from "notistack";
import { get } from "lodash";
import { format } from "date-fns";

interface InterestedFormValue {
  name?: string;
  age?: string;
  phoneNumber?: string;
  province?: string;
  acceptPolicy?: boolean;
}

export const AGES = [
  { value: "น้อยกว่า 18", label: "น้อยกว่า 18 ปี" },
  { value: "18", label: "18 ปี" },
  { value: "19", label: "19 ปี" },
  { value: "20", label: "20 ปี" },
  { value: "21", label: "21 ปี" },
  { value: "22", label: "22 ปี" },
  { value: "23", label: "23 ปี" },
  { value: "24", label: "24 ปี" },
  { value: "25", label: "25 ปี" },
  { value: "26", label: "26 ปี" },
  { value: "27", label: "27 ปี" },
  { value: "28", label: "28 ปี" },
  { value: "29", label: "29 ปี" },
  { value: "30", label: "30 ปี" },
  { value: "31", label: "31 ปี" },
  { value: "32", label: "32 ปี" },
  { value: "33", label: "33 ปี" },
  { value: "34", label: "34 ปี" },
  { value: "35", label: "35 ปี" },
  { value: "36", label: "36 ปี" },
  { value: "37", label: "37 ปี" },
  { value: "38", label: "38 ปี" },
  { value: "39", label: "39 ปี" },
  { value: "40", label: "40 ปี" },
  { value: "40 ขึ้นไป", label: "40 ปี ขึ้นไป" },
];

interface IProvince {
  id: number;
  grography_id: number;
  name_th: string;
  name_en: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

const provinceApi =
  "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json";
export const getProvince = async (): Promise<IProvince[]> => {
  const provinceRaw = await axios.get(provinceApi);
  const result = get(provinceRaw, "data", []);
  return result;
};

export default function InterestedForm() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [provinces, setProvinces] = useState<IProvince[]>([]);
  const theme = useTheme();
  const InterestSchema = Yup.object().shape({
    name: Yup.string().required("ระบุชื่อติดต่อ"),
    age: Yup.string().required("ระบุอายุ"),
    province: Yup.string().required("ระบุจีงหวัด"),
    phoneNumber: Yup.string().matches(
      REGEX.CONTECT_NUMBER,
      "ระบุหมายเลขติดต่อ"
    ),
    acceptPolicy: Yup.boolean(),
  });

  const methods = useForm({
    resolver: yupResolver(InterestSchema),
    defaultValues: {
      acceptPolicy: false,
      age: "",
      name: "",
      province: "",
      phoneNumber: "",
    },
  });

  const { watch, reset, handleSubmit } = methods;

  const isAcceptedPolicy = watch("acceptPolicy");

  useEffect(() => {
    getProvinces();
  }, []);

  async function getProvinces() {
    const provinces = await getProvince();
    setProvinces(provinces);
  }

  async function onSubmit(values: InterestedFormValue) {
    setLoading(true);
    try {
      const body = {
        data: [
          values.name,
          values.age,
          values.phoneNumber,
          values.province,
          format(new Date(), "MM/dd/yyyy HH:mm:ss"),
          "WebPage",
        ],
      };
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASEAPI || ""}/interested/api`,
        body
      );
      enqueueSnackbar({
        message: "เราได้รับข้อมูลแล้ว กรุณารอทีมงานของเราติดต่อไป",
        variant: "success",
      });
    } catch (error) {
      const message = get(error, "message", "");
      console.log("error: ", error);
      enqueueSnackbar({
        message: message || "เกิดข้อผิดพลาด กรุณาลองอีกครัั้ง",
        variant: "error",
      });
    } finally {
      setLoading(false);
      reset();
    }
  }

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
          p: theme.spacing(3, 0, 5, 0),
        },
      }}
    >
      <Box
        sx={{
          py: 5,
          px: 5,
          width: 1,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
          maxWidth: "var(--layout-auth-content-width)",
        }}
      >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            {/* <Card sx={{ p: 3, backgroundColor: alpha(theme.palette.primary.lighter, 0.08) }}> */}
            <Stack spacing={2}>
              <Stack sx={{ pb: 4 }}>
                <Typography variant="h4">รับคำปรึกษาฟรี</Typography>
                <Typography variant="body1" color="text.disabled">
                  สำหรับผู้ที่สนใจไปทำงานต่างประเทศ
                </Typography>
              </Stack>
              <RHFTextField
                name="name"
                label="ชื่อ - นามสกุล*"
                slotProps={{ inputLabel: { shrink: true } }}
              />
              <RHFSelect
                fullWidth
                name="age"
                label="อายุ*"
                // sx={{ maxWidth: { xs: "unset", sm: "156px" } }}
                // InputLabelProps={{ shrink: true }} // TODO: When have default value
                slotProps={{
                  select: {
                    native: false,
                    sx: {},
                  },
                  inputLabel: {
                    shrink: true,
                  },
                }}
              >
                {AGES.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{
                      mx: 1,
                      my: 0.5,
                      borderRadius: 0.75,
                      typography: "body2",
                      textTransform: "capitalize",
                      "&:first-of-type": { mt: 0 },
                      "&:last-of-type": { mb: 0 },
                    }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </RHFSelect>
              <RHFTextField
                name="phoneNumber"
                label="เบอร์ติดต่อ*"
                slotProps={{ inputLabel: { shrink: true } }}
              />
              <RHFSelect
                fullWidth
                name="province"
                label="จังหวัด*"
                // sx={{ maxWidth: { xs: "unset", sm: "156px" } }}
                // InputLabelProps={{ shrink: true }} // TODO: When have default value
                slotProps={{
                  select: {
                    native: false,
                    sx: {},
                  },
                  inputLabel: {
                    shrink: true,
                  },
                }}
              >
                {provinces.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.name_th}
                    sx={{
                      mx: 1,
                      my: 0.5,
                      borderRadius: 0.75,
                      typography: "body2",
                      textTransform: "capitalize",
                      "&:first-of-type": { mt: 0 },
                      "&:last-of-type": { mb: 0 },
                    }}
                  >
                    {option.name_th}
                    {/* {JSON.stringify(option)} */}
                  </MenuItem>
                ))}
              </RHFSelect>
              <Stack alignItems="flex-start">
                <RHFCheckbox
                  name="acceptPolicy"
                  label="ฉันยอมรับ นโยบายความเป็นส่วนตัวและเงื่อนไขการใช้บริการ"
                  sx={{ mr: 0 }}
                />
              </Stack>
            </Stack>
            {/* </Card> */}
            <Stack alignItems="flex-start">
              <LoadingButton
                loading={loading}
                disabled={!isAcceptedPolicy}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                startIcon={<Iconify icon="mdi:email-sent" />}
              >
                ยืนยัน, รับคำปรึกษา
              </LoadingButton>
            </Stack>
          </Stack>
        </FormProvider>
      </Box>
    </Box>
  );
}
