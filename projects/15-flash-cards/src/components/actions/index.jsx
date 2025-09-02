import './actions.css';

export default function Actions({
  handlePrevious,
  handleNext,
  flipCard,
  isFlipped,
}) {
  return (
    <div className="actions">
      <button type="button" className="actions__nav" onClick={handlePrevious}>
        ❮ Previous
      </button>
      <button type="button" className="actions__toggle" onClick={flipCard}>
        {isFlipped ? 'Hide Answer' : 'Show Answer'}
      </button>
      <button type="button" className="actions__nav" onClick={handleNext}>
        Next ❯
      </button>
    </div>
  );
}
