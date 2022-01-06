import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { MainLayout, TeamCard } from '~/components';
import { amir, ayaz, bilal, raza, saoud, azeem } from '~/assets'
import { Typography } from '@material-ui/core';
import { black80 } from '~/styles'
const data = [{
  imgUrl: saoud,
  name: "Sheikh Saoud Bin Faisal Al Qassimi",
  title: "Chairman"
},
{
  imgUrl: amir,
  name: "Amir Umar Malik",
  title: "Co-Founder & Board of Director"
},
{ imgUrl: raza, name: "Muhammad Raza", title: "CEO" },
{ imgUrl: azeem, name: "Azeem Sheraz", title: "COO" },
{ imgUrl: bilal, name: "Bilal Arif", title: "CTO" },
{
  imgUrl: ayaz,
  name: "Ayaz Khan",
  title: "Manager Administration"
}
]

export const LeadershipPage: React.FC<{}> = () => {
  const renderCard = (item: any) => <Box key={item.name} m="10px">
    <TeamCard item={item} />
  </Box>
  return (
    <MainLayout >
      <Container maxWidth="xl" style={{ minHeight: '500px' }}>
        <Box py={4} color={black80}><Typography variant='h5' color="inherit">Leadership</Typography></Box>
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {data.map((item, idx) => (
            <>{(idx === 0) ? <Box display="flex" width="100%" justifyContent="center" > {renderCard(item)}</Box> : renderCard(item)}

            </>
          ))}
        </Box>

      </Container>
    </MainLayout >
  );
};
