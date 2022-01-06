import styled, { css } from 'styled-components';
import { GetComponentProps } from '~/components';
import MuiDrawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import MuiBox from '@material-ui/core/Box';
import { headerHeight, sizeMobile, wildWaterMelon } from '~/styles';
import Box from '@material-ui/core/Box';

const drawerWidth = 300;
const drawerWidthClose = 50;

export const Drawer = styled(MuiDrawer)`
  .MuiDrawer-paper {
    top: ${headerHeight}px;
    transition: 0.2s all ease;
    width: ${({ open }) => (open ? drawerWidth : drawerWidthClose)}px;
    padding: 10px;
    margin: 0;
    ${({ open }) =>
      sizeMobile(css`
        display: ${open ? 'block' : 'none'};
        width: 100%;
        padding: 0px;
      `)}
  }
` as React.FC<GetComponentProps<typeof MuiDrawer>>;

interface SearchContainerProps {
  open: boolean;
}

export const SearchContainer = styled(({ open, ...props }) => (
  <MuiBox {...props} />
))<SearchContainerProps>`
  margin-left: ${drawerWidthClose}px;
  ${({ open }) =>
    open &&
    css`
      width: calc(100% - ${drawerWidth}px);
      margin-left: ${drawerWidth}px;
      transition: 0.2s all ease;
    `}
  ${sizeMobile(css`
    width: 100%;
    margin-left: 0;
  `)};
` as React.FC<SearchContainerProps & GetComponentProps<typeof MuiBox>>;

export const StyledMenuItem = styled(MenuItem)`
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 0;
  color: black;
  font-size: 14px;
  width: 100%;
  text-transform: capitalize;
  justify-content: flex-start;
`;

export const Chip = styled(Box)`
  display: flex;
  align-items: center;
  padding: 2px 5px 2px 8px;
  border-radius: 20px;
  height: 25px;
  color: white;
  margin: 3px 2px;
  background: ${wildWaterMelon};
  font-size: 14px;
  cursor: pointer;
`;
