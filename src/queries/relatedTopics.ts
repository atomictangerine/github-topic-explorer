import { gql, useQuery } from '@apollo/client';

type RelatedTopicsPropsInterface = {
  topic: string;
};

export const getRelatedTopics = (currentTopic: string) =>
  useQuery(gql`query {
      topic(name:"${currentTopic}") {
        relatedTopics(first: 10) {
          name
          stargazerCount
        }
      }
    }`);
