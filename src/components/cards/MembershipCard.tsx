import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Security from '@material-ui/icons/Security';
import { FlexRowCenter } from '../elements';


interface ItemType {
    iconColor: string,
    heading: string,
    text: string,
}

interface Props {
    item: ItemType;
    cardStyles?: React.CSSProperties;
}
export const MembershipCardDimension = { minHeight: '220px', width: '100%' };

export const MembershipCard: React.FC<Props> = ({
    item,
    cardStyles,
}) => {
    const { iconColor, text, heading } = item


    return (
        <Card
            onClick={() => undefined}
            style={{ ...MembershipCardDimension, ...cardStyles }}
        >
            <Box display="flex" alignItems="center" p={2} >
                <Security fontSize='large' style={{ color: iconColor, marginRight: '4px' }} />
                <Typography component="p" align='center'>{`${heading}`}</Typography>
            </Box>
            <Box p="4px">
                <FlexRowCenter alignItems="center" p="5px 10px">
                    <Typography component="p" align='left'>{`${text}`}</Typography>
                </FlexRowCenter>
            </Box>
        </Card >
    );
};
