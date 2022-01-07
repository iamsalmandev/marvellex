import Box, { BoxProps } from '@material-ui/core/Box';
import {
  Section,
  MultiComponentCard,
  CoinCard,
  SpacedHeading,
} from '~/components';
import { marvellexClassic, marvellexGold } from '~/assets';
import { Typography } from '@material-ui/core';
import { background, smokeGrey } from '~/styles';

export const CoinsBanner: React.FC<BoxProps> = (props) => {
  return (
    <Section {...props} style={{ background: background, padding: 0 }}>
      <Box
        marginTop={{ xs: '180px', md: '90px' }}
        marginBottom={{ xs: '90px', md: '90px' }}
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
      >
        <MultiComponentCard
          cardStyles={{ background: 'transparent', boxShadow: 'none' }}
          item={{
            components: [
              {
                element: (
                  <SpacedHeading
                    style={{
                      margin: 0,
                      lineHeight: 1,
                      textAlign: 'left',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                    }}
                  >
                    coins
                  </SpacedHeading>
                ),
              },
              {
                element: (
                  <Typography
                    align="left"
                    variant="h5"
                    style={{
                      marginTop: '24px',
                      marginBottom: '24px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Marvellex Coins
                  </Typography>
                ),
              },
              {
                element: (
                  <Typography
                    variant="caption"
                    align="left"
                    style={{
                      display: 'flex',
                      color: smokeGrey,
                    }}
                  >
                    Marvellex blockchain operates using its two tokens
                  </Typography>
                ),
              },
            ],
          }}
        />
        <CoinCard
          cardStyles={{ boxShadow: 'none' }}
          item={{
            title: 'Marvellex Classic',
            description:
              'Native coin of Marvellex that incentivizes blockchain validators and charges transaction fees. And every new block will have a newly-minted supply of MLXC.',
            to: '/',
          }}
          Icon={marvellexClassic}
        />
        <CoinCard
          cardStyles={{ boxShadow: 'none' }}
          item={{
            title: 'Marvellex Gold',
            description:
              'A highly secure digital token that is backed by physical gold.',
            to: '/',
          }}
          Icon={marvellexGold}
        />
      </Box>
    </Section>
  );
};
