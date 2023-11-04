import { AppShell, Box, Burger } from '@mantine/core';
import {
  StyledAppShell,
  StyledRadialRedLeftSvgBox,
  StyledRadialRedRightSvgBox,
  StyledRadialRedSvgImg,
  StyledRadialRedRightSvgImg,
  StyledAppShellHeader
} from './GreenBackground.styles';

import { RadialRedLeftSvg, RadialRedRightSvg } from './Assets';

type Props = {
  children: React.ReactNode;
  leftMenuOpened: boolean;
  toggleLeftMenu: () => void;
  rightMenuOpened: boolean;
  toggleRightMenu: () => void;
};

export const GreenBackground = ({
  children,
  leftMenuOpened,
  toggleLeftMenu,
  rightMenuOpened,
  toggleRightMenu
}: Props) => {
  return (
    <StyledAppShell>
      <StyledAppShellHeader hiddenFrom="sm">
        <Burger opened={leftMenuOpened} onClick={toggleLeftMenu} size="md" color="white" />
        <Burger opened={rightMenuOpened} onClick={toggleRightMenu} size="md" color="white" />
      </StyledAppShellHeader>
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
