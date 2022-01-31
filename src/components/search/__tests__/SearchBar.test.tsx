import { fireEvent, render } from '@testing-library/react';
import SearchBar from '../SearchBar';

it('renders without crashing', () => {
  const promise = Promise.resolve();
  const updateCurrentTopic = jest.fn(() => promise);
  
  const component= render(
      <SearchBar
        updateCurrentTopic={ updateCurrentTopic }
      />
  )

  expect(component.getByTestId('search-text-input-js')).toBeInTheDocument();
  expect(component.getByTestId('search-icon-js')).toBeInTheDocument();

  component.unmount();
})

it('updates current topic on keyDown', async() => {
  const promise = Promise.resolve();
  const updateCurrentTopic = jest.fn(() => promise);
  
  const component= render(
      <SearchBar
        updateCurrentTopic={ updateCurrentTopic }
      />
  )

  const textField = await component.findByTestId('search-text-input-js');
  const searchIcon = await component.findByTestId('search-icon-js');
  // ensure that the value is trimmed before being set onChange
  const changeVal = 'rea  ';
  fireEvent.change(textField, {target: {value: changeVal}});
  expect(updateCurrentTopic).toHaveBeenCalledWith(changeVal.trim());
  
  // focus away from the text field to then test and see if the onKeyDown
  // since it's one of the ways to check without onchange being triggered
  fireEvent.click(document);
  fireEvent.keyDown(textField, {
    key: "Enter",
    code: "Enter",
    keyCode: 13,
    charCode: 13
  });
  // should be the second time this function is called
  expect(updateCurrentTopic).toHaveBeenCalledTimes(2);
  // check that onClick also updates the current topic
  fireEvent.click(searchIcon);
  expect(updateCurrentTopic).toHaveBeenCalledTimes(3);

  component.unmount();
})
