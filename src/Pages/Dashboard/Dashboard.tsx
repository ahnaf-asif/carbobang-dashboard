import { Box, Drawer, Flex, Paper, Stack, Stepper, Text } from '@mantine/core';
import { useState } from 'react';
import { GreenBackground } from '@/Layouts';
import { StyledDashboardButton, StyledDashboardDrawer } from './Styles';
import { useDisclosure } from '@mantine/hooks';

export const Dashboard = () => {
  const [active, setActive] = useState(0);
  const [leftMenuOpened, { toggle: toggleLeftMenu }] = useDisclosure();
  const [rightMenuOpened, { toggle: toggleRightMenu }] = useDisclosure();
  return (
    <GreenBackground
      leftMenuOpened={leftMenuOpened}
      toggleLeftMenu={toggleLeftMenu}
      rightMenuOpened={rightMenuOpened}
      toggleRightMenu={toggleRightMenu}
    >
      <Flex style={{ minHeight: '100vh', minWidth: '100vw' }} align="center" justify="space-around">

        {/* For Smaller Screen: Project drawer */}
        <StyledDashboardDrawer opened={leftMenuOpened} onClose={toggleLeftMenu} title="Projects">
          <Stack mt={50} c="white">
            {/*@ts-ignore*/}
            <StyledDashboardButton active="true">Sonadia Mangrove Project</StyledDashboardButton>
            {/*@ts-ignore*/}
            <StyledDashboardButton>Project 2</StyledDashboardButton>
            {/*@ts-ignore*/}
            <StyledDashboardButton>Project 3</StyledDashboardButton>
          </Stack>
        </StyledDashboardDrawer>
        
        <Box visibleFrom="sm" style={{ color: 'white', fontSize: '20px' }}>
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
          <Text mt={20} ml={20}>
            Map will be placed here
          </Text>
        </Box>

        {/* For Smaller Screen: Index drawer */}
        <StyledDashboardDrawer
          opened={rightMenuOpened}
          onClose={toggleRightMenu}
          position="right"
          title="Indexes"
        >
          <Box mt={50} c="white">
            {/*@ts-ignore*/}
            <StyledDashboardButton active="true">Greenness Index</StyledDashboardButton>
            <br />
            {/*@ts-ignore*/}
            <StyledDashboardButton mt={20} active="false">
              Wetness Index
            </StyledDashboardButton>
            <br />
            {/*@ts-ignore*/}
            <StyledDashboardButton mt={20} active="false">
              Carbon Sequestration Level
            </StyledDashboardButton>
            <br />
            {/*@ts-ignore*/}
            <StyledDashboardButton mt={20} active="false">
              Financial Impact
            </StyledDashboardButton>
          </Box>
        </StyledDashboardDrawer>

        <Box visibleFrom="sm">
          {/*@ts-ignore*/}
          <StyledDashboardButton active="true">Greenness Index</StyledDashboardButton>
          <br />
          {/*@ts-ignore*/}
          <StyledDashboardButton mt={20} active="false">
            Wetness Index
          </StyledDashboardButton>
          <br />
          {/*@ts-ignore*/}
          <StyledDashboardButton mt={20} active="false">
            Carbon Sequestration Level
          </StyledDashboardButton>
          <br />
          {/*@ts-ignore*/}
          <StyledDashboardButton mt={20} active="false">
            Financial Impact
          </StyledDashboardButton>
        </Box>
      </Flex>
    </GreenBackground>
  );
};
