import { GET_RELATED_TOPICS_QUERY } from '../queries/relatedTopics';

export const QUERY_RELATED_TOPICS_RESULT_MOCK = [
  {
    request: {
      query: GET_RELATED_TOPICS_QUERY,
      variables: {
        name: 'react',
      },
    },
    result: {
      data: {
        topic: {
          stargazerCount: 65043,
          relatedTopics: [
            {
              name: 'angular',
              stargazerCount: 38913,
              __typename: 'Topic',
            },
            {
              name: 'react-native',
              stargazerCount: 22069,
              __typename: 'Topic',
            },
            {
              name: 'vue',
              stargazerCount: 44833,
              __typename: 'Topic',
            },
            {
              name: 'typescript',
              stargazerCount: 24176,
              __typename: 'Topic',
            },
            {
              name: 'nextjs',
              stargazerCount: 509,
              __typename: 'Topic',
            },
            {
              name: 'reactjs',
              stargazerCount: 958,
              __typename: 'Topic',
            },
            {
              name: 'tailwindcss',
              stargazerCount: 139,
              __typename: 'Topic',
            },
          ],
          __typename: 'Topic',
        },
      },
    },
  },
];

export const QUERY_RELATED_TOPICS_NO_RESULT_MOCK = [
  {
    request: {
      query: GET_RELATED_TOPICS_QUERY,
      variables: {
        name: 'non-existent-topic',
      },
    },
    result: {
      data: {
        topic: {
          stargazerCount: 0,
          relatedTopics: [],
          __typename: 'Topic',
        },
      },
    },
  },
];
