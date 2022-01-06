import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';
import { darkBlue } from '~/styles';

export const MenuContainer = styled(Menu)`
  .MuiMenu-list {
    width: 100%;
  }
  .MuiIconButton-label {
    text-transform: capitalize;
  }
`;

export const MenuWrapper = styled.div`
  .MuiIconButton-root {
    color: white;
    background: ${darkBlue};
    &:hover {
      background: #fff;
      color: ${darkBlue};
    }
  }
`;
