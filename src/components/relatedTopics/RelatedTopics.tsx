import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors, grid } from '../../styles';
import TopicCard from './TopicCard';
import {
  UpdateCurrentTopicFunctionType,
} from '../app/App';

const NoResults = styled.div`
  color: ${colors.grey1};
`;

const RelatedTopicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media all and (max-width: 600px) {
    flex-flow: column wrap;
  }
`;

export interface RelatedTopicInterface {
  name: string;
  stargazerCount: number;
}

type RelatedTopicsArrayInterface = Array<RelatedTopicInterface>;

interface RelatedTopicsInterface {
  currentTopic: string;
  updateCurrentTopic: UpdateCurrentTopicFunctionType;
}

const RelatedTopics: React.FC<RelatedTopicsInterface> = ({
  currentTopic,
  updateCurrentTopic,
}) => {
  const { data, refetch } = queryRelatedTopics(currentTopic);

  useEffect(() => {
    refetch();
  }, [currentTopic]);

  const relatedTopics: RelatedTopicsArrayInterface = data?.topic?.relatedTopics;

  return (
    <RelatedTopicsContainer>
      {relatedTopics && !relatedTopics.length && (
        <NoResults>No results found</NoResults>
      )}
      {relatedTopics &&
        relatedTopics.map((relatedTopic: RelatedTopicInterface) => (
          <TopicCard
            key={relatedTopic?.name}
            topic={relatedTopic}
            updateCurrentTopic={updateCurrentTopic}
          />
        ))}
    </RelatedTopicsContainer>
  );
};

export default RelatedTopics;
