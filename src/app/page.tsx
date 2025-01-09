import { Box, Container, Stack, Typography } from "@mui/material";
import nextConfig from "next/config";

export default function Home() {
  const { publicRuntimeConfig = {} } = nextConfig();

  // <Landing version={publicRuntimeConfig?.version || ''} />
  return (
    <Box>
      <Container>
        <Stack>
          <Typography>Landing</Typography>
        </Stack>
      </Container>
    </Box>
  );
}
