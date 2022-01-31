import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';
import queryRelatedTopics from '../../queries/relatedTopics';
import TopicCard from './TopicCard';
import {
  UpdateCurrentTopicFunctionType,
  updateCurrentStargazerCountInterface,
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
  updateCurrentStargazerCount: updateCurrentStargazerCountInterface;
}

const RelatedTopics: React.FC<RelatedTopicsInterface> = ({
  currentTopic,
  updateCurrentTopic,
  updateCurrentStargazerCount,
}) => {
  const { data, refetch } = queryRelatedTopics(currentTopic);

  useEffect(() => {
    updateCurrentStargazerCount(data?.topic?.stargazerCount);
  }, [data]);

  useEffect(() => {
    refetch();
    updateCurrentStargazerCount(data?.stargazerCount);
  }, [currentTopic]);

  const relatedTopics: RelatedTopicsArrayInterface = data?.topic?.relatedTopics;

  return (
    <RelatedTopicsContainer data-testid="related-topics-js">
      {relatedTopics && !relatedTopics.length && (
        <NoResults>No results found</NoResults>
      )}
      {relatedTopics &&
        relatedTopics.map((relatedTopic: RelatedTopicInterface) => (
          <TopicCard
            key={relatedTopic?.name}
            topic={relatedTopic}
            updateCurrentTopic={updateCurrentTopic}
            updateCurrentStargazerCount={updateCurrentStargazerCount}
            data-testid="topic-card-js"
          />
        ))}
    </RelatedTopicsContainer>
  );
};

export default RelatedTopics;
