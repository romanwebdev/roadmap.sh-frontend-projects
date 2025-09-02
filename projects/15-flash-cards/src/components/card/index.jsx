import './card.css';
import Actions from '../actions';

export default function Card({
  question,
  answer,
  handlePrevious,
  handleNext,
  flipCard,
  isFlipped,
}) {
  return (
    <div className="card">
      <div className={`card__inner${isFlipped ? ' is-flipped' : ''}`}>
        <div className="card__face card__face--front">
          <p className="question__text">{question}</p>
        </div>
        <div className="card__face card__face--back">
          <p className="question__text question__text-answer">{answer}</p>
        </div>
      </div>
      <Actions
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        flipCard={flipCard}
        isFlipped={isFlipped}
      />
    </div>
  );
}
