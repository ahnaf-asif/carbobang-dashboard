import { AppShell, Box } from '@mantine/core';
import {
  StyledAppShell,
  StyledRadialRedLeftSvgBox,
  StyledRadialRedRightSvgBox,
  StyledRadialRedSvgImg,
  StyledRadialRedRightSvgImg
} from './GreenBackground.styles';

import { RadialRedLeftSvg, RadialRedRightSvg } from './Assets';

export const GreenBackground = ({ children }: any) => {
  return (
    <StyledAppShell>
      <AppShell.Main>
        {children}
        <Box visibleFrom="sm">
          <StyledRadialRedLeftSvgBox>
            <StyledRadialRedSvgImg alt="radial-circle-red" src={RadialRedLeftSvg} />
          </StyledRadialRedLeftSvgBox>
          <StyledRadialRedRightSvgBox>
            <StyledRadialRedRightSvgImg alt="radial-circle-red" src={RadialRedRightSvg} />
          </StyledRadialRedRightSvgBox>
        </Box>
      </AppShell.Main>
    </StyledAppShell>
  );
};
