import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { LazyLoadWrapper, FlexRowSpaceBetween } from '~/components';
import BigNumber from "bignumber.js";
import { useAppProvider, useFetchProtectedImage } from '~/hooks';


interface ItemType {
  carbon_offset: number;
  token_id: string;
  uuid: string;
}

interface Props {
  item: ItemType;
  imgHeight?: string;
  showButton?: boolean;
  cardStyles?: React.CSSProperties;
}
export const NFTCardDimension = { height: '320px', width: '250px' };

export const NFTCard: React.FC<Props> = ({
  imgHeight = '230px',
  item,
  cardStyles,
  showButton = true,
}) => {
  const { token_id, carbon_offset, uuid } = item

  const history = useHistory();
  const { basePrice } = useAppProvider()
  const src = useFetchProtectedImage(`/certificate/${uuid}/image`)

  const price_ = new BigNumber(carbon_offset.toString()).multipliedBy(new BigNumber(basePrice.toString()))


  return (
    <Card
      onClick={() => history.push('/certificate', { certificateData: { ...item, price: price_ } })}
      style={{ ...NFTCardDimension, ...cardStyles }}
    >
      <Box position="relative" display="flex">
        <LazyLoadWrapper dimension={{ width: '100%', height: imgHeight }}>
          {({ onLoad }) => (
            <img
              onLoad={onLoad}
              height="100%"
              width="100%"
              src={src}
              alt="loading..."
            />
          )}
        </LazyLoadWrapper>
      </Box>
      <Box p="4px">
        <FlexRowSpaceBetween alignItems="center" p="5px 10px">
          <Typography component="p">{`${carbon_offset}g`}</Typography>
          <Typography component="p">{price_ ? `${price_} NANO` : null}</Typography>
        </FlexRowSpaceBetween>

        <Box display="flex" justifyContent="center" p="5px 10px">
          {showButton && (
            <div />
          )}
        </Box>
      </Box>
    </Card >
  );
};
