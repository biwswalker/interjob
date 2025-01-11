"use client";

import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import { Divider, Stack, Container, Typography, Box } from "@mui/material";
import Markdown from "@components/markdown";
import CustomBreadcrumbs from "@components/custom-breadcrumbs";
import Hero from "./Hero";
import Tags from "./Tags";
import { ROOTS, ROOTS_CONTENT } from "@constants/routes";
import { _mockBlogPosts, IBlogPost } from "../constants";
import { find, get } from "lodash";
import { useParams } from "next/navigation";
import parse from "html-react-parser";

export default function BlogPostPage() {
  const params = useParams();
  const usernameRaw = get(params, "title", "") || "";
  const title = decodeURIComponent(String(usernameRaw));

  const [post, setPost] = useState<IBlogPost | undefined>(undefined);
  const [loadingPost, setLoadingPost] = useState(true);
  const [error, setError] = useState(null);

  const getPost = useCallback(async () => {
    if (title) {
      const post = find(_mockBlogPosts, ["sortTitle", title]);
      setPost(post);
    }
  }, [title]);

  useEffect(() => {
    if (title) {
      getPost();
    }
  }, [getPost, title]);

  return (
    <>
      <Head>
        <title>{`บทความ: ${post?.title || ""} | อินเตอร์จ๊อบ`}</title>
      </Head>

      <Container maxWidth="lg" sx={{ pt: 20 }}>
        <CustomBreadcrumbs
          heading="บทความ"
          links={[
            {
              name: "หน้าหลัก",
              href: ROOTS,
            },
            {
              name: "บทความ",
              href: ROOTS_CONTENT,
            },
            {
              name: post?.title,
            },
          ]}
        />

        {post && (
          <Stack
            sx={{
              borderRadius: 2,
              boxShadow: (theme) => ({
                md: theme.customShadows.card,
              }),
            }}
          >
            <Hero post={post} />

            <Typography
              variant="h6"
              sx={{
                py: 5,
                px: { md: 5 },
              }}
            >
              {post.description}
            </Typography>
            <Box sx={{ px: { md: 5 }, ul: { px: 3, py: 1 } }}>
              {parse(post.body)}
            </Box>
            {/* <Markdown children={post.body} sx={{ px: { md: 5 } }} /> */}
            <Stack
              spacing={3}
              sx={{
                py: 5,
                px: { md: 5 },
              }}
            >
              <Divider />
              <Tags post={post} />
              {/* <Divider /> */}
            </Stack>
          </Stack>
        )}
        {error && !loadingPost && (
          <Typography variant="h6">404 {error}</Typography>
        )}
        {/* {loadingPost && <SkeletonPostDetails />} */}
      </Container>
    </>
  );
}
