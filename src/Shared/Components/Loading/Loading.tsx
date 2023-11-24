import { Box, Loader, Stack } from '@mantine/core';

export default function Loading() {
  return (
    <Stack align="center" justify="center" pos="relative" w={200} h={200}>
      <Loader size={50} />
    </Stack>
  );
}
