import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../Title';
import RelatedTopics from '../relatedTopics/RelatedTopics';
import { colors, grid } from '../../styles';
import SearchBar from '../search/SearchBar';
import SubTitle from '../SubTitle';

const AppContainer = styled.div`
  max-width: 960px;
  padding: ${grid.l};
  padding-top: 0;
  margin: 0 auto 0 auto;
  height: 100%;
  min-height: 100vh;
  background-color: ${colors.grey6};
`;

export type UpdateCurrentTopicFunctionType = (newTopic: string) => void;
export type updateCurrentStargazerCountInterface = (newStargazerCount: number) => void;

const App = () => {
  const [currentTopic, setCurrentTopic] = useState('react');
  const [currentStargazerCount, setStargazerCount] = useState(0);

  const updateCurrentTopic = (newTopic: string) => {
    setCurrentTopic(newTopic);
  };

  const updateCurrentStargazerCount = (newStargazerCount: number) => {
    setStargazerCount(newStargazerCount);
  };

  return (
    <AppContainer>
      <Title />
      <SearchBar updateCurrentTopic={updateCurrentTopic} />
      <SubTitle currentTopic={currentTopic} currentStargazerCount={currentStargazerCount} />
      <RelatedTopics
        currentTopic={currentTopic}
        updateCurrentStargazerCount={updateCurrentStargazerCount}
        updateCurrentTopic={updateCurrentTopic}
      />
    </AppContainer>
  );
};

export default App;
