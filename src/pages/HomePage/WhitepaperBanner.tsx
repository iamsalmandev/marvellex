import Box, { BoxProps } from '@material-ui/core/Box';
import { Section, Button, SpacedHeading, } from '~/components';
import { whitePaper } from '~/assets';
import Typography from '@material-ui/core/Typography';
import { ashWhite } from '~/styles';



export const WhitepaperBanner: React.FC<BoxProps> = (props) => {
    return (

        <Section style={{ backgroundPosition: "center", background: `url(${whitePaper})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: "50px 0" }} {...props} >
            <>
                <Box display="flex" justifyContent={{ xs: "center", md: 'start' }} flexDirection={{ xs: 'column', lg: "row" }} flexWrap="wrap" alignItems={{ xs: "center", lg: 'start' }}>
                    <Box width="100%" maxWidth="500px" display="flex" color={ashWhite} flexDirection="column"   >
                        <SpacedHeading style={{ textAlign: 'left' }}>WHITEPAPER</SpacedHeading>
                        <Typography variant="h5" color="inherit" align="left" style={{ maxWidth: '400px', fontWeight: 600, wordBreak: 'break-word', }}> Download the current
                            version of our Whitepaper
                        </Typography>
                        <Box display="flex" alignItems="center" flexWrap="wrap">
                            <Button
                                kind="teelish"
                                style={{
                                    textTransform: 'uppercase',
                                    marginRight: "20px",
                                    padding: '10px',
                                    marginTop: "20px",
                                    fontWeight: 700,
                                    minWidth: "200px",
                                    alignItems: "flex-start",
                                    letterSpacing: "2px"

                                }}>
                                Register Now
                            </Button> <SpacedHeading color="inherit" style={{ textAlign: 'left', marginTop: "40px", wordBreak: 'break-word' }}>
                                Global. Accessible. Rewarding.
                            </SpacedHeading></Box>

                    </Box>

                </Box>
            </>
        </Section >
    );
}
