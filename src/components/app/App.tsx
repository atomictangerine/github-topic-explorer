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

const App = () => {
  const [currentTopic, setCurrentTopic] = useState('react');

  const updateTopic = (newTopic: string) => {
    setCurrentTopic(newTopic);
  };

  return (
    <AppContainer>
      <Title />
      <SearchBar updateTopic={updateTopic} />
      <SubTitle currentTopic={currentTopic} />
      <RelatedTopics currentTopic={currentTopic} updateTopic={updateTopic} />
    </AppContainer>
  );
};

export default App;
