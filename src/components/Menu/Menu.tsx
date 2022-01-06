import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, ButtonGroup, Box } from '@material-ui/core';
import { menuZIndex } from '~/styles';
import { MenuContainer, MenuWrapper } from './elements';

export interface MenuProps {
  title?: React.ReactNode | string;
  getMenuItems: (closeMenu: () => void) => React.ReactNode[];
  iconButtonStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  widerMenu?: boolean;
  iconTestId?: string;
  buttonGroup?: any;
}

export const Menu: React.FC<MenuProps> = ({
  getMenuItems,
  iconStyle,
  iconButtonStyle,
  title,
  widerMenu,
  iconTestId,
  buttonGroup,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(null);
  };

  const closeMenu = () => setAnchorEl(null);

  return (
    <>
      <MenuWrapper onClick={(e) => e.stopPropagation()}>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ padding: 0, ...iconButtonStyle }}
        >
          {title || <MoreVertIcon style={{ color: 'white', ...iconStyle }} />}
        </IconButton>

        <MenuContainer
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
          style={{ zIndex: menuZIndex }}
          PaperProps={{
            style: {
              width: widerMenu ? '270px' : '22ch',
            },
          }}
        >
          <Box display="flex" justifyContent="center">
            <ButtonGroup>{buttonGroup}</ButtonGroup>
          </Box>
          {getMenuItems(closeMenu)}
        </MenuContainer>
      </MenuWrapper>
    </>
  );
};
