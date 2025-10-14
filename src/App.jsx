import React, { useState } from 'react';
import Background from './components/Home/Background';
import Home from './components/Home/Home';

const App = () => {

  return (
    <Background>
      <Home />
    </Background>
  );
};

export default App;