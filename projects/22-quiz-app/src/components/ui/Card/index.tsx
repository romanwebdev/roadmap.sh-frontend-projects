import { useEffect } from 'react';
import styles from './styles.module.css';
import { useQuizStore } from '../../../store';
import { DEFAULT_ANSWER_INDEX } from '../../../constants';
import questions from '../../../data/questions.json';

export default function Card() {
  const {
    incrementScore,
    answerIndex,
    addAnswerIndex,
    questionIndex,
    addUserAnswer,
  } = useQuizStore();
  const questionData = questions[questionIndex];

  useEffect(() => {
    addAnswerIndex(DEFAULT_ANSWER_INDEX);
  }, [questionData, addAnswerIndex]);

  function handleAnswer(index: number) {
    addAnswerIndex(index);

    const correctAnswer = questionData.answers[index];
    addUserAnswer(correctAnswer);

    if (questionData.correct === index) {
      incrementScore();
    }
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.question}>{questionData.question}</h3>
      <div className={styles.answersContainer}>
        {questionData.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`${styles.answerButton} ${
              answerIndex > -1
                ? index === questionData.correct
                  ? styles.correct
                  : styles.wrong
                : ''
            }`}
            disabled={answerIndex > -1}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
