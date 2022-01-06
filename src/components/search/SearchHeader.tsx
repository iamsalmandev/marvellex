import { Container, Box } from '@material-ui/core';
import HighlightOffRounded from '@material-ui/icons/HighlightOffRounded';
import { darkBlue } from '~/styles';
import { FilterFormProps } from './Filters';
import { FlexRowSpaceBetween, Button } from '~/components';
import { Chip } from './elements';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export interface SearchHeaderProps {
  filterFormProps: FilterFormProps;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  filterFormProps,
}) => {
  const { values, resetForm, setFieldValue } = filterFormProps;

  const currentfilters: React.ReactNode[] = [];
  Object.keys(values).forEach((key) => {
    if (key === 'carbonOffsetUnit') return null;
    if (!!values[key] && key === 'minCarbonOffset')
      currentfilters.push(
        <Chip onClick={() => setFieldValue(key, '')}>
          {`min ${values[key]} ${values['carbonOffsetUnit'].value}`}
          <HighlightOffRounded style={{ width: '16px', marginLeft: '2px' }} />
        </Chip>
      );
    if (!!values[key] && key === 'maxCarbonOffset') {
      currentfilters.push(
        <Chip onClick={() => setFieldValue(key, '')}>
          {`max ${values[key]} ${values['carbonOffsetUnit'].value}`}{' '}
          <HighlightOffRounded style={{ width: '16px', marginLeft: '2px' }} />
        </Chip>
      );
    }

    if (key === 'nanoTasks') {
      currentfilters.push(
        ...values[key].map(({ name, id }) => (
          <Chip
            onClick={() => {
              const newValues = values[key].filter(({ id: id_ }) => id_ !== id);
              setFieldValue(key, newValues);
            }}
          >
            {name}{' '}
            <HighlightOffRounded style={{ width: '16px', marginLeft: '2px' }} />
          </Chip>
        ))
      );
    }
    if (key === 'location') {
      currentfilters.push(
        ...values[key].map(({ label, value }) => (
          <Chip
            onClick={() => {
              const newValues = values[key].filter(
                ({ value: value_ }) => value_ !== value
              );
              setFieldValue(key, newValues);
            }}
          >
            {label}
            <HighlightOffRounded style={{ width: '16px', marginLeft: '2px' }} />
          </Chip>
        ))
      );
    }
    return null;
  });

  return (
    <Container maxWidth="lg">
      <FlexRowSpaceBetween flexWrap="wrap" overflow="hidden" p="40px 16px">
        <Box
          fontSize={{
            xs: '24px',
            mb: '30px',
            sm: '36px',
            md: '40px',
          }}
          style={{
            color: darkBlue,
            textTransform: 'capitalize',
            lineHeight: 1.5,
            alignSelf: 'flex-start',
          }}
        >
          Marketplace
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"

        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              style={{
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                padding: '1px 6px',
                fontSize: '12px',
                fontWeight: 300,
              }}
              kind={values.order === 'carbon' ? 'dark-blue-toggle' : undefined}
              onClick={() => {
                if (values.order === 'carbon') {
                  if (values.orderBy.carbon === 'Ascending') {
                    setFieldValue('orderBy.carbon', 'Descending');
                  } else {
                    setFieldValue('orderBy.carbon', 'Ascending');
                  }
                } else {
                  setFieldValue('order', 'carbon');
                }
              }}
            >
              Carbon
              {values.orderBy.carbon === 'Ascending' ? (
                <ArrowUpwardIcon style={{ height: '12px' }} fontSize="small" />
              ) : (
                <ArrowDownwardIcon
                  style={{ height: '12px' }}
                  fontSize="small"
                />
              )}
            </Button>
            <Button
              styles={{
                padding: '1px 6px',
                fontSize: '12px',
                fontWeight: 300,
                borderRadius: 0,
              }}
              kind={values.order === 'price' ? 'dark-blue-toggle' : undefined}
              onClick={() => {
                if (values.order === 'price') {
                  if (values.orderBy.price === 'Ascending') {
                    setFieldValue('orderBy.price', 'Descending');
                  } else {
                    setFieldValue('orderBy.price', 'Ascending');
                  }
                } else {
                  setFieldValue('order', 'price');
                }
              }}
            >
              Price
              {values.orderBy.price === 'Ascending' ? (
                <ArrowUpwardIcon style={{ height: '12px' }} fontSize="small" />
              ) : (
                <ArrowDownwardIcon
                  style={{ height: '12px' }}
                  fontSize="small"
                />
              )}
            </Button>
            <Button
              style={{
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                padding: '1px 6px',
                fontSize: '12px',
                fontWeight: 300,
              }}
              kind={values.order === 'time' ? 'dark-blue-toggle' : undefined}
              onClick={() => {
                if (values.order === 'time') {
                  if (values.orderBy.time === 'Ascending') {
                    setFieldValue('orderBy.time', 'Descending');
                  } else {
                    setFieldValue('orderBy.time', 'Ascending');
                  }
                } else {
                  setFieldValue('order', 'time');
                }
              }}
            >
              Time
              {values.orderBy.time === 'Ascending' ? (
                <ArrowUpwardIcon style={{ height: '12px' }} fontSize="small" />
              ) : (
                <ArrowDownwardIcon
                  style={{ height: '12px' }}
                  fontSize="small"
                />
              )}
            </Button>
          </Box>
        </Box>
      </FlexRowSpaceBetween>
      <Box display="flex" flexWrap="wrap">
        {currentfilters}
        {!!currentfilters.length && (
          <Button
            style={{
              textDecoration: 'underline',
              fontWeight: 'normal',
              background: 'transparent',
            }}
            onClick={() => resetForm()}
          >
            Clear
          </Button>
        )}
      </Box>
    </Container>
  );
};
