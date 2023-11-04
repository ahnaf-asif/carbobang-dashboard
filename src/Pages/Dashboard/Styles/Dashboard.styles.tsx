import { Button } from '@mantine/core';
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
