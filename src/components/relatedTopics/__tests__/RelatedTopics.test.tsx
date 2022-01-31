import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { QUERY_RELATED_TOPICS_RESULT_MOCK, QUERY_RELATED_TOPICS_NO_RESULT_MOCK } from '../../../mock/queryRelatedtopicsMock';
import RelatedTopics from '../RelatedTopics';

it('renders without crashing', async() => {
  const promise = Promise.resolve();
  const updateCurrentTopic = jest.fn(() => promise);
  const updateCurrentStargazerCount = jest.fn(() => promise);
  const component = render(
    <MockedProvider mocks={QUERY_RELATED_TOPICS_RESULT_MOCK} addTypename={false}>
      <RelatedTopics
        currentTopic="react"
        updateCurrentTopic={ updateCurrentTopic }
        updateCurrentStargazerCount={ updateCurrentStargazerCount }
      />
  </MockedProvider>
  )

  await act(() => promise)

  expect(component.getByTestId('related-topics-js')).toBeInTheDocument();

  component.unmount();
})

it('renders empty state when we do not get related topics ', async() => {
  const promise = Promise.resolve();
  const updateCurrentTopic = jest.fn(() => promise);
  const updateCurrentStargazerCount = jest.fn(() => promise);

  const noResults = 'No results found';

  const  {getByText, unmount} = render(
    <MockedProvider mocks={QUERY_RELATED_TOPICS_NO_RESULT_MOCK} addTypename={false}>
      <RelatedTopics
        currentTopic="non-existent-topic"
        updateCurrentTopic={ updateCurrentTopic }
        updateCurrentStargazerCount={ updateCurrentStargazerCount }
      />
  </MockedProvider>
  )

  await act(() => promise)

  expect(getByText(noResults)).toBeTruthy();
  unmount();
})

it('renders query results when there are related topics', async() => {
  const promise = Promise.resolve();
  const updateCurrentTopic = jest.fn(() => promise);
  const updateCurrentStargazerCount = jest.fn(() => promise);
  const noResults = 'No results found';
  const component = render(
    <MockedProvider mocks={QUERY_RELATED_TOPICS_RESULT_MOCK} addTypename={false}>
      <RelatedTopics
        currentTopic="react"
        updateCurrentTopic={ updateCurrentTopic }
        updateCurrentStargazerCount={ updateCurrentStargazerCount }
      />
  </MockedProvider>
  )

  await act(() => promise)
  
  // should not contain the no results placeholder text
  expect(component.queryByText(noResults)).toBeNull();
  // TODO: make this less hardcoded? To revisit

  // check that one of our mock results exists
  const obj = await component.findByText('angular');
  expect(obj.innerHTML).toEqual('angular');

  component.unmount();
})
