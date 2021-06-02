import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from 'client/App';
import Loading from 'components/Loading';

const root = () => (
  <Suspense fallback={<Loading />}>
    <AppContainer>
      <App />
    </AppContainer>
  </Suspense>
);

render(root(),document.getElementById('react-view'));