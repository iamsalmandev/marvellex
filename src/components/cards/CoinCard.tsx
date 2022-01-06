import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { highlightGreen, marvelGreen, smokeGrey } from '~/styles'
import { Link } from 'react-router-dom';

interface ItemType {
    title: string;
    description: string;
    to?: string;
}

interface Props {
    item: ItemType;
    Icon: string;
    cardStyles?: React.CSSProperties;
}
export const CoinCardDimension = { height: '320px', width: '290px' };

export const CoinCard: React.FC<Props> = ({
    Icon,
    item,
    cardStyles,
}) => {
    const { title, description, to } = item
    return (
        <Card
            onClick={() => undefined}
            style={{ margin: '15px', padding: "20px", background: highlightGreen, ...CoinCardDimension, ...cardStyles }}
        >
            <Box py={1} display="flex">
                <img src={Icon} alt='' />
            </Box>
            <Box py={1} color={marvelGreen} display="flex">
                <Typography color='inherit' align='left' variant='h5'>{`${title}`}</Typography>
            </Box>
            <Box py={1} color={smokeGrey} display="flex" >
                <Typography align='left' color='inherit' variant='caption'>{`${description}`}</Typography>
            </Box>
            {to && <Box py={1} color={marvelGreen} display="flex" >
                <Link to={to} style={{ color: 'inherit', letterSpacing: '3px', textDecoration: 'none' }}> <Typography align='left' color='inherit' variant='h6'>Learn More</Typography></Link>
            </Box>}
        </Card >
    );
};
