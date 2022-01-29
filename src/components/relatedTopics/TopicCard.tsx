import React from 'react';
import styled from 'styled-components';
import {colors, grid} from '../../styles';
import {RelatedTopicInterface} from './RelatedTopics';

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
`
const TopicName = styled.span`
  font-weight: bold;
`;

const StargazerCount = styled.span``;

interface TopicCard {
  key: string,
  topic: RelatedTopicInterface,
  updateTopic: Function
}


const TopicCard : React.FC<TopicCard> = (props) => {
  const {topic, updateTopic} = props;

  const onClick = () => {
    updateTopic(topic?.name);
  }
  
  return (
    <CardContainer onClick={() => onClick()}>
      <CardContent>
        <TopicName>{topic?.name}</TopicName> (<StargazerCount>{topic?.stargazerCount}</StargazerCount>⭐)
      </CardContent>
    </CardContainer>
  )
}

export default TopicCard;