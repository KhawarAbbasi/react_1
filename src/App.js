import Header from './components/Header';
import React from 'react';
function App() {
  const dummyData = [
    {
        id: 1,
        text:"Khawar"
    },
    {
        id: 2,
        text:"Abbasi"
    },
]
  return (
    
    <div>
      <h1>FYP</h1>
      {dummyData.map((item) => (
        <h3 key={ item.id}>{ item.text}</h3>
      ))}
    </div>
  );
}

export default App;
