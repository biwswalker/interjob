import { Metadata } from "next";
import { _mockBlogPosts, getPost } from "../constants";
import Content from "./Content";

type Props = {
  params: Promise<{ title: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = (await params).title;
  const post = getPost(title);
  return {
    title: post?.sortTitle,
    description: post?.description,
    keywords: post?.tags || [],
    openGraph: {
      title: post?.sortTitle,
      description: post?.description,
      type: "website",
      images: [post?.thumbnail || ""],
    },
  };
}

export default function BlogPostPage() {
  return <Content />;
}
