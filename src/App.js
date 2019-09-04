import React from 'react';
import './App.css';

import Card from './components/Card';

function App() {
  const blockFirst = {
    img:
      'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
    title: "Card title", 
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  };

  const blockSecond = {
    title: "Card title", 
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  };

  return (
    <div className="App">
      <Card data={blockFirst}>{blockFirst.text}</Card>;
      <Card data={blockSecond}>{blockSecond.text}</Card>;
    </div>
  );
}

export default App;
