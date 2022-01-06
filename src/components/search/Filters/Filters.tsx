import { DrawerProps } from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import ArrowBack from '@material-ui/icons/ArrowBack';
import FilterList from '@material-ui/icons/FilterList';
import Close from '@material-ui/icons/Close';
import { FlexRowSpaceBetween } from '~/components';
import { Form, FilterFormProps } from './Form';
import { Drawer } from '../elements';

export interface FiltersProps {
  togleFilters: () => void;
  filterFormProps: FilterFormProps;
}

export const Filters: React.FC<FiltersProps & DrawerProps> = (props) => {
  const { open, togleFilters, filterFormProps } = props;
  return (
    <Drawer variant="permanent" {...props}>
      <FlexRowSpaceBetween>
        {open && (
          <IconButton
            aria-label="search"
            style={{ fontSize: '18px' }}
            onClick={() => togleFilters()}
          >
            <FilterList />
          </IconButton>
        )}
        <IconButton
          style={{ fontSize: '18px' }}
          aria-label="search"
          onClick={() => togleFilters()}
        >
          <>
            <Hidden xsDown> {open ? <ArrowBack /> : <FilterList />}</Hidden>
            <Hidden smUp> {<Close />}</Hidden>
          </>
        </IconButton>
      </FlexRowSpaceBetween>
      <Box
        mt="20px"
        display={open ? 'block' : 'none'}
        style={{ transition: '0.2s all ease' }}
      >
        <Form {...filterFormProps} />
      </Box>
    </Drawer>
  );
};
