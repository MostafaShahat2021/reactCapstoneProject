import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import JobsDetails from '../components/JobDetails';
import store from '../redux/store';

it('Jobdetailes should render', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <JobsDetails />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
