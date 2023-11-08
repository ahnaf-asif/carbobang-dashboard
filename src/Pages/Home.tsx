import { GreenBackground } from '@/Layouts';
import Hero3DModel from '@/Shared/Components/Hero3DModel/Hero3DModel';
import { Box, Button, Container, Stack, Text, Title } from '@mantine/core';
import { Dashboard } from './Dashboard';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <GreenBackground>
      <Container>
        <Stack justify="center" align="center" h={'30vh'} c="white" mt={40}>
          <Title order={1} ta="center">
            CarboBang: Measurable Forest Protection
          </Title>
          <Title order={2} ta="center" size={20}>
            We use satellites & machine learning technology to finance forest protection in
            Bangladesh
          </Title>
          <Link to="/dashboard">
            <Button size="lg" tt={'uppercase'}>
              Go To Dashboard
            </Button>
          </Link>
        </Stack>
        <Box h={'60vh'} w={'100%'}>
          <Hero3DModel />
        </Box>
      </Container>
    </GreenBackground>
  );
};
