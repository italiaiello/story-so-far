import React, { useState } from 'react';
import StartScreen from './components/StartScreen/StartScreen'
import Message from './components/Message/Message'

import './App.css';

function App() {

  const [route, setRoute] = useState('home')

  const onRouteChange = newRoute => {
    setRoute(newRoute)
  }

  return (
    <div className="App">
      {
        route === 'start' 
        ?
        <StartScreen onRouteChange={onRouteChange} />
        :
        <Message />
      }
    </div>
  );
}

export default App;
