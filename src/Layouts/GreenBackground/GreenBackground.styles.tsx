import { AppShell, AppShellHeader, Box } from '@mantine/core';
import styled from 'styled-components';

export const StyledAppShell = styled(AppShell)`
  background: rgb(0, 39, 41);
  background: linear-gradient(
    186deg,
    rgba(0, 39, 41, 1) 47%,
    rgba(0, 65, 55, 1) 99%,
    rgba(0, 106, 78, 1) 100%
  );
  .mantine-AppShell-main {
    overflow: hidden !important;
  }
`;

export const StyledAppShellHeader = styled(AppShellHeader)`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
`;

export const StyledRadialRedLeftSvgBox = styled(Box)`
  position: absolute;
  bottom: -35px;
  left: -25px;
  overflow: hidden !important;
`;

export const StyledRadialRedSvgImg = styled.img`
  height: 90%;
  width: 90%;
  overflow: hidden !important;
`;

export const StyledRadialRedRightSvgImg = styled.img`
  height: 80%;
  width: 80%;
  overflow: hidden !important;
`;

export const StyledRadialRedRightSvgBox = styled(Box)`
  position: absolute;
  top: -10px;
  right: -80px;
  overflow: hidden !important;
`;
