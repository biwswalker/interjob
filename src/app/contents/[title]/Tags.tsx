import { Chip, Stack } from "@mui/material";
import { IBlogPost } from "../constants";

type Props = {
  post: IBlogPost;
};

export default function BlogPostTags({ post }: Props) {
  const { tags } = post;

  return (
    <>
      <Stack direction="row" flexWrap="wrap">
        {tags.map((tag) => (
          <Chip key={tag} label={tag} sx={{ m: 0.5 }} />
        ))}
      </Stack>
    </>
  );
}
