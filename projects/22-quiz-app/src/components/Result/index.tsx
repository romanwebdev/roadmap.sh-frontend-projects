import questions from '../../data/questions.json';
import { useQuizStore } from '../../store';
import styles from './styles.module.css';

interface ResultProps {
  goHome: () => void;
}

export default function Result({ goHome }: ResultProps) {
  const { score, userAnswers, restart } = useQuizStore();

  function handleTryAgain() {
    restart();
    goHome();
  }

  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultCard}>
        <h2 className={styles.resultTitle}>Quiz Complete!</h2>
        <div className={styles.scoreLabel}>Score:</div>
        <div className={styles.scoreDisplay}>{score}</div>
      </div>

      <div className={styles.reviewSection}>
        <h3 className={styles.reviewTitle}>Review Your Answers</h3>
        <div className={styles.questionsReview}>
          {questions.map((question, index) => {
            const isCorrect =
              userAnswers[index] === question.answers[question.correct];
            return (
              <div
                key={question.question}
                className={`${styles.questionReview} ${isCorrect ? styles.correct : styles.incorrect}`}
              >
                <div className={styles.questionText}>
                  Q{index + 1}: {question.question}
                </div>
                <div className={styles.answerRow}>
                  <div className={`${styles.answerItem} ${styles.label}`}>
                    Correct Answer:
                  </div>
                  <div
                    className={`${styles.answerItem} ${styles.correctAnswer}`}
                  >
                    {question.answers[question.correct]}
                  </div>
                  <div className={`${styles.answerItem} ${styles.label}`}>
                    Your Answer:
                  </div>
                  <div
                    className={`${styles.answerItem} ${isCorrect ? styles.correctAnswer : styles.userAnswer}`}
                  >
                    {userAnswers[index] || 'Not answered (-1 score)'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={handleTryAgain} className={styles.tryAgainButton}>
          Try Again
        </button>
      </div>
    </div>
  );
}
