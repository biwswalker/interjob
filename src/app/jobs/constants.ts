import { find } from "lodash";

export type IJob = {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  salary: string;
};

export const _mockJobs: IJob[] = [
  {
    id: "1",
    thumbnail: "/assets/images/jobs/foreman.jpg",
    title: "โฟร์แมน",
    description: "5 ตำแหน่ง",
    salary: "100,000 - 120,000 บาท",
  },
  {
    id: "2",
    thumbnail: "/assets/images/content_2.jpg",
    title: "วิศวกรโยทา",
    description: "5 ตำแหน่ง",
    salary: "120,000 บาทขึ้นไป",
  },
  {
    id: "3",
    thumbnail: "/assets/images/jobs/concrete.jpg",
    title: "ช่างหล่อคอนกรีต",
    description: "20 ตำแหน่ง",
    salary: "77,000 บาทขึ้นไป",
  },
  {
    id: "4",
    thumbnail: "/assets/images/content_4.jpg",
    title: "ช่างดัดเหล็ก",
    description: "20 ตำแหน่ง",
    salary: "77,000 บาทขึ้นไป",
  },
  {
    id: "5",
    thumbnail: "/assets/images/jobs/shap.png",
    title: "ช่างฉาบปูน",
    description: "15 ตำแหน่ง",
    salary: "77,000 บาทขึ้นไป",
  },
  {
    id: "6",
    thumbnail: "/assets/images/jobs/tile.jpg",
    title: "ช่างปูกระเบื้อง",
    description: "15 ตำแหน่ง",
    salary: "77,000 บาทขึ้นไป",
  },
  {
    id: "7",
    thumbnail: "/assets/images/jobs/merge.jpg",
    title: "ช่างเชื่อม CO2 + Argon",
    description: "10 ตำแหน่ง",
    salary: "77,000 บาทขึ้นไป",
  },
  {
    id: "8",
    thumbnail: "/assets/images/jobs/excavator.jpg",
    title: "พนักงานขับรถแบคโฮ",
    description: "15 ตำแหน่ง",
    salary: "87,000 - 10,000 บาท",
  },
  {
    id: "9",
    thumbnail: "/assets/images/jobs/truck.jpg",
    title: "พนักงานขับรถตัก",
    description: "15 ตำแหน่ง",
    salary: "87,000 - 10,000 บาท",
  },
];

export function getPost(title: string) {
  const post = find(_mockJobs, ["sortTitle", title]);
  return post;
}
