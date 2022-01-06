import Box, { BoxProps } from "@material-ui/core/Box";
import { Section, SpacedHeading, SpacedCapHeading, MultiComponentCard } from "~/components";
import { webBackground, apple, play, mobileApp } from "~/assets";
import { Typography } from "@material-ui/core";
import { ashWhite } from "~/styles";

export const PromotionBanner: React.FC<BoxProps> = (props) => {
    return (
        <Section
            style={{
                background: `url(${webBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "32px 0",
            }}
            containerStyle={{ padding: 0 }}
            {...props}
        >
            <Box
                display="flex"
                height={{ xs: "530px", md: "400px" }}
                justifyContent="space-around"
                flexDirection={{ xs: "column-reverse", md: "row" }}
                alignItems={{ xs: "center" }}
            >
                <Box
                    position="relative"
                    height={{ xs: "300px", md: "450px" }}
                    width={{ xs: "300px", md: "450px" }}
                >
                    <Box
                        top={{
                            xs: "0px",
                            md: "40px",
                        }}
                        position="absolute"
                        width="inherit"
                        height={{ xs: "340px", md: "550px" }}
                    >
                        <img
                            style={{ height: "inherit", width: "inherit" }}
                            src={mobileApp}
                            alt=""
                        />
                    </Box>
                </Box>
                <Box
                    alignSelf="center"
                    width={{ xs: "85%", md: "300px" }}
                    height="unset"
                >
                    <MultiComponentCard
                        cardStyles={{
                            background: "transparent",
                            width: "inherit",
                            height: "inherit",
                            margin: 0,
                        }}
                        item={{
                            components: [
                                {
                                    element: (
                                        <SpacedCapHeading
                                            style={{
                                                color: ashWhite,
                                                margin: 0,
                                                lineHeight: 1,
                                                textAlign: "left",
                                                fontSize: "14px",
                                            }}
                                        >
                                            Our App
                                        </SpacedCapHeading>
                                    ),
                                },
                                {
                                    element: (
                                        <Typography
                                            align="left"
                                            variant="h5"
                                            style={{
                                                color: "white",
                                                marginTop: "24px",
                                                marginBottom: "24px",
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            Your gateway to all things
                                            Marvellex.
                                        </Typography>
                                    ),
                                },
                                {
                                    element: (
                                        <Typography
                                            variant="caption"
                                            align="left"
                                            style={{
                                                lineHeight: "26px",
                                                fontSize: "16px",
                                                display: "flex",
                                                color: ashWhite,
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit. Donec
                                            odio. Quisque volutpat mattis eros.
                                            Nullam malesuada erat ut turpis.
                                            Suspendisse urna nibh.
                                        </Typography>
                                    ),
                                },
                                {
                                    element: (
                                        <SpacedHeading
                                            style={{
                                                margin: 0,
                                                lineHeight: 1,
                                                textAlign: "left",
                                                fontSize: "14px",
                                            }}
                                        >
                                            <Box py={2} display="flex">
                                                <img
                                                    src={play}
                                                    alt=""
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                />{" "}
                                                <img src={apple} alt="" />
                                            </Box>
                                        </SpacedHeading>
                                    ),
                                },
                            ],
                        }}
                    />
                </Box>
            </Box>
        </Section>
    );
};
