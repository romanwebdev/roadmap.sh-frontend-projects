import './progress-bar.css';

export default function ProgressBar({ number, count }) {
  const percent = `${Math.floor(((number + 1) / count) * 100)}%`;

  return (
    <div className="progress">
      <div className="progress__fill" style={{ width: percent }}>
        {percent}
      </div>
      <span className="progress__status">
        {number + 1} of {count}
      </span>
    </div>
  );
}
