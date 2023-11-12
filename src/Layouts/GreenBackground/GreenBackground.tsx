import { AppShell, Box } from '@mantine/core';
import {
  StyledAppShell,
  StyledRadialRedLeftSvgBox,
  StyledRadialRedRightSvgBox,
  StyledRadialRedSvgImg,
  StyledRadialRedRightSvgImg
} from './GreenBackground.styles';

import { RadialRedLeftSvg, RadialRedRightSvg } from './Assets';
import { relative } from 'path';

type Props = {
  children: React.ReactNode;
};

export const GreenBackground = ({ children }: Props) => {
  return (
    <StyledAppShell>
      <AppShell.Main style={{ position: 'relative' }}>
        <Box style={{ position: 'relative', zIndex: 100 }}>{children}</Box>
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
