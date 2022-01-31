import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import { colors, grid } from '../../styles';
import searchIcon from './search_icon.png';
import { UpdateCurrentTopicFunctionType } from '../app/App';

const SearchContainer = styled.div`
  background-color: ${colors.grey1};
  height: ${grid.xl};
  border-radius: ${grid.l};
  margin-bottom: ${grid.xl};
  display: flex;
  flex: none;
`;

const SearchIcon = styled.img`
  justify-content: flex-end;
  margin: auto ${grid.l};
  height: ${grid.l};
  background-image: ${searchIcon};

  &:hover {
    cursor: pointer;
  }
`;
SearchIcon.defaultProps = {
  src: searchIcon,
  alt: 'search icon',
};

const SearchTextField = styled.input`
  width: 100%;
  border: none;
  background: ${colors.grey1};
  border-radius: ${grid.l};
  padding-left: ${grid.l};
`;

const SearchBar: React.FC<{ updateCurrentTopic: UpdateCurrentTopicFunctionType }> = ({
  updateCurrentTopic,
}) => {
  const [value, setValue] = useState('');

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if ((value && e.key === 'Enter') || e.keyCode === 13) {
      updateCurrentTopic(value);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e?.target?.value.trim();
    setValue(val);
    updateCurrentTopic(val);
  };

  const onClick = () => {
    updateCurrentTopic(value);
  };

  return (
    <SearchContainer>
      <SearchTextField
        type="text"
        placeholder="Search topics"
        value={value}
        onKeyDown={(e: KeyboardEvent<HTMLElement>): void => onKeyDown(e)}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e)}
      />
      <SearchIcon
        onClick={() => {
          onClick();
        }}
      />
    </SearchContainer>
  );
};

export default SearchBar;
