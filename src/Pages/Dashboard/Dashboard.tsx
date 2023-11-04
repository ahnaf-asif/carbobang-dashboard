import { Box, Button, Flex, Stepper, Text } from '@mantine/core';
import { useState } from 'react';
import { GreenBackground } from '@/Layouts';
import { StyledDashboardButton } from './Styles';

export const Dashboard = () => {
  const [active, setActive] = useState(0);
  return (
    <GreenBackground>
      <Flex style={{ minHeight: '100vh', minWidth: '100vw' }} align="center" justify="space-around">
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
