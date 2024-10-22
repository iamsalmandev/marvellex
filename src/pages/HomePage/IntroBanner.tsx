import Box, { BoxProps } from "@material-ui/core/Box";
import { Section, Button, SpacedHeading } from "~/components";
import { worldMap } from "~/assets";
import { TypographyH1 } from "~/components";
import { css } from "styled-components";
import { sizeTablet, } from '~/styles';

const registerBtnCss = css`
    text-transform: uppercase;
    padding: 15px;
    margin-top: 20px;
    font-weight: 700;
    min-width: 150px;
    align-self: flex-start;
    align-items: flex-start;
    letter-spacing: 2px;
    border-radius: 7px;
    ${sizeTablet(css`
        font-size: 12px;
        padding: 10px 10px;
    `)}
`

export const IntroBanner: React.FC<BoxProps> = (props) => {
    return (
        <Section
            style={{
                background: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right",
                padding: "56px 0"
            }}
            {...props}
        >
            <>
                <Box
                    padding="0px"
                    display="flex"
                    justifyContent="center"
                    flexDirection={{ xs: "column", lg: "row" }}
                    flexWrap="wrap"
                    alignItems={{ xs: "center", lg: "start" }}
                >
                    <Box
                        width="100%"
                        maxWidth="500px"
                        display="flex"
                        color="black"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <SpacedHeading style={{ textShadow: '2px 2px 4px white', textTransform: 'uppercase' }}>Welcome to Marvellex</SpacedHeading>
                        <TypographyH1 style={{ fontWeight: 700, color: '#04231b', textShadow: '2px 2px 4px white' }}>The Internet of value is Here</TypographyH1>
                        <SpacedHeading
                            color="inherit"
                            style={{
                                wordBreak: "break-word",
                            }}
                        >
                            Global. Accessible. Rewarding.
                        </SpacedHeading>
                        <Button
                            kind="teelish"
                            customCss={registerBtnCss}
                        >
                            Register Now
                        </Button>
                    </Box>
                </Box>
            </>
        </Section>
    );
};
