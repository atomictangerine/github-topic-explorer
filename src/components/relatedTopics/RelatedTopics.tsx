import React, { useEffect } from 'react';
import styled from 'styled-components';
import {colors, grid} from '../../styles';
import {getRelatedTopics} from '../../queries/relatedTopics';
import TopicCard from './TopicCard';

const NoResults = styled.div`
  color: ${colors.grey1};
`

const RelatedTopicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media all and (max-width: 600px) {
    flex-flow: column wrap;
  }
`

export interface RelatedTopicInterface {
  name: string
  stargazerCount: number
}

interface RelatedTopicsArrayInterface extends Array<RelatedTopicInterface>{};

interface RelatedTopicsInterface {
  currentTopic: string,
  updateTopic: Function
}

const RelatedTopics: React.FC<RelatedTopicsInterface> = ({currentTopic, updateTopic}) => {
  const {data, refetch}: any = getRelatedTopics(currentTopic);

  useEffect(() => {
    refetch();
  }, [currentTopic])

  const relatedTopics: RelatedTopicsArrayInterface = data?.topic?.relatedTopics;

  return (
    <RelatedTopicsContainer>
      {relatedTopics &&  !relatedTopics.length && <NoResults>No results found</NoResults>}
      {relatedTopics && relatedTopics.map((relatedTopic: RelatedTopicInterface) => <TopicCard key={relatedTopic?.name} topic={relatedTopic} updateTopic={updateTopic} />)}
    </RelatedTopicsContainer>
  )
}

export default RelatedTopics;