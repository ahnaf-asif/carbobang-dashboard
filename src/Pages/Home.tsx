import { Suspense, lazy } from 'react';
import { GreenBackground } from '@/Layouts';
const Hero3DModel = lazy(() => import('@/Shared/Components/Hero3DModel/Hero3DModel'));
import { Button, Container, Stack, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import Loading from '@/Shared/Components/Loader/Loader';

export const Home = () => {
  return (
    <GreenBackground>
      <Container size="xl">
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
      </Container>
      <Stack h={'60vh'} w={'100%'} justify="center" align="center">
        <Suspense fallback={<Loading />}>
          <Hero3DModel />
        </Suspense>
      </Stack>
    </GreenBackground>
  );
};
