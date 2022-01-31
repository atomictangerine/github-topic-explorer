import { render } from '@testing-library/react';
import Subtitle from '../SubTitle';

it('renders without crashing', () => {
  const promise = Promise.resolve();
  
  const component= render(
      <Subtitle
        currentTopic="react"
        currentStargazerCount={65046}
      />
  )

  expect(component.getByTestId('subtitle-js')).toBeInTheDocument();

  component.unmount();
})
