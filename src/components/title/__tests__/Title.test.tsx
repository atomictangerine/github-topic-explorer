import { render } from '@testing-library/react';
import Title from '../Title';

it('renders without crashing', () => {
  const promise = Promise.resolve();
  
  const component= render(
      <Title/>
  )

  expect(component.getByTestId('title-js')).toBeInTheDocument();

  component.unmount();
})
