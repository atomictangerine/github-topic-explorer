import React from 'react';
import styled from 'styled-components';
import {colors, grid} from '../styles';

const TitleContainer = styled.div`
  text-align: center;
  padding: ${grid.xl} 0 ${grid.xl} 0;

`
const Title = styled.h1`
  margin: 0;
  color: ${colors.grey1}
`;

const TitleComponent = () => (
  <TitleContainer>
    <Title>Github Topic Explorer</Title>
  </TitleContainer>
);

export default TitleComponent;