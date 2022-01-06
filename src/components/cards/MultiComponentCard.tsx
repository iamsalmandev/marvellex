import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { highlightGreen, marvelGreen } from '~/styles'

interface ItemType {
    components: { element: string | React.ReactNode; styles?: React.CSSProperties }[]
}

interface Props {
    item: ItemType;
    cardStyles?: React.CSSProperties;
}
export const MultiComponentCardDimension = { minHeight: '100px', width: '290px' };

export const MultiComponentCard: React.FC<Props> = ({
    item,
    cardStyles,
}) => {
    const { components } = item
    return (
        <Card
            onClick={() => undefined}
            style={{ transition: 'all ease 0.3s', margin: '15px', padding: "20px", background: highlightGreen, ...MultiComponentCardDimension, ...cardStyles }}
        >
            {components.map(({ element, styles = {} }) => typeof element === 'string' ? <Box py={1} color={marvelGreen} display="flex" style={styles}>
                {element}
            </Box> : element)}
        </Card >
    );
};
