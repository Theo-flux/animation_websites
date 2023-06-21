import React from 'react';
import Layout from './layout';
import { Preloader } from './components';

function App() {
  return (
    <React.Fragment>
      <Preloader />
      <Layout />
    </React.Fragment>
  );
}

export default App;
