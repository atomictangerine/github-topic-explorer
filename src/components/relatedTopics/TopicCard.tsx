import React from 'react';
import styled from 'styled-components';
import { colors, grid } from '../../styles';
import { RelatedTopicInterface } from './RelatedTopics';
import {
  UpdateCurrentTopicFunctionType,
} from '../app/App';

const CardContainer = styled.div`
  border: 2px solid ${colors.grey1};
  min-height: ${grid.xl};
  border-radius: ${grid.s};
  margin-top: ${grid.m};
  width: 48%;
  color: ${colors.grey1};

  &:hover {
    cursor: pointer;
  }

  @media all and (max-width: 600px) {
    width: 100%;
  }
`;

const CardContent = styled.div`
  padding: ${grid.m};
`;
const TopicName = styled.span`
  font-weight: bold;
`;

const StargazerCount = styled.span`
  padding-left: ${grid.xs};
`;

interface TopicCardInterface {
  topic: RelatedTopicInterface;
  updateCurrentTopic: UpdateCurrentTopicFunctionType;
}

const TopicCard: React.FC<TopicCardInterface> = (props) => {
  const {
    topic,
    updateCurrentTopic,
  } = props;

  const onClick = () => {
    updateCurrentTopic(topic?.name);
  };

  return (
    <CardContainer onClick={() => onClick()}>
      <CardContent>
        <TopicName>{topic?.name}</TopicName>
        <StargazerCount>
          <span>(</span>
          {topic?.stargazerCount}
          <span>⭐)</span>
        </StargazerCount>
      </CardContent>
    </CardContainer>
  );
};

export default TopicCard;
