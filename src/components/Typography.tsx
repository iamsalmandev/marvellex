import React from 'react';
import styled, { css, CSSProp } from 'styled-components';
import { background, black50, sizeTablet, smokeGrey } from '~/styles';

export const TypographyH1 = styled.h1`
    text-align: center;
    font-weight: 600;
    word-break: break-word;
    font-size: 65px;
    font-family: 'Montserrat';
    margin: 1.5rem 0;
    ${sizeTablet(css`
        font-size: 30px;
        margin: 0.5rem 0
  `)}

`