import { gql, useQuery } from '@apollo/client';

export const GET_RELATED_TOPICS_QUERY = gql`
  query getRelatedTopics($name: String!){
    topic(name: $name) {
      stargazerCount,
      relatedTopics(first: 10) {
        name
        stargazerCount
      }
    }
  }`;

// query returns max 10 results. This is a limitation set by github
const queryRelatedTopics = (currentTopic: string) => useQuery(
  GET_RELATED_TOPICS_QUERY,
  { variables: { name: currentTopic } },
);

export default queryRelatedTopics;
