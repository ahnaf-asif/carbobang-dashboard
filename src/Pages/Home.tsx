import { GreenBackground } from '@/Layouts';
import Hero3DModel from '@/Shared/Components/Hero3DModel/Hero3DModel';
import { Box, Container, Stack, Text, Title } from '@mantine/core';
import { Dashboard } from './Dashboard';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';

export const Home = () => {
  const [active, setActive] = useState(0);
  const [leftMenuOpened, { toggle: toggleLeftMenu }] = useDisclosure();
  const [rightMenuOpened, { toggle: toggleRightMenu }] = useDisclosure();
  return (
    <GreenBackground toggleLeftMenu={toggleLeftMenu} toggleRightMenu={toggleRightMenu}>
      <Container>
        <Stack justify="center" align="center" h={'30vh'} c="white" mt={40}>
          <Title order={1} ta="center">
            CarboBang: Measurable Forest Protection
          </Title>
          <Title order={2} ta="center" size={20}>
            We use satellites & machine learning technology to finance forest protection in
            Bangladesh
          </Title>
        </Stack>
        <Box h={'60vh'} w={'100%'}>
          <Hero3DModel />
        </Box>
      </Container>
      <Dashboard
        leftMenuOpened={leftMenuOpened}
        toggleLeftMenu={toggleLeftMenu}
        active={active}
        setActive={setActive}
        rightMenuOpened={rightMenuOpened}
        toggleRightMenu={toggleRightMenu}
      />
    </GreenBackground>
  );
};
