import Box from '@material-ui/core/Box';
import MuiMenu from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import { marvellexLogo } from '~/assets';
import {
  FlexRowSpaceBetween,
  FlexRowCenter,
  Menu,
  StyledMenuItem,
  Button,
  StyledMuiLink,
} from '~/components';
import { darkBlue, headerHeight, headerZindex, marvelGreen } from '~/styles';
import Hidden from '@material-ui/core/Hidden';

export const Header: React.FC<{}> = () => {
  const history = useHistory();

  const signedMenuItems = [
    <StyledMenuItem onClick={() => history.push("/ico")}>ICO</StyledMenuItem>,
    <StyledMenuItem onClick={() => history.push("/events")}>events</StyledMenuItem>,
    <StyledMenuItem onClick={() => history.push("/leadership")}>leadership</StyledMenuItem>,
    <StyledMenuItem onClick={() => history.push("/membership")}>mebership benefits</StyledMenuItem>
  ]




  return (
    <FlexRowSpaceBetween
      bgcolor="white"
      zIndex={headerZindex}
      boxShadow="0 0 2px lightgrey"
      top={0}
      position="fixed"
      width="100%"
      height={`${headerHeight}px`}
    >
      <a href="/">
        <FlexRowCenter
          width={`${headerHeight - 10}px`}
          height={`${headerHeight - 10}px`}
          ml="20px"
          borderRadius="16px"
          bgcolor={"white"}
        >
          <img height="100%" width="100%" src={marvellexLogo} alt="loading..." />
        </FlexRowCenter>
      </a>

      <Box
        display="flex"
        alignItems="center" pr={{ xs: '5px', sm: '15px' }}>
        <Hidden smDown>
          <StyledMuiLink onClick={() => history.push("/ico")} >ICO</StyledMuiLink>
          <StyledMuiLink onClick={() => history.push("/events")} >Events</StyledMuiLink>
          <StyledMuiLink onClick={() => history.push("/leadership")}>Leadership</StyledMuiLink>
        </Hidden>
        <Box color={darkBlue} ml="15px" mr="20px">

          <Hidden smDown>
            <Button
              kind='teelish'
              style={{ padding: "10px 20px", textTransform: "capitalize" }}
              onClick={() => {
                history.push("/membership")

              }}
            >
              Membership Benefits
            </Button>
          </Hidden>

          <Box
            display="flex"
            alignItems="center"
            pr={{ xs: '5px', sm: '15px' }}>


            <Hidden mdUp>
              <Menu
                iconButtonStyle={{
                  background: 'white',
                  color: darkBlue,
                  marginRight: '2px',
                  padding: '5px',
                  fontSize: '18px',
                  borderRadius: '50%',
                }}
                title={<Box bgcolor={marvelGreen} p={"5px"} display="flex" borderRadius="2px" color="white"><MuiMenu color="inherit" style={{ background: marvelGreen }} /></Box>}

                getMenuItems={() => signedMenuItems}
              />
            </Hidden>
          </Box>
        </Box>
      </Box>
    </FlexRowSpaceBetween >
  );
};
