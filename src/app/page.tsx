import nextConfig from "next/config";
import Hero from "./landing/hero";
import Carousel, { CarouselData } from "./landing/carousel";
import Works from "./landing/works";
import PricingPlans from "./landing/pricings";
import QualificationSection from "./landing/qualifications";
import AboutWhat from "./landing/aboutus";
import AboutWork from "./landing/aboutwork";
import BlogSection from "./landing/blogs";

const images: CarouselData[] = [
  {
    id: "1",
    image: "/assets/images/content_1.jpg",
    title: "Lorem Ipsum คืออะไร?",
    description:
      "Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์ มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่ 16",
  },
  {
    id: "2",
    image: "/assets/images/content_2.jpg",
    title: "ทำไมจึงต้องนำมาใช้?",
    description:
      "มีหลักฐานที่เป็นข้อเท็จจริงยืนยันมานานแล้ว ว่าเนื้อหาที่อ่านรู้เรื่องนั้นจะไปกวนสมาธิของคนอ่านให้เขวไปจากส่วนที้เป็น Layout เรานำ Lorem Ipsum มาใช้เพราะความที่มันมีการกระจายของตัวอักษรธรรมดาๆ",
  },
  {
    id: "3",
    image: "/assets/images/content_3.jpg",
    title: "มันมีที่มาอย่างไร?",
    description:
      "ตรงกันข้ามกับความเชื่อที่นิยมกัน Lorem Ipsum ไม่ได้เป็นเพียงแค่ชุดตัวอักษรที่สุ่มขึ้นมามั่วๆ",
  },
  {
    id: "4",
    image: "/assets/images/content_4.jpg",
    title: "จะนำมาใช้ได้จากที่ไหน?",
    description:
      "มีท่อนต่างๆ ของ Lorem Ipsum ให้หยิบมาใช้งานได้มากมาย แต่ส่วนใหญ่แล้วจะถูกนำไปปรับให้เป็นรูปแบบอื่นๆ อาจจะด้วยการสอดแทรกมุกตลก",
  },
  {
    id: "5",
    image: "/assets/images/content_5.png",
    title: "มันมีที่มาอย่างไร?",
    description:
      "จากวิทยาลัยแฮมพ์เด็น-ซิดนีย์ ในรัฐเวอร์จิเนียร์ นำคำภาษาละตินคำว่า consectetur ซึ่งหาคำแปลไม่ได้จาก Lorem Ipsum ตอนหนึ่งมาค้นเพิ่มเติม",
  },
];

export default function Home() {
  const { publicRuntimeConfig = {} } = nextConfig();

  // <Landing version={publicRuntimeConfig?.version || ''} />
  return (
    <>
      <Carousel data={images} />
      <Hero />
      <AboutWhat />
      <AboutWork />
      <Works />
      <QualificationSection />
      <PricingPlans />
      <BlogSection />
    </>
  );
}
