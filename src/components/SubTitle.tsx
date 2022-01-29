import React from 'react';
import styled from 'styled-components';
import {colors, grid} from '../styles';

const SubTitleText = styled.div`
  font-size: ${grid.l};
  color: ${colors.grey1};
  margin-bottom: ${grid.l};
`;

const CurrentTopic = styled.span`
  font-weight: bold;
`

interface SubTitleInterface {
  currentTopic: string
}

const SubTitle: React.FC<SubTitleInterface> = (props) => {
  const {currentTopic} = props;

  return (
      <SubTitleText>Topics related to <CurrentTopic>{currentTopic}</CurrentTopic></SubTitleText>
  )
}

export default SubTitle;