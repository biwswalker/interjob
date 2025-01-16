import { Metadata } from "next";
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
    title: "อินเตอร์จ๊อบคืออะไร?",
    description:
      "อินเตอร์จ๊อบเป็นแพลตฟอร์มที่ช่วยเชื่อมโยงแรงงานไทยกับงานในต่างประเทศ โดยมุ่งเน้นความปลอดภัยและการทำงานที่ถูกต้องตามกฎหมาย พร้อมให้ข้อมูลและคำแนะนำในทุกขั้นตอน",
  },
  {
    id: "2",
    image: "/assets/images/content_2.jpg",
    title: "บทบาทของบริษัทจัดหางานในต่างประเทศ",
    description:
      "บริษัทจัดหางานทำหน้าที่เป็นตัวกลางระหว่างแรงงานและนายจ้างในต่างประเทศ ช่วยตรวจสอบนายจ้าง เตรียมเอกสาร และสนับสนุนแรงงานให้พร้อมสำหรับการทำงาน",
  },
  {
    id: "3",
    image: "/assets/images/content_3.jpg",
    title: "ความสำคัญของการทำงานต่างประเทศอย่างถูกกฎหมาย",
    description:
      "การทำงานตามกฎหมายช่วยลดความเสี่ยง เช่น การถูกหลอกลวงหรือเอาเปรียบ รวมถึงสร้างความมั่นใจให้กับนายจ้างและแรงงาน",
  },
  {
    id: "4",
    image: "/assets/images/content_4.jpg",
    title: "อินเตอร์จ๊อบช่วยแรงงานไทยอย่างไร?",
    description:
      "อินเตอร์จ๊อบช่วยแรงงานค้นหางาน ให้คำแนะนำเกี่ยวกับเอกสารและการเดินทาง พร้อมระบบติดตามสถานะและการอบรมเตรียมตัว",
  },
  {
    id: "5",
    image: "/assets/images/content_5.jpg",
    title: "ข้อดีของแพลตฟอร์มเชื่อมโยงแรงงานไทย",
    description:
      "แพลตฟอร์มเช่นอินเตอร์จ๊อบเพิ่มความปลอดภัย สะดวก และลดความเสี่ยงจากการหลอกลวง พร้อมเปิดโอกาสในการทำงานในหลากหลายประเทศและอุตสาหกรรม",
  },
];

export const metadata: Metadata = {
  title: "อินเตอร์จ๊อบ",
  description:
    "อินเตอร์จ๊อบ แพลตฟอร์มเชื่อมโยงแรงงานไทยกับนายจ้างในอิสราเอล ผ่านกระบวนการถูกต้องตามกฎหมายและโปร่งใส",
  openGraph: {
    type: "website",
    title: "อินเตอร์จ๊อบ",
    description:
      "อินเตอร์จ๊อบ แพลตฟอร์มเชื่อมโยงแรงงานไทยกับนายจ้างในอิสราเอล ผ่านกระบวนการถูกต้องตามกฎหมายและโปร่งใส",
    images: ["/assets/images/content0/thumbnail.jpg"],
  },
};

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
