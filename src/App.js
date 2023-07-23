import React, { useEffect } from 'react';
import Whiteboard from './components/Whiteboard/Whiteboard';
import { connectWithSocketServer } from './socketConnection/socketConnection';

function App() {

  useEffect(()=>{
    connectWithSocketServer();
  },[])

  return (
    <div>
      <Whiteboard />
    </div>
  );
}

export default App;
