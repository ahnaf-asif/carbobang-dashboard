import { Box, Center, Text, Title } from '@mantine/core';

import { notFoundJpg } from '@/Shared/Images';
import { StyledNotFoundImg } from '@/Pages/NotFound/NotFound.styles';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Box
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box>
        <Center>
          <StyledNotFoundImg src={notFoundJpg} alt="Page Not Found" />
        </Center>
        <Center>
          <Text ta="center">The page you were looking for couldn't be found </Text>
        </Center>
        <Center>
          <Text ta="center" mt={20} fw="bold">
            Please go back to <Link to="/">Home Page</Link>
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
