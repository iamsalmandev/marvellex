import styled, { css } from 'styled-components';
import MuiBox from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import MuiTextField from '@material-ui/core/TextField';
import MuiLink from "@material-ui/core/Link";
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import { sizeMobile, lightAshWhite, sizeTablet, black50, smokeGrey, white50 } from '~/styles';

export type GetComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never;

export const FlexRowCenter = styled(MuiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
` as React.FC<GetComponentProps<typeof MuiBox>>;

export const FlexRowSpaceBetween = styled(MuiBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
` as React.FC<GetComponentProps<typeof MuiBox>>;

export const FlexColCenter = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
` as React.FC<GetComponentProps<typeof MuiBox>>;

export const FlexAbsoluteCenter = styled(MuiBox)`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
` as React.FC<GetComponentProps<typeof MuiBox>>;

export const TextField = styled(MuiTextField)`
  .MuiInputBase-input {
    border-radius: 4px;
    padding: 12px 10px;
  }
  .MuiFilledInput-input {
   
    text-align: center;
  }
  .Mui-focused {
    color: rgba(0, 0, 0, 0.54);
  }
  .MuiInputBase-input:focus {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
  }
  .MuiFilledInput-underline:after {
    opacity: 0.5;
    border-bottom: 0px solid rgba(0, 0, 0, 0.87);
  }
  .MuiFilledInput-underline:before {
    border-bottom: none;
  }
` as React.FC<GetComponentProps<typeof MuiTextField>>;

export const StyledMenuItem = styled(MenuItem)`
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 0;
  color: black;
  font-size: 14px;
  width: 100%;
  text-transform: capitalize;
  justify-content: flex-start;
`;

export const ExpansionPanel = styled(MuiExpansionPanel)`
  font-weight: ${({ expanded }) => (expanded ? 'bold' : 'normal')};
  box-shadow: none;
  background-color: transparent;
  text-align: center;
  &:before {
    background-color: transparent;
  }
  &.Mui-expanded {
    margin: 0;
  }
  ${sizeMobile(css`
    min-width: 50%;
  `)}
` as React.SFC<GetComponentProps<typeof MuiExpansionPanel>>;

export const ExpansionPanelDetails = styled(MuiExpansionPanelDetails)`
  padding: 8px 0;
  font-weight: normal;
  display: block;
  text-align: left;
` as React.SFC<GetComponentProps<typeof MuiExpansionPanelDetails>>;

export const ExpansionPanelSummary = styled(MuiExpansionPanelSummary)`
  padding: 0;
  text-align: left;
  .MuiExpansionPanelSummary-content {
    margin: 0;
    border-bottom: solid 1px ${lightAshWhite};
    padding: 5px 0px;
    display: flex;
    justify-content: space-between;
  }
  &.Mui-expanded {
    min-height: 0;
  }
` as React.SFC<GetComponentProps<typeof MuiExpansionPanelSummary>>;

export const StyledMuiLink = styled((props) => <MuiLink {...props} />)`
  display: flex;
  font-weight: regular;
  font-size: 16px;
  letter-spacing: 2px;
  margin: 0 16px;
  cursor: pointer;
  text-decoration: none;
  color: ${black50};
  ${sizeTablet(css`
    font-size: 16px;
    margin: 0 8px;
  `)}
  &:hover {
    color: ${black50};
  }
` as React.FC<GetComponentProps<typeof MuiLink>>;

export const SpacedHeading = styled.h6`
  letter-spacing: 3px;
  color: ${smokeGrey};
  font-size: 14px;
`
export const TextStandoutGradientOverlay = styled.div`
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to bottom, ${white50}, ${black50}),
    linear-gradient(to bottom, black, black);
  background-image: -webkit-linear-gradient(to bottom, ${white50}, ${black50}),
    -webkit-linear-gradient(to bottom, black, black);
  background-image: -moz-linear-gradient(to bottom, ${white50}, ${black50}),
    -moz-linear-gradient(to bottom, black, black);
  opacity: 0.3;
`;