import MuiCheckbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import MuiFormControlLabel from '@material-ui/core/FormControlLabel';
// import { Field, FieldProps } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { ashWhite, darkBlue } from '~/styles';

interface Props {
  value?: string;
  displayName: string;
  className?: string;
}

const Checkbox = styled(MuiCheckbox)`
  .MuiCheckbox-colorSecondary.Mui-checked {
    color: ${darkBlue};
  }
`;
const FormControlLabel = styled(MuiFormControlLabel)`
  .MuiTypography-body1 {
    font-size: 14px;
    padding-left: 8px;
    color: rgba(0, 0, 0, 0.87);
  }
  .Mui-checked {
    color: ${darkBlue};
  }
  .MuiIconButton-colorSecondary:hover {
    background-color: ${ashWhite};
  }
  .MuiCheckbox-root {
    padding: 4px;
  }
`;

export const CheckField: React.SFC<Props & CheckboxProps> = ({
  displayName,
  ...props
}) => (
  <div>
    {/* <Field name={fieldName}>
      {({ form, field }: FieldProps) => ( */}
    <FormControlLabel control={<Checkbox {...props} />} label={displayName} />
    {/* )}
    </Field> */}
  </div>
);
