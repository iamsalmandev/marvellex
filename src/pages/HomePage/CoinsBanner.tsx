import Box, { BoxProps } from '@material-ui/core/Box';
import { Section, SpacedHeading, MultiComponentCard, CoinCard } from '~/components';
import { marvellexClassic, marvellexGold } from '~/assets';
import { Typography } from '@material-ui/core';
import { background, smokeGrey } from '~/styles';

export const CoinsBanner: React.FC<BoxProps> = (props) => {
    return (
        <Section  {...props} style={{ background: background, padding: 0 }}  >
            <Box marginTop={{ xs: "180px", md: "90px" }} marginBottom={{ xs: "90px", md: "90px" }} display="flex" justifyContent="center" flexWrap="wrap">
                <MultiComponentCard cardStyles={{ background: 'white' }} item={{
                    components: [
                        { element: <SpacedHeading style={{ margin: 0, lineHeight: 1, textAlign: 'left', fontSize: '14px' }}>coins</SpacedHeading> },
                        { element: <Typography align='left' variant='h5' style={{ marginTop: '24px', marginBottom: '24px', letterSpacing: '0.5px' }}>Aliquam tincidunt mauris eu risus</Typography> },
                        { element: <Typography variant='caption' align='left' style={{ display: 'flex', color: smokeGrey, }} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh.</Typography> }]
                }} />
                <CoinCard item={{ title: "Marvellex Classic", description: "Lorem ipsum dolor sit amet, Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh.", to: '/' }} Icon={marvellexClassic} />
                <CoinCard item={{ title: "Marvellex Gold", description: "Lorem ipsum dolor sit amet, Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh.", to: '/' }} Icon={marvellexGold} />
            </Box>
        </Section >
    );
}

