import Box from '@material-ui/core/Box';
import { MultiSelect } from 'react-multi-select-component';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FormikHelpers, FormikHandlers, FormikState } from 'formik';
import { useEffect, useState } from 'react';
import {
  FlexRowSpaceBetween,
  FlexColCenter,
  TextField,
  CheckField,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  MuiSelect,
} from '~/components';
import { lightAshWhite } from '~/styles';
import { axios } from '~/services';
import { Chip } from '../elements';
import { DropdownWrapper } from './elements';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  scrollBar: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export interface FilterFormValues {
  minCarbonOffset: string;
  maxCarbonOffset: string;
  carbonOffsetUnit: { name: string; value: string };
  location: { label: string; value: string }[];
  nanoTasks: { name: string; id: string; title: string }[];
  order: 'carbon' | 'price' | 'time';
  orderBy: { carbon: 'Descending' | 'Ascending', price: 'Descending' | 'Ascending', time: 'Descending' | 'Ascending' };
}

export interface FilterFormProps
  extends FormikState<FilterFormValues>,
  FormikHelpers<FilterFormValues>,
  FormikHandlers { }

const carbonUnits = [
  { name: 'gram (g)', value: 'g' },
  { name: 'killogram (kg)', value: 'kg' },
];
export const Form: React.FC<FilterFormProps> = ({
  errors,
  values,
  handleSubmit,
  handleChange,
  setFieldValue,
}) => {
  const {
    location,
    nanoTasks,
    minCarbonOffset,
    maxCarbonOffset,
    carbonOffsetUnit,
  } = values;

  const [expandedRangeFilter, setExpandedRangeFilter] = useState(false);
  const [expandedLocationFilter, setExpandedLocationFilter] = useState(false);
  const [expandedTasksFilter, setExpandedTasksFilter] = useState(false);
  const [nanoTasksData, setNanoTasksData] = useState([]);
  const [locations, setLocations] = useState([]);
  const [, setLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    Promise.all([axios.get(`/task`), axios.get(`/location`)])
      .then((response) => {
        setLoading(false);

        if (response?.[0]?.data) {
          setNanoTasksData(
            response[0].data.map(({ id, displayText, title }) => {
              return { title, id, name: displayText };
            })
          );
        }
        if (response?.[1]?.data) {
          setLocations(
            response[1].data.map((loc) => {
              return { label: loc, value: loc };
            })
          );
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(' fetch locations and task  error', error);
      });
  }, []);

  const customValueRenderer = (selected: FilterFormValues['location']) => {
    return (
      <Box display="flex" flexWrap="wrap">
        {selected.length
          ? selected.map(({ label }) => <Chip margin="2px 2px">{label}</Chip>)
          : 'No Items Selected'}
      </Box>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        px="10px"
        pb={2}
        height="75vh"
        overflow="auto"
        className={classes.scrollBar}
      >
        <ExpansionPanel
          expanded={expandedRangeFilter}
          onChange={(_, isExpanded) => setExpandedRangeFilter(isExpanded)}
        >
          <ExpansionPanelSummary
            style={{ marginTop: `solid 1px ${lightAshWhite}` }}
          >
            <Typography component="h6" variant="subtitle1">
              Carbon offset range
            </Typography>
            <Box>{expandedRangeFilter ? <ExpandLess /> : <ExpandMore />}</Box>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box>
              <MuiSelect
                selectedValues={[carbonOffsetUnit]}
                onChange={(e) => {
                  const {
                    target: { value: val },
                  } = e;
                  const selectedValues = carbonUnits.find(
                    ({ value }) => value === val
                  );
                  setFieldValue('carbonOffsetUnit', selectedValues);
                }}
                values={carbonUnits}
              />
            </Box>
            <FlexRowSpaceBetween my="5px">
              <Box p="0 8px">
                <TextField
                  type="number"
                  value={minCarbonOffset}
                  name="minCarbonOffset"
                  placeholder="min"
                  onChange={handleChange}
                />
              </Box>
              <Typography component="span">to</Typography>
              <Box p="0 8px">
                <TextField
                  type="number"
                  value={maxCarbonOffset}
                  name="maxCarbonOffset"
                  placeholder="max"
                  onChange={handleChange}
                />
              </Box>
            </FlexRowSpaceBetween>
            {(!!errors.minCarbonOffset || !!errors.maxCarbonOffset) && (
              <FlexColCenter height={'50px'}>
                <Box> {errors.minCarbonOffset}</Box>
                <Box>{errors.maxCarbonOffset}</Box>
              </FlexColCenter>
            )}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expandedLocationFilter}
          onChange={(_, isExpanded) => setExpandedLocationFilter(isExpanded)}
        >
          <ExpansionPanelSummary>
            <Typography component="h6" variant="subtitle1">
              Location
            </Typography>
            <Box>
              {expandedLocationFilter ? <ExpandLess /> : <ExpandMore />}
            </Box>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <DropdownWrapper p="0 8px" my="8px">
              <MultiSelect
                className="location-dropdown"
                options={locations}
                value={location}
                valueRenderer={customValueRenderer}
                onChange={(e) => {
                  console.log('e', e);
                  setFieldValue('location', e);
                }}
                labelledBy="Select"
              />
            </DropdownWrapper>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expandedTasksFilter}
          onChange={(_, isExpanded) => setExpandedTasksFilter(isExpanded)}
        >
          <ExpansionPanelSummary>
            <Typography component="h6" variant="subtitle1">
              Nano Tasks
            </Typography>
            <Box>{expandedTasksFilter ? <ExpandLess /> : <ExpandMore />}</Box>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box
              display="flex"
              flexDirection="column"
              p="0 8px"
            >
              {nanoTasksData.map((activity, idx) => {
                const isChecked = !!nanoTasks.find(
                  ({ id }) => id == activity.id
                );
                return (
                  <CheckField
                    checked={isChecked}
                    onChange={(e) => {
                      const {
                        target: { value: val },
                      } = e;
                      const newFieldValue = !!nanoTasks.find(
                        ({ id }) => id == val
                      )
                        ? nanoTasks.filter(({ id }) => id != val)
                        : [
                          ...nanoTasks,
                          nanoTasksData.find(({ id }) => id == val),
                        ];
                      setFieldValue('nanoTasks', newFieldValue);
                    }}
                    key={idx}
                    value={activity.id}
                    displayName={activity.name}
                  />
                );
              })}
            </Box>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Box>
    </form>
  );
};
