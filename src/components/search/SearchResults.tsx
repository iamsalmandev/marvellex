import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button, NFTCard } from '~/components';
import { useScrollToBottom } from '~/hooks';
interface Props {
  loading: boolean;
  data: any[];
  togleFilters: () => void;
  onScrollEnd: () => void;
}
export const SearchResults: React.FC<Props> = ({
  loading,
  data,
  togleFilters,
  onScrollEnd,
}) => {
  useScrollToBottom(() => onScrollEnd());

  return (
    <Container maxWidth="xl" style={{ minHeight: '500px' }}>
      <Box my={4} display="flex" justifyContent="center" flexWrap="wrap">
        {data.map((item) => (
          <Box key={item.id} m="8px">
            <NFTCard item={item} />
          </Box>
        ))}
      </Box>
      <Box
        bottom="40px"
        position="sticky"
        display={{ xs: 'block', sm: 'none' }}
      >
        <Button
          kind="watermelon"
          aria-label="search"
          styles={{
            padding: '8px 64px',
            fontSize: '18px',
            borderRadius: '26px',
          }}
          onClick={() => togleFilters()}
        >
          Filters
        </Button>
      </Box>
      <Box minHeight="50px" py={2} display="flex" justifyContent="center">
        {loading && <CircularProgress />}
      </Box>
    </Container>
  );
};
