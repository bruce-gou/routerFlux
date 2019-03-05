import React from 'react';
import dva from './utils/dva';
import Router from './routes';

import study from './models/study';

const app = dva({
  models: [study],
  onError(e) {
    console.log('onError', e);
  },
});

const App = app.start(<Router />);
const store =  app._store;
export default App;
export { store };
