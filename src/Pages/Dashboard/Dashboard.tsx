import { Box, Drawer, Flex, Paper, Stack, Stepper, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { GreenBackground } from '@/Layouts';
import { StyledDashboardButton, StyledDashboardDrawer } from './Styles';
import { useDisclosure } from '@mantine/hooks';
import DashboardMap from '@/Shared/Components/DashboardMap/DashboardMap';

const geotiffFileArray = [
  {
    label: 'Greenness Index',
    file: '/ndvi/ndvi_boundary_rgb.tif'
  },
  {
    label: 'Wetness Index',
    file: '/ndwi/ndwi_boundary_rgb.tif'
  },
  {
    label: 'Carbon Sequestration Level',
    file: '/ndvi/ndvi_boundary_rgb2.tif'
  },
  {
    label: 'Financial Impact',
    file: '/ndvi/ndvi_boundary_rgb3.tif'
  }
];

export const Dashboard = () => {
  const [geotiffFile, setGeoTiffFile] = useState('');
  const [active, setActive] = useState(0);
  const [leftMenuOpened, { toggle: toggleLeftMenu }] = useDisclosure();
  const [rightMenuOpened, { toggle: toggleRightMenu }] = useDisclosure();

  return (
    <GreenBackground toggleLeftMenu={toggleLeftMenu} toggleRightMenu={toggleRightMenu}>
      <Flex style={{ minHeight: '100vh', minWidth: '100vw' }} align="center" justify="space-around">
        {/* For Smaller Screen: Project drawer */}
        <StyledDashboardDrawer
          opened={leftMenuOpened}
          onClose={toggleLeftMenu}
          title="Projects"
          zIndex={1000}
        >
          <Stack mt={50} c="white">
            <Text size="xl">Sonadia Mangrove Project</Text>
            <Text size="xl">Project 2</Text>
            <Text size="xl">Project 3</Text>
          </Stack>
        </StyledDashboardDrawer>

        <Box visibleFrom="lg" style={{ color: 'white', fontSize: '20px' }}>
          <Stepper
            iconPosition="right"
            size="xs"
            active={active}
            onStepClick={setActive}
            orientation="vertical"
          >
            <Stepper.Step label="Sonadia Mangrove Project" />
            <Stepper.Step label="Project 2" />
            <Stepper.Step label="Project 3" />
          </Stepper>
        </Box>

        <Box style={{ background: 'darkgreen', height: '400px', width: '650px', color: 'white' }}>
          <DashboardMap geotiffFile={geotiffFile} />
        </Box>

        {/* For Smaller Screen: Index drawer */}
        <StyledDashboardDrawer
          opened={rightMenuOpened}
          onClose={toggleRightMenu}
          position="right"
          title="Indexes"
          zIndex={1000}
        >
          <Stack mt={50} c="white">
            {geotiffFileArray.map((file) => (
              <Text
                key={file.file}
                size="xl"
                onClick={() => {
                  toggleRightMenu();
                  setGeoTiffFile(file.file);
                }}
                style={{ cursor: 'pointer' }}
              >
                {file.label}
              </Text>
            ))}
          </Stack>
        </StyledDashboardDrawer>

        <Box visibleFrom="lg">
          {geotiffFileArray.map((file) => (
            <>
              {/*@ts-ignore*/}
              <StyledDashboardButton
                mt={20}
                active={file.file == geotiffFile ? 'true' : 'false'}
                onClick={() => setGeoTiffFile(file.file)}
              >
                {file.label}
              </StyledDashboardButton>
              <br />
            </>
          ))}
        </Box>
      </Flex>
    </GreenBackground>
  );
};
