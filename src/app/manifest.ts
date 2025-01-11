import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "อินเตอร์จ๊อบ",
    short_name: "InterJob",
    description: "InterJob 1999",
    start_url: "/",
    display: "standalone",
    background_color: "#3866b1",
    theme_color: "#3866b1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
