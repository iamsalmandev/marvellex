import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import styled, { css, CSSProp } from 'styled-components';
import {
  FlexRowCenter,
  FlexAbsoluteCenter,
  GetComponentProps,
} from '~/components';
import { ashWhite, marvelGreen, darkBlue, dullErrorRed, dullnavyBlue, dullSuccessGreen, dullTeelish, errorRed, navyBlue, successGreen, teelish, wildWaterMelon, yellow, dullYellow } from '~/styles';
import React from 'react';

interface StyledButtonProps {
  kind?: 'watermelon' | 'white-backgroud' | 'dark-blue' | 'teelish' | 'positive' | 'negative' | 'navy-blue' | 'yellow';
  customCss?: CSSProp;
}

const buttonStyles = css`
  ${({ kind }: StyledButtonProps & GetComponentProps<typeof MuiButton>) => {
    switch (kind) {
      case 'watermelon':
        return css`
          background: ${wildWaterMelon};
          color: #fff;
          &:hover {
            color: ${wildWaterMelon};
            border-color: ${wildWaterMelon};
            text-decoration: none;
          }
        `;
      case 'white-backgroud':
        return css`
          background: #fff;
          color: #000;
          &:hover {
            color: ${wildWaterMelon};
            text-decoration: none;
          }
        `;
      case 'dark-blue':
        return css`
          background: ${darkBlue};
          color: #fff;
          &:hover {
            background: #fff;
            color: ${darkBlue};
            text-decoration: none;
          }
        `;
      case 'teelish':
        return css`
            background: ${marvelGreen}};
            color: #fff;
            &:hover {
              background: ${dullTeelish};
              text-decoration: none;
            }
          `;

      case 'navy-blue':
        return css`
                background: ${navyBlue};
                color: #fff;
           &:hover {
               background: ${dullnavyBlue};
               text - decoration: none;
        }
        `;

      case 'yellow':
        return css`
                  background: ${yellow};
                  color: #fff;
             &:hover {
                 background: ${dullYellow};
                 text - decoration: none;
          }
          `;
      case 'positive':
        return css`
        background: ${successGreen};
        color: #fff;
                &:hover {
          background: ${dullSuccessGreen};
          text - decoration: none;
        }
        `;
      case 'negative':
        return css`
        background: ${errorRed};
        color: #fff;
                &:hover {
          background: ${dullErrorRed};
          text - decoration: none;
        }
        `;
      default:
        return css``;
    }
  }}
`;


const StyledButton = styled(({ customCss, ...props }) => (
  <MuiButton

    {...props}
  />
))`
background: #fff;
padding: 5px 10px;
text - transform: capitalize;
maxwidth: 280px;
  ${buttonStyles}
  ${({ disabled }) =>
    disabled &&
    css`
      background: ${ashWhite};
      color: #fff !important;
    `}
    ${({ customCss }) => customCss && customCss}
` as React.FC<StyledButtonProps & GetComponentProps<typeof MuiButton>>;

interface Props extends StyledButtonProps {
  showSpinner?: boolean;
  spinnerProps?: CircularProgressProps;
  styles?: React.CSSProperties;
}

export const Button: React.FC<Props & ButtonProps> = ({
  children,
  showSpinner = false,
  styles,
  spinnerProps = {},
  disabled,
  ...props
}) => {
  return (
    <FlexRowCenter position="relative">
      {showSpinner && (
        <FlexAbsoluteCenter color={teelish}>
          <CircularProgress color="inherit" {...spinnerProps} size="30px" />
        </FlexAbsoluteCenter>
      )}
      <StyledButton
        disabled={showSpinner || disabled}
        style={{
          ...styles,
        }}
        {...props}
      >
        {children}
      </StyledButton>
    </FlexRowCenter>
  );
};
