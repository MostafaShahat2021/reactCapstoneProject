import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AllJobs from '../components/AllJobs';

const mockStore = configureStore([]);

describe('AllJobs component', () => {
  it('render correctly', () => {
    const store = mockStore({
      jobs: {
        jobs: [],
      },
    });

    const tree = renderer.create(
      <Provider store={store}>
        <AllJobs />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
