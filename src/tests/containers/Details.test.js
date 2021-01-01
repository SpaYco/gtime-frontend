import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, unmountComponentAtNode } from 'react-dom';
import rootReducer from '../../reducers/index';
import Details from '../../containers/Details';
import 'jest-canvas-mock';

const store = createStore(rootReducer);

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const fakeData = [{
  id: 1, name: 'Fortnite', memory: 5, intelligence: 5, social: -2, link: 'https://i.imgur.com/Jf1m3eb.jpg', created_at: '2020-11-15T16:26:30.455Z', updated_at: '2020-11-15T16:26:30.455Z',
}, {
  id: 2, name: 'Minecraft', memory: 10, intelligence: 10, social: 5, link: 'https://i.imgur.com/R0rlsJ0.png', created_at: '2020-11-16T06:53:16.622Z', updated_at: '2020-11-16T06:53:16.622Z',
}];

describe('Details', () => {
  it('renders a link', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(fakeData),
    }));
    await act(async () => {
      render(<Provider store={store}><Details /></Provider>, container);
    });

    expect(container.querySelector('a').href).toBe('http://localhost/show/1');

    global.fetch.mockRestore();
  });
  it('renders a title', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(fakeData),
    }));
    await act(async () => {
      render(<Provider store={store}><Details /></Provider>, container);
    });

    expect(container.querySelector('a').textContent).toBe('Fortnite');

    global.fetch.mockRestore();
  });
});
