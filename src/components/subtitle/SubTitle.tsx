import React from 'react';
import styled from 'styled-components';
import { colors, grid } from '../../styles';

const SubTitleText = styled.div`
  font-size: ${grid.l};
  color: ${colors.grey1};
  margin-bottom: ${grid.l};
`;

const CurrentTopic = styled.span`
  font-weight: bold;
  padding-left: ${grid.xs};
`;

const StargazerCount = styled.span`
  padding-left: ${grid.xs};
`;

interface SubTitleInterface {
  currentTopic: string;
  currentStargazerCount: number;
}

const SubTitle: React.FC<SubTitleInterface> = ({ currentTopic, currentStargazerCount }) => (
  <SubTitleText data-testid="subtitle-js">
    Topics related to
    <CurrentTopic>{currentTopic}</CurrentTopic>

    {currentStargazerCount > 0 && ( // hide stargazer count if <= 0
      <StargazerCount>
        <span>(</span>
        {currentStargazerCount}
        <span>⭐)</span>
      </StargazerCount>
    )}
  </SubTitleText>
);

export default SubTitle;
