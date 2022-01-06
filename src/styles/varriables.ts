import { createMuiTheme } from '@material-ui/core/styles';
import { css } from 'styled-components';

// Primary
export const navyBlue = '#27387D';
export const dullnavyBlue = '#182766';
export const wildWaterMelon = '#FF5A60';
export const teelish = '#2AA39A';
export const marvelGreen = ' #00A87D';
export const yellow = '#F5D164';
export const dullYellow = '#b39743';
export const dullTeelish = '#209aab';

export const background = 'white';
// text colors
export const highlightGreen = '#F0F9F6';
export const darkBlue = '#203541';
export const darkGrey = '#26292d';
export const smokeGrey = '#7B7B7B';
export const ashWhite = '#BBBBBB';
export const lightAshWhite = '#E1E1E1';
export const vulcanGrey = '#373A40';
export const black80 = 'rgba(0,0,0,0.80)';

export const white50 = 'rgba(1,1,1,0.50)';
export const black70 = 'rgba(0,0,0,0.70)';
export const black50 = 'rgba(0,0,0,0.50)';
export const black20 = 'rgba(0,0,0,0.20)';
// Message or Indicator Colors
export const successGreen = '#155724';
export const dullSuccessGreen = '#155724';
export const errorRed = '#db4d62';
export const dullErrorRed = '#af3d4e';
export const darkRed = '#f44336';
export const lightRed = '#ef3c61';

// z-index
export const zeroZIndex = 0;
export const oneZIndex = 1;
export const headerHeight = 80;
export const tabHeaderZIndex = 100;
export const headerZindex = 999;
export const menuZIndex = headerZindex + 1;
export const snackbarZIndex = menuZIndex + 1;

// break-points
export const desktopLgWidthPixels = 1400;
export const desktopLgWidth = `${desktopLgWidthPixels}px`;
export const desktopWidthPixels = 1200;
export const desktopWidth = `${desktopWidthPixels}px`;
export const tabletLandscapeWidthPixels = 1024;
export const tabletLandscapeWidth = `${tabletLandscapeWidthPixels}px`;
export const tabletWidthPixels = 768;
export const tabletWidth = `${tabletWidthPixels}px`;
export const mobileLandscapeWidthPixels = 576;
export const mobileLandscapeWidth = `${mobileLandscapeWidthPixels}px`;
export const mobileWidthPixels = 320;
export const mobileWidth = `${mobileWidthPixels}px`;

export const carouselBreakpointSm = 575;
export const carouselBreakpointMd = 767;
export const carouselBreakpointLg = 991;
export const carouselBreakpointXl = 1319;

// Material ui custom break points
export const MuiCustomBreakPoints = createMuiTheme({
  palette: {
    primary: {
      main: teelish,
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: ['Montserrat'].join(','),
    h3: { letterSpacing: '2px' },
    h4: { letterSpacing: '3px', fontWeight: 600 },
    h5: {
      letterSpacing: '3px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '2px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
});

export const printHidden = css`
  @media print {
    display: none;
  }
`;
