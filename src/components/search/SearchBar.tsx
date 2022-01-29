import React, {useState} from 'react';
import styled from 'styled-components';
import {colors, grid} from '../../styles';
import searchIcon from './search_icon.png';

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
`
SearchIcon.defaultProps = {
  src: searchIcon,
  alt: 'search icon'
};

const SearchTextField = styled.input`
  width: 100%;
  border: none;
  background: ${colors.grey1};
  border-radius: ${grid.l};
  padding-left: ${grid.l};
`;


const SearchBar : React.FC<{updateTopic: Function}> = (props) => {
  const {updateTopic} = props;
  const [value, setValue] = useState('');

  const onKeyDown = (e: any) => {
    if(value && e.key === 'Enter' || e.keyCode === 13) {
      updateTopic(value);
    }
  }

  const onChange = (e: any) => {
    const val = e?.target?.value.trim();
    setValue(val)
    updateTopic(val);
  }

  const onClick = () => {
    updateTopic(value);
  }

  
  return (
    <SearchContainer>
      <SearchTextField type='text' value={value} onKeyDown={(e) => onKeyDown(e)} onChange={(e) => onChange(e)} />
      <SearchIcon onClick={() => {onClick()}} />
    </SearchContainer>
  )
}

export default SearchBar;