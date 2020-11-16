import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';
import App from '../../containers/App';

const store = createStore(rootReducer);

describe('App', () => {
  it('renders text', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const logo = getByText(/Hello Stranger/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders an text input', () => {
    const { queryAllByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const text = queryAllByTestId('username');
    expect(text).toBeTruthy();
  });
});
