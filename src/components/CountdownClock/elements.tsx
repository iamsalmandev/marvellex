import styled, { css } from 'styled-components';
import { teelish, sizeMobile, sizeTabletLg } from '~/styles';

export const CountDownWrapper = styled.div<{ isCourseCountdown?: boolean }>`
  margin: auto;
  width: 100%;
`;

export const CourseSaleHeading = styled.h4<{ leftAlign?: boolean; customColor?: string }>`

  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  ${({ customColor }) =>
        customColor
            ? css`
          color: ${customColor};
        `
            : `color: ${teelish}`};

  ${({ leftAlign }) =>
        leftAlign &&
        css`
      text-align: left;
      ${sizeTabletLg(css`
        text-align: center;
      `)}
    `}
`;

export const CountDown = styled.div<{ leftAlign?: boolean }>`
  display: flex;
  justify-content: center;
  ${({ leftAlign }) =>
        leftAlign &&
        css`
      justify-content: left;
      ${sizeTabletLg(css`
        justify-content: center;
      `)}
    `}
`;

export const CountDownDays = styled.div<{ leftAlign?: boolean }>`
  margin-left: 12px;
  margin-right: 12px;
  text-align: center;
  ${({ leftAlign }) =>
        leftAlign &&
        css`
      margin-left: 0;
      margin-rigth: 24px;
    `}
`;

export const CountDownCount = styled.p`
 

  font-weight: 600;
  letter-spacing: 0.3px;
  color: ${teelish};
  margin-bottom: 0;
`;

export const CountDownUnit = styled.p<{ light?: boolean }>`
  letter-spacing: 0.3px;
  ${sizeMobile(css`
     margin: 0;
  `)};
  ${({ light }) =>
        light &&
        css`
      color: #fff;
    `}
`;
