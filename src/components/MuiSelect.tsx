import * as React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { SelectProps } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';
import { ashWhite } from '~/styles';

const Wrapper = styled.div`
  .MuiInputBase-input {
    border-radius: 4px;
    box-shadow: 0 0 2px ${ashWhite};
  }
  .MuiInputBase-input {
    padding: 12px 10px;
  }
  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface Value {
  name: string;
  value: string;
}
interface Props {
  placeholder?: string;
  selectedValues: Value[];
  values: Value[];
}

export const MuiSelect: React.FC<Props & SelectProps> = ({
  placeholder,
  selectedValues,
  values,
  ...props
}) => {
  return (
    <Wrapper>
      <FormControl style={{ width: '100%' }}>
        <Select
          value={selectedValues.map(({ value }) => value)}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
          {...props}
        >
          {!!placeholder && (
            <MenuItem disabled value="">
              <em>{placeholder}</em>
            </MenuItem>
          )}
          {values.map(({ name, value }) => (
            <MenuItem key={value} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
};
