import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { MainLayout } from '~/components';
import { ev2, ev3, ev5, dubaiEvent } from '~/assets'
import { Typography } from '@material-ui/core';
import { black80 } from '~/styles'

const data = [
    {
        name: "PreLaunch Seminar",
        imgUrl: ev2,
        assets: [
            { type: "img", uri: "ev-prelaunch1.jpeg" },
            { type: "img", uri: "ev-prelaunch2.jpeg" },
            { type: "img", uri: "ev-prelaunch3.jpeg" },
            { type: "img", uri: "ev-prelaunch4.jpeg" },
            { type: "img", uri: "ev-prelaunch5.jpeg" },
            { type: "img", uri: "ev-prelaunch6.jpeg" },
        ],
    },
    {
        name: "Classical Night",
        imgUrl: dubaiEvent,
        assets: [
            { type: "img", uri: "ev-rahat1.jpg" },
            { type: "img", uri: "ev-rahat2.jpg" },
            { type: "img", uri: "ev-rahat3.jpg" },
            { type: "img", uri: "ev-rahat4.jpg" },
            { type: "img", uri: "ev-rahat5.jpg" },
            { type: "img", uri: "ev-rahat6.jpg" },
            { type: "img", uri: "ev-rahat7.jpg" },
            { type: "img", uri: "ev-rahat8.jpg" },
            { type: "img", uri: "ev-rahat9.jpg" },
            { type: "img", uri: "ev-rahat10.jpg" },
            { type: "img", uri: "ev-rahat11.jpg" },
            { type: "img", uri: "ev-rahat12.jpg" },
            { type: "img", uri: "ev-rahat13.jpg" },
        ],
    },
    {
        name: "TBA Road Show",
        imgUrl: ev5,
        assets: [{ type: "img", uri: "" }],
        onClick: () => undefined,
    },
    {
        name: "Sumit in UK",
        imgUrl: ev3,
        assets: [{ type: "img", uri: "" }],
        onClick: () => undefined,
    },
];

export const EventsPage: React.FC<{}> = () => {
    return (
        <MainLayout >
            <Container maxWidth="xl" style={{ minHeight: '500px' }}>
                <Box py={4} color={black80}><Typography variant='h5' color="inherit">Events</Typography></Box>
                <Box my={2} display="flex" justifyContent="center" flexWrap="wrap">
                    {data.map((event, idx) => (
                        <Box key={idx} m="4px">
                            <img width="280px" src={event.imgUrl} alt="" />
                        </Box>
                    ))}
                </Box>

            </Container>
        </MainLayout >
    );
};
