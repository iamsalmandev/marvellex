import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { LazyLoadWrapper, } from '~/components';
import { FlexRowCenter } from '../elements';
import { black20 } from '~/styles'
import styled from 'styled-components';

export const CardGradientOverlay = styled.div`
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom, ${black20}, transparent);
  background-image: -webkit-linear-gradient(to bottom, ${black20}, transparent);
  background-image: -moz-linear-gradient(to bottom, ${black20}, transparent);
`;


interface ItemType {
    name: string;
    title: string;
    imgUrl: string;
}

interface Props {
    item: ItemType;
    imgHeight?: string;
    showButton?: boolean;
    cardStyles?: React.CSSProperties;
}
export const TeamCardDimension = { height: '360px', width: '290px' };

export const TeamCard: React.FC<Props> = ({
    imgHeight = '280px',
    item,
    cardStyles,
    showButton = true,
}) => {
    const { name, title, imgUrl } = item


    return (
        <Card
            onClick={() => undefined}
            style={{ padding: "10px", ...TeamCardDimension, ...cardStyles }}
        >
            <Box position="relative" display="flex">
                <LazyLoadWrapper dimension={{ width: '100%', height: imgHeight }}>
                    {({ onLoad }) => (
                        <>
                            <CardGradientOverlay />
                            <img
                                onLoad={onLoad}
                                height="100%"
                                width="100%"
                                src={imgUrl}
                                style={{ borderRadius: '4px' }}
                                alt="loading..."
                            />
                        </>
                    )}
                </LazyLoadWrapper>
            </Box>
            <Box p="4px">
                <FlexRowCenter alignItems="center" p="5px 10px">
                    <Typography align='center' variant='body2'>{`${name}`}</Typography>

                </FlexRowCenter>
                <FlexRowCenter alignItems="center" p="5px 10px">
                    <Typography align='center' variant='caption'>{`${title}`}</Typography>

                </FlexRowCenter>



            </Box>
        </Card >
    );
};
