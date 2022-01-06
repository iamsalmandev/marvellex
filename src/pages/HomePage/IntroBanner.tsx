import Box, { BoxProps } from '@material-ui/core/Box';
import { Section, Button, SpacedHeading, } from '~/components';
import { worldMap } from '~/assets';
import Typography from '@material-ui/core/Typography';

export const IntroBanner: React.FC<BoxProps> = (props) => {
    return (
        <Section style={{ background: `url(${worldMap})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} {...props} >
            <>

                <Box display="flex" justifyContent="center" flexDirection={{ xs: 'column', lg: "row" }} flexWrap="wrap" alignItems={{ xs: "center", lg: 'start' }}>
                    <Box width="100%" maxWidth="500px" display="flex" color="black" flexDirection="column" alignItems="center" >
                        <SpacedHeading>Welcome to Marvellex</SpacedHeading>
                        <Typography variant="h2" color="inherit" align="center" style={{ fontWeight: 600, wordBreak: 'break-word', }}> The Internet of Value is Here
                        </Typography>
                        <SpacedHeading color="inherit" style={{ marginTop: "40px", wordBreak: 'break-word' }}>
                            Global. Accessible. Rewarding.
                        </SpacedHeading>
                        <Button
                            kind="teelish"
                            style={{
                                textTransform: 'uppercase',
                                padding: '20px',
                                marginTop: "20px",
                                fontWeight: 700,
                                minWidth: "200px",
                                alignSelf: "flex-start",
                                alignItems: "flex-start",
                                letterSpacing: "2px"

                            }}>
                            Register Now
                        </Button>
                    </Box>

                </Box>
            </>
        </Section >
    );
}

