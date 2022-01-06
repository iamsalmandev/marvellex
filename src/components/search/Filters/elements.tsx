import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { wildWaterMelon } from '~/styles';
export const DropdownWrapper = styled(Box)`
  .rmsc .dropdown-container:focus-within {
    box-shadow: none;
    border-color: ${wildWaterMelon};
  }
  .rmsc .dropdown-heading {
    min-height: 35px;
    height: unset;
  }
  .rmsc .dropdown-heading .dropdown-heading-value {
    width: 100%;
  }
  .rmsc .dropdown-container:focus-within {
    box-shadow: none;
    border-color: ${wildWaterMelon};
  }
  .location-dropdown {
    width: 100%;
  }
`;
