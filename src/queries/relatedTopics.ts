import {
  gql,
  useQuery
} from "@apollo/client";

type RelatedTopicsPropsInterface = {
  topic: string,
};

export const getRelatedTopics = (currentTopic: string) => {
  return(
    useQuery(gql`query {
      topic(name:"${currentTopic}") {
        relatedTopics(first: 10) {
          name
          stargazerCount
        }
      }
    }`)
  )
}