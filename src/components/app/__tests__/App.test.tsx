import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from '../App';


it('renders without crashing', async() => {
  const promise = Promise.resolve();

  const client = new ApolloClient({
    cache: new InMemoryCache()
  });
  
  // checks that the App does in fact show up in the document
  const component = render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  )
  
  await act(() => promise)

  expect(component.getByTestId('app-js')).toBeInTheDocument();
  
  component.unmount();
})
