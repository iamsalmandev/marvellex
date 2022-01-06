import Box from '@material-ui/core/Box';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { SearchHeader } from './SearchHeader';
import { SearchResults } from './SearchResults';
import { useAllMarketplaceCertificates } from '~/hooks';
import { NoQueryView } from './NoQueryView';
import { Filters, FilterFormValues } from './Filters';
import { SearchContainer } from './elements';

export const Search = () => {
  const [showFilters, setShowFilters] = useState(true);
  const errorMessageMin = 'should be greater than 0';
  const errorMessageMax = 'should be less than 5000';

  const validationSchema = yup.object({
    maxCarbonOffset: yup
      .number()
      .min(0, errorMessageMin)
      .max(50000000, errorMessageMax),
    minCarbonOffset: yup
      .number()
      .min(0, errorMessageMin)
      .max(50000000, errorMessageMax),
  });

  const useFormikHelpersAndState = useFormik<FilterFormValues>({
    validationSchema,
    initialValues: {
      location: [],
      nanoTasks: [],
      carbonOffsetUnit: { name: 'gram(g)', value: 'g' },
      minCarbonOffset: '',
      maxCarbonOffset: '',
      order: 'carbon',
      orderBy: { carbon: 'Ascending', price: 'Ascending', time: 'Ascending' },
    },
    onSubmit: () => undefined,
  });
  const { values } = useFormikHelpersAndState;
  const { loading, data, loadMore } = useAllMarketplaceCertificates(values);

  const togleFilters = () => setShowFilters(!showFilters);

  return (
    <Box>
      <Filters
        open={showFilters}
        togleFilters={togleFilters}
        onClose={() => setShowFilters(false)}
        filterFormProps={useFormikHelpersAndState}
      />
      <SearchContainer open={showFilters}>
        <SearchHeader filterFormProps={useFormikHelpersAndState} />
        {!data.length && <NoQueryView />}
        <SearchResults
          togleFilters={togleFilters}
          onScrollEnd={() => !loading && loadMore()}
          loading={loading}
          data={data}
        />
      </SearchContainer>
    </Box>
  );
};
