import { gql, useQuery } from '@apollo/client';

// TODO: turn this file into actual .graphql file + queries
// Note, query returns max 10 results. This is a limitation set by github
const queryRelatedTopics = (currentTopic: string) => useQuery(
  gql`query {
      topic(name:"${currentTopic}") {
        stargazerCount,
        relatedTopics(first: 10) {
          name
          stargazerCount
        }
      }
    }`,
);

export default queryRelatedTopics;
