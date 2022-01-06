import styled, { css, } from 'styled-components';
import { sizeTablet } from '~/styles';

export const TypographyH1 = styled.h1`
    text-align: center;
    font-weight: 600;
    word-break: break-word;
    font-size: 50px;
    font-family: 'Montserrat';
    margin: 1.5rem 0;
    ${sizeTablet(css`
        font-size: 30px;
        margin: 0.5rem 0
  `)}

`