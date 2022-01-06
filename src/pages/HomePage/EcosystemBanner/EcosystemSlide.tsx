import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { ashWhite } from "~/styles"
import { MultiComponentCard, SpacedHeading } from "~/components"
import Box from "@material-ui/core/Box"

export const EcosystemSlide: React.FC<{ slideNo: number, heading: string, description: string, imgUrl: string }> = ({ slideNo, heading, description, imgUrl }) => {
    return <Container maxWidth="xl" style={{ padding: 0, transition: 'all ease 0.5s' }}>
        <Box flexDirection={{ xs: "column-reverse", md: 'row' }} >
            <Grid container style={{ padding: '0 30px', flexDirection: 'inherit' }}>
                <Grid md={6} style={{ display: 'flex', alignItems: 'center' }}>

                    <MultiComponentCard cardStyles={{ minHeight: '280px', boxShadow: 'none', background: 'transparent', width: '100%', height: 'inherit', maxWidth: '500px', margin: 0, padding: "10px 0" }} item={{
                        components: [
                            { element: <SpacedHeading style={{ margin: 0, lineHeight: 1, textAlign: 'left', fontSize: '14px' }}>{slideNo}</SpacedHeading> },

                            { element: <Typography align='left' color='primary' variant='h5' style={{ marginTop: '24px', marginBottom: '24px', letterSpacing: '0.5px', transition: 'all ease 0.5s' }}>{heading}</Typography> },
                            {
                                element: <Typography variant='caption' align='left' style={{ lineHeight: '26px', fontSize: '16px', display: 'flex', color: ashWhite, }} >{description}
                                </Typography>
                            },
                        ]
                    }} />

                </Grid>
                <Grid md={6}>
                    <img width={"250px"} height={"250px"} src={imgUrl} alt="" />
                </Grid>
            </Grid>
        </Box>
    </Container >
}