import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { MainLayout, CountdownClock, MuiSelect, TextField } from '~/components';
import Typography from '@material-ui/core/Typography';
import { black80 } from '~/styles'
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';

export const currencies = [
    {
        key: 'ETH',
        name: 'ETH',
        text: 'ETH',
        value: 'ETH',
    },
    {
        key: 'USD',
        name: 'USD',
        text: 'USD',
        value: 'USD',
    }];

export const IcoPage: React.FC<{}> = () => {
    const [amount, setAmount] = useState('0')
    const [currency, setCurrency] = useState<
        [{ name: string; value: string; text: string; key: string }]
    >([currencies[0]]);

    return (
        <MainLayout >
            <Container maxWidth="xl" style={{ color: black80, minHeight: '500px' }}>
                <Box py={4} ><Typography variant='h5' color="inherit">ICO</Typography></Box>
                <Box>
                    <Box  ><Typography variant='subtitle1' color="inherit" align='left'>Rates</Typography></Box>
                    <Box ><Typography variant='subtitle2' color="inherit" align='left'>1 ETH = 1 TOKEN</Typography></Box>
                    <Box my={4}><CountdownClock header='Time left' futureDate={new Date(1641620678 * 1000)} /></Box>
                    <Box maxWidth={"600px"} m="auto">
                        <Grid
                            spacing={2}
                            container
                            style={{ alignItems: 'center', marginTop: '10px', justifyContent: 'center' }}
                        >
                            <Grid xs={10} md={6} style={{ display: 'flex', justifyContent: 'center' }} >
                                <TextField

                                    variant="outlined"
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="Enter amounnt"
                                    style={{ width: '90%', alignSelf: 'center' }}
                                />
                            </Grid>

                            <Grid xs={10} md={6}>
                                <MuiSelect
                                    style={

                                        { width: '90%', alignSelf: 'center', margin: '10px' }
                                    }
                                    selectedValues={currency}
                                    onChange={(e) => {
                                        const {
                                            target: { value: val },
                                        } = e;
                                        const selectedValues = currencies.find(
                                            ({ value }) => value === val
                                        );
                                        setCurrency([selectedValues || currency?.[0]]);
                                    }}
                                    values={currencies}
                                />
                            </Grid>

                        </Grid>
                    </Box>

                </Box>
            </Container>
        </MainLayout >
    );
};
