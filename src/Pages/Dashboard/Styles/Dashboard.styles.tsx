import { Button, Drawer } from '@mantine/core';
import styled from 'styled-components';

import { darkGreen, defaultGreen, lightGreen } from '@/Config';

export const StyledDashboardButton = styled(Button)<{ active: string; mt?: number }>`
  width: 350px;
  height: 60px;
  padding: 10px;
  font-size: 20px;
  background: ${(props) => (props.active === 'true' ? defaultGreen : 'transparent')};
  color: white;
  border: ${(props) => (props.active == 'true' ? 'none' : `1px solid white`)};
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;

  &:hover {
    background: ${defaultGreen};
    border: none;
  }
`;

export const StyledDashboardDrawer = styled(Drawer)`
color: white;

.mantine-Drawer-close {
  color: white;
}

.mantine-Drawer-header {
  background: rgb(0, 39, 41);
}

.mantine-Drawer-content {
  background: linear-gradient(
    186deg,
    rgba(0, 39, 41, 1) 47%,
    rgba(0, 65, 55, 1) 99%,
    rgba(0, 106, 78, 1) 100%
  );
}
`;
