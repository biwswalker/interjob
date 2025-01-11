"use client";

import { m } from "framer-motion";
import { useState, useRef } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  Paper,
  Button,
  Typography,
  CardContent,
  Container,
  Stack,
} from "@mui/material";
import { bgGradient } from "@utils/cssStyles";
import Image from "@components/image";
import { MotionContainer, varFade } from "@components/animate";
import Carousel, { CarouselArrowIndex } from "@components/carousel";
import useResponsive from "@hooks/useResponsive";
import Iconify from "@components/iconify";
import TextMaxLine from "@components/text-max-line";

export interface CarouselData {
  id: string;
  title: string;
  image: string;
  description: string;
}
type Props = {
  data: CarouselData[];
};

export default function CarouselSection({ data }: Props) {
  const theme = useTheme();
  const carouselRef = useRef<Carousel | null>(null);
  const [currentIndex, setCurrentIndex] = useState(
    theme.direction === "rtl" ? data.length - 1 : 0
  );

  const carouselSettings = {
    speed: 600,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Card sx={{ borderRadius: 0, maxHeight: 700 }}>
      <Carousel ref={carouselRef} {...carouselSettings} fade>
        {data.map((item, index) => (
          <CarouselItem
            key={item.id}
            item={item}
            isActive={index === currentIndex}
          />
        ))}
      </Carousel>

      {/* <CarouselArrowIndex
        index={currentIndex}
        total={data.length}
        onNext={handleNext}
        onPrevious={handlePrev}
      /> */}
    </Card>
  );
}

type CarouselItemProps = {
  item: {
    title: string;
    description: string;
    image: string;
  };
  isActive: boolean;
};

function CarouselItem({ item, isActive }: CarouselItemProps) {
  const theme = useTheme();
  const isDesktop = useResponsive("up", "md");

  const { image, title } = item;

  return (
    <Paper sx={{ position: "relative", maxHeight: 700 }}>
      <Image alt={title} src={image} ratio={isDesktop ? "16/9" : "1/1"} />

      <Box
        sx={{
          top: 0,
          width: 1,
          height: 1,
          position: "absolute",
          ...bgGradient({
            direction: "to top",
            startColor: `${theme.palette.grey[900]} 0%`,
            endColor: `${alpha(theme.palette.grey[900], 0)} 100%`,
          }),
        }}
      />

      <CardContent
        component={MotionContainer}
        animate={isActive}
        action
        sx={{
          bottom: 0,
          width: 1,
          textAlign: "center",
          position: "absolute",
          color: "common.white",
        }}
      >
        <Container sx={{ pb: 3, maxWidth: 500 }}>
          <Stack alignItems="center">
            <m.div variants={varFade({ distance: 50 }).inUp}>
              <Typography variant="h3">{item.title}</Typography>
            </m.div>

            <m.div variants={varFade({ distance: 50 }).inUp}>
              <TextMaxLine variant="body1" line={3} persistent>
                {item.description}
              </TextMaxLine>
            </m.div>
          </Stack>

          <m.div variants={varFade().inRight}>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ mt: 1 }}
              endIcon={<Iconify icon="si:arrow-right-line" />}
            >
              รับคำปรึกษา
            </Button>
          </m.div>
        </Container>
      </CardContent>
    </Paper>
  );
}
