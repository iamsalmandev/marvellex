import Box, { BoxProps } from '@material-ui/core/Box';
import { Section, Button, SpacedHeading, SpacedCapHeading } from '~/components';
import { whitePaper } from '~/assets';
import Typography from '@material-ui/core/Typography';
import { ashWhite } from '~/styles';



export const WhitepaperBanner: React.FC<BoxProps> = (props) => {
    return (

        <Section style={{ backgroundPosition: "center", background: `url(${whitePaper})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: "0" }} {...props} >
            <Box p={{ xs: "60px 0 0 10px", sm: '50px 0' }} display="flex" justifyContent={{ xs: "center", md: 'start' }} flexDirection={{ xs: 'column', lg: "row" }} flexWrap="wrap" alignItems={{ xs: "center", lg: 'start' }}>
                <Box width="100%" maxWidth="500px" display="flex" color={ashWhite} flexDirection="column"   >
                    <SpacedCapHeading style={{ textAlign: 'left' }}>WHITEPAPER</SpacedCapHeading>
                    <Typography variant="h5" color="inherit" align="left" style={{ maxWidth: '400px', fontWeight: 600, wordBreak: 'break-word', color: 'white' }}> Download the current
                        version of our Whitepaper
                    </Typography>
                    <Box display="flex" alignItems="center" flexWrap="wrap">
                        <Button
                            kind="teelish"
                            style={{
                                textTransform: 'uppercase',
                                marginRight: "20px",
                                padding: '10px 15px',
                                marginTop: "20px",
                                fontWeight: 700,
                                minWidth: "100px",
                                alignItems: "flex-start",
                                letterSpacing: "2px"

                            }}>
                            DOWNLOAD
                        </Button> <SpacedHeading color="inherit" style={{ textAlign: 'left', marginTop: "40px", wordBreak: 'break-word' }}>
                            Last updated 31 Dec 2021
                        </SpacedHeading></Box>

                </Box>

            </Box>

        </Section >
    );
}
