import './App.css';
import ProgressBar from './components/progress-bar';
import Card from './components/card';
import { questions } from './data';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [isFlipped, setFlipped] = useState(false);

  const handlePrevious = () => {
    if (number <= 0) return;
    setNumber((prevNumber) => prevNumber - 1);
    setFlipped(false);
  };

  const handleNext = () => {
    if (number >= questions.length - 1) return;
    setNumber((prevNumber) => prevNumber + 1);
    setFlipped(false);
  };

  const flipCard = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Flash cards</h1>

        <div className="wrapper">
          <ProgressBar number={number} count={questions.length} />
          <Card
            question={questions[number].question}
            answer={questions[number].answer}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            flipCard={flipCard}
            isFlipped={isFlipped}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
