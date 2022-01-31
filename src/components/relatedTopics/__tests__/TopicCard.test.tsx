import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TopicCard from '../TopicCard';

const topic = {
  name: 'react',
  stargazerCount: 65046
}

it('renders without crashing', () => {
  const promise = Promise.resolve();
  const updateCurrentTopic = jest.fn(() => promise);
  const updateCurrentStargazerCount = jest.fn(() => promise);
  
  const component= render(
      <TopicCard
        topic={topic}
        updateCurrentTopic={ updateCurrentTopic }
        updateCurrentStargazerCount={ updateCurrentStargazerCount }
      />
  )

  expect(component.getByTestId('card-js')).toBeInTheDocument();


  component.unmount();
})

it('updates current topic and stargazer count when clicked', async() => {
  const promise = Promise.resolve();
  const updateCurrentTopic = jest.fn(() => promise);
  const updateCurrentStargazerCount = jest.fn(() => promise);
  
  const  component = render(
    <TopicCard
    topic={topic}
    updateCurrentTopic={ updateCurrentTopic }
    updateCurrentStargazerCount={ updateCurrentStargazerCount }
    />
    )
  
  const card = await component.findByTestId('card-js');
  fireEvent.click(card);

  expect(updateCurrentTopic).toHaveBeenCalledWith(topic.name);
  expect(updateCurrentStargazerCount).toHaveBeenCalledWith(topic.stargazerCount);

  component.unmount();
})
