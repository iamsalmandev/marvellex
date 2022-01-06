import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CheckCircle from '@material-ui/icons/CheckCircleOutlineTwoTone'
import Cancel from '@material-ui/icons/CancelOutlined';
import { FlexRowCenter, MainLayout, MembershipCard, Table } from '~/components';
import { black80 } from '~/styles';
import Grid from '@material-ui/core/Grid';

const mebershipTypes = [{
  iconColor: "green",
  heading: "Premium Membership",
  text: "For Premium Membership, sacrifice USDT, ETH or BTC worth $10, 000 and annually $5, 000 for renewals"
}, {
  iconColor: "yellow",
  heading: "Gold Membership",
  text: "For Gold Membership, sacrifice USDT, ETH or BTC worth $25,000 and annually $10, 000 for renewals"
}, {
  iconColor: "black",
  heading: "Platinum Membership",
  text: "To acquire Platinum Membership, sacrifice USDT, ETH or BTC worth $50,000 and annually $20,000 for renewals"
}];

const internalBenefits = [
  {
    name: "Monthly Reward Based on Sharia",
    premium: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Access Member only NFT Marketplace for Auction of Cars, Horses and Arts",
    premium: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Access Private Award Shows Celebrities",
    premium: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Business Centers",
    premium: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Invitation to Global Premium Events",
    premium: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Personalised Travel Guide in 30 major cities of the world",
    premium: false,
    gold: true,
    platinum: true,
  },
];
const externalBenefits = [
  {
    name: "Discount on Corporate Hotels",
    premium: true,
    gold: true,
    platinum: true,
  },
  {
    name: "SPA",
    premium: true,
    gold: true,
    platinum: true,
  },

  {
    name: "Gym",
    premium: true,
    gold: true,
    platinum: true,
  },

  {
    name: "Pools and Beach Access",
    premium: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Transport",
    premium: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Sports",
    premium: true,
    gold: true,
    platinum: true,
  },

  {
    name: "Airline & Aviation",
    premium: true,
    gold: true,
    platinum: true,
  },

  {
    name: "Consulting & Business Services",
    premium: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Global Digital & IT Services (Marvellexsoftware house)",
    premium: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Tourism",
    premium: true,
    gold: true,
    platinum: true,
  },

  {
    name: "Investment Management",
    premium: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Education",
    premium: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Food and Beverages",
    premium: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Health & Wellness",
    premium: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Luxury and Retails Services",
    premium: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Live entertainment",
    premium: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Private member clubs worldwide",
    premium: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Priority Service in Banking",
    premium: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Construction & Engineering",
    premium: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Chauffeur",
    premium: false,
    gold: false,
    platinum: true,
  },
  {
    name: "HR Services",
    premium: false,
    gold: false,
    platinum: true,
  },
  {
    name: "Insurance",
    premium: false,
    gold: false,
    platinum: true,
  },
];

export const MembershipPage: React.FC<{}> = () => {
  return (
    <MainLayout >
      <Container maxWidth="xl" style={{ color: black80, minHeight: '500px' }}>
        <Box py={4} color="inherit"><Typography variant='h5' color="inherit">Membership</Typography></Box>
        <Grid spacing={2} container>
          {mebershipTypes.map((item) => <Grid item md={4}> <MembershipCard item={item} /></Grid>)}
        </Grid>
        <Box py={2}><Typography variant='h6' style={{ fontSize: '20px' }} color="inherit">External Benefits</Typography></Box>
        <Box>
          <Table
            style={{ borderRadius: "5px" }}
            isVariableWidth
            tableContent={{
              headers: [
                {
                  data: <Typography variant="h6" >Name</Typography>,
                  percentWidth: "55%",
                },
                {
                  data: <Typography variant="h6" align='center' >Premium</Typography>,
                  percentWidth: "15%",
                },
                {
                  data: <Typography variant="h6" align='center' >Gold</Typography>,
                  percentWidth: "15%",
                },
                {
                  data: <Typography variant="h6" align='center' >Platinum</Typography>,
                  percentWidth: "15%",
                },

              ],

              rows: externalBenefits.map((data_) => {
                const { name, premium, gold, platinum } = data_;
                return {
                  data: [
                    <Typography>{name}</Typography>,
                    <FlexRowCenter>{premium ? <CheckCircle color="primary" fontSize='small' /> : <Cancel fontSize='small' color="primary" />}</FlexRowCenter>,
                    <FlexRowCenter>{gold ? <CheckCircle color="primary" fontSize='small' /> : <Cancel color="primary" fontSize='small' />}</FlexRowCenter>,
                    <FlexRowCenter>{platinum ? <CheckCircle color="primary" fontSize='small' /> : <Cancel color="primary" fontSize='small' />}</FlexRowCenter>,
                  ],
                };
              }),
            }}
          />
        </Box>
        <Box py={2}><Typography variant='h6' style={{ fontSize: '20px' }} color="inherit">Internal Benefits</Typography></Box>
        <Box pb={4}>
          <Table
            style={{ borderRadius: "5px" }}
            isVariableWidth
            tableContent={{
              headers: [
                {
                  data: <Typography variant="h6" >Name</Typography>,
                  percentWidth: "55%",
                },
                {
                  data: <Typography variant="h6" align='center'>Premium</Typography>,
                  percentWidth: "15%",
                },
                {
                  data: <Typography variant="h6" align='center'>Gold</Typography>,
                  percentWidth: "15%",
                },
                {
                  data: <Typography variant="h6" align='center' >Platinum</Typography>,
                  percentWidth: "15%",
                }
              ],

              rows: internalBenefits.map((data_) => {
                const { name, premium, gold, platinum } = data_;
                return {
                  data: [
                    <Typography>{name}</Typography>,
                    <FlexRowCenter >{premium ? <CheckCircle color="primary" fontSize='small' /> : <Cancel color="primary" fontSize='small' />}</FlexRowCenter>,
                    <FlexRowCenter >{gold ? <CheckCircle color="primary" fontSize='small' /> : <Cancel color="primary" fontSize='small' />}</FlexRowCenter>,
                    <FlexRowCenter >{platinum ? <CheckCircle color="primary" fontSize='small' /> : <Cancel color="primary" fontSize='small' />}</FlexRowCenter>,
                  ],
                };
              }),
            }}
          />
        </Box>
      </Container>
    </MainLayout>
  );
};
