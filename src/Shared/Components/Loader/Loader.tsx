import { Box, Loader } from '@mantine/core';

export default function Loading() {
  return (
    <Box pos="relative" w={200} h={200}>
      <Loader size={50} />
    </Box>
  );
}
