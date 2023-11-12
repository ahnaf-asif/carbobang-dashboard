import { ActionIcon, Box, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';
import { Fragment, useState } from 'react';
import { GreenBackground } from '@/Layouts';
import { StyledDashboardButton, StyledDashboardDrawer } from './Styles';
import { useDisclosure } from '@mantine/hooks';
import DashboardMap from '@/Shared/Components/DashboardMap/DashboardMap';
import { IconChevronsLeft } from '@tabler/icons-react';

const geotiffFileArray = [
  {
    label: 'Individual tree identification',
    file: '/trees/trees.tif',
    button: '/legend/button_1.png',
    text: 'The values indicate tree heights in meters'
  },
  {
    label: 'Tree carbon level',
    file: '/carbon/carbon.tif',
    button: '/legend/button_2.png',
    text: 'The values indicate the carbon sequestration level in kg per tree'
  },
  {
    label: 'Greenness index',
    file: '/ndvi/ndvi_boundary_rgb.tif',
    button: '/legend/button_3.png',
    text: 'The values indicate the health of the trees and range between -1 to +1. The higher the value the better the tree’s health'
  },
  {
    label: 'Wetness index',
    file: '/ndwi/ndwi_boundary_rgb.tif',
    button: '/legend/button_4.png',
    text: 'The values indicate the water content of the trees and can range between -1 to +1. The higher the value the better the tree’s water content'
  }
];

export const Dashboard = () => {
  const [geotiffFile, setGeoTiffFile] = useState<{
    label: string;
    file: string;
    button: string;
    text: string;
  }>(geotiffFileArray[0]);
  const [rightMenuOpened, { toggle: toggleRightMenu }] = useDisclosure();

  return (
    <GreenBackground>
      <Stack hiddenFrom="lg" align="flex-end">
        <ActionIcon
          onClick={toggleRightMenu}
          variant="transparent"
          aria-label="Indexes Menu"
          size={'xl'}
        >
          <IconChevronsLeft color="white" style={{ height: '100%', width: '100%' }} />
        </ActionIcon>
      </Stack>
      <Title my={60} c="white" ta="center" order={2}>
        DMRV for Tree Plantation in Polk County, Texas, US
      </Title>
      <Flex align="center" justify="space-around">
        <Group gap={10} align="end">
          <Image src={geotiffFile?.button} alt="Button 1" w={'100'} mb={30} />
          <Stack style={{ height: '500px', width: '800px', color: 'white' }}>
            <DashboardMap geotiffFile={geotiffFile} />
            <Text>{geotiffFile.text}</Text>
          </Stack>
        </Group>

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
                  setGeoTiffFile(file);
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
            <Fragment key={file.file}>
              {/*@ts-ignore*/}
              <StyledDashboardButton
                mt={20}
                active={file.file == geotiffFile?.file ? 'true' : 'false'}
                onClick={() => setGeoTiffFile(file)}
              >
                {file.label}
              </StyledDashboardButton>
              <br />
            </Fragment>
          ))}
        </Box>
      </Flex>
    </GreenBackground>
  );
};
