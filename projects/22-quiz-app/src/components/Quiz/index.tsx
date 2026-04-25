import questions from '../../data/questions.json';
import Card from '../ui/Card';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import { useQuizStore } from '../../store';
import { DEFAULT_ANSWER_INDEX } from '../../constants';
import styles from './styles.module.css';

interface QuizProps {
  showResult: () => void;
}

export default function Quiz({ showResult }: QuizProps) {
  const { score, answerIndex, questionIndex, incrementQuestionIndex } =
    useQuizStore();

  function handleNextQuestion() {
    if (questionIndex >= questions.length - 1) {
      showResult();
      return;
    }
    incrementQuestionIndex();
  }

  return (
    <div className={styles.quizContainer}>
      <div className={styles.header}>
        <div className={styles.scoreBoard}>Score: {score}</div>
        <Timer nextQuestion={handleNextQuestion} />
        <div className={styles.questionCount}>
          Question {questionIndex + 1} of {questions.length}
        </div>
      </div>

      <ProgressBar current={questionIndex} total={questions.length} />

      <Card />

      <div className={styles.buttonContainer}>
        <button
          onClick={handleNextQuestion}
          disabled={answerIndex === DEFAULT_ANSWER_INDEX}
          className={styles.nextButton}
        >
          {questionIndex >= questions.length - 1
            ? 'Finish Quiz'
            : 'Next Question'}
        </button>
      </div>
    </div>
  );
}
