import React from 'react';
import './App.css';
import Questions from './Questions';
 

function App () {

  const questions = [
    {
      question: "do you accept all major credit cards?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga quo cumque maiores quos illum deserunt error vel delectus commodi."
    },
    {
      question: "do you support local farmers?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga quo cumque maiores quos illum deserunt error vel delectus commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga quo cumque maiores quos illum deserunt error vel delectus. Lorem ipsum dolor sit amet." 
    },
    {
      question: "do you use organic ingridients?",
      text: "Amet fuga quo cumque maiores quos illum deserunt error vel delectus commodi."
    }
  ];
  

  return (
    <div className="App">
      <Questions questions={questions} />
      
    </div>
  );
}

export default App;
