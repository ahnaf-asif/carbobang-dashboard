import { ActionIcon, AppShell, Box } from '@mantine/core';
import {
  StyledAppShell,
  StyledRadialRedLeftSvgBox,
  StyledRadialRedRightSvgBox,
  StyledRadialRedSvgImg,
  StyledRadialRedRightSvgImg,
  StyledAppShellHeader
} from './GreenBackground.styles';

import { RadialRedLeftSvg, RadialRedRightSvg } from './Assets';
import { IconChevronsLeft, IconMenu2 } from '@tabler/icons-react';

type Props = {
  children: React.ReactNode;
  toggleLeftMenu: () => void;
  toggleRightMenu: () => void;
};

export const GreenBackground = ({
  children,
  toggleLeftMenu,
  toggleRightMenu
}: Props) => {
  return (
    <StyledAppShell>
      <StyledAppShellHeader hiddenFrom="lg">
        <ActionIcon
          onClick={toggleLeftMenu}
          variant="transparent"
          aria-label="Projects Menu"
          size={'lg'}
        >
          <IconMenu2 color="white" style={{ height: '100%', width: '100%' }} />
        </ActionIcon>
        <ActionIcon
          onClick={toggleRightMenu}
          variant="transparent"
          aria-label="Indexes Menu"
          size={'xl'}
        >
          <IconChevronsLeft color="white" style={{ height: '100%', width: '100%' }} />
        </ActionIcon>
      </StyledAppShellHeader>
      <AppShell.Main style={{ position: 'relative' }}>
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
