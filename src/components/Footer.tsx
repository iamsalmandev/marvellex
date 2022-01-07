import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { background, black50, sizeTablet, smokeGrey } from '~/styles';
import { marvellexLogo } from '~/assets';
import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import MuiLink from '@material-ui/core/Link';
import { GetComponentProps, SpacedHeading } from '~/components';
const CopyRight = styled.p`
  font-size: 1rem;
  line-height: 1.41;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 32px;
  margin-top: 4px;
  color: ${smokeGrey};
  text-align: left;
`;

const StyledMuiLink = styled((props) => <MuiLink {...props} />)`
  display: flex;
  font-weight: regular;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 2;
  margin: 0 16px;
  cursor: pointer;
  text-decoration: none;
  color: ${black50};
  ${sizeTablet(css`
    font-size: 16px;
    margin: 0 8px;
  `)}
  &:hover {
    color: ${black50};
  }
` as React.FC<GetComponentProps<typeof MuiLink>>;
export const Footer = () => {
  return (
    <Box
      width="100%"
      height="400px"
      style={{
        background: background,
      }}
    >
      <Container
        maxWidth="xl"
        style={{ height: 'inherit', paddingTop: '2.5rem' }}
      >
        <Grid
          spacing={1}
          container
          style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}
        >
          <Grid item md={8}>
            {' '}
            <img
              style={{ width: '40px', height: 'auto', margin: '0 1.2rem' }}
              src={marvellexLogo}
              alt="loading"
            />
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
        <Grid
          spacing={1}
          container
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Grid item md={4}>
            <SpacedHeading
              style={{
                wordBreak: 'break-word',
                fontSize: '14px',
                fontWeight: 'normal',
                letterSpacing: '1px',
                margin: '1rem 0.5rem',
              }}
            >
              Marvellex is a decentralized network that enables individuals to
              create platforms for information, value transfer, and exchange
              whatever, wherever and whenever they want, with others using
              blockchain technology.
            </SpacedHeading>
          </Grid>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <SpacedHeading
              style={{
                color: 'black',
                fontWeight: 600,
                letterSpacing: 0.5,
                fontSize: '1.7ch',
              }}
            >
              Quick Links
            </SpacedHeading>
            <Box display="flex">
              <Box>
                <StyledMuiLink>Home</StyledMuiLink>
                <StyledMuiLink>Vission</StyledMuiLink>
                <StyledMuiLink>Leadership</StyledMuiLink>
                <StyledMuiLink>Roadmap</StyledMuiLink>
              </Box>
              <Box>
                <StyledMuiLink>Membership</StyledMuiLink>
                <StyledMuiLink>Events</StyledMuiLink>
                <StyledMuiLink>Whitepaper</StyledMuiLink>
                <StyledMuiLink>Get Wallet</StyledMuiLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          style={{ marginTop: '40px', display: 'flex', alignItems: 'center' }}
        >
          <Grid item md={8}>
            {' '}
            <CopyRight>
              &copy;{new Date().getFullYear()} Marvellex.
              {' All Rights Reserved.'}
            </CopyRight>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};
