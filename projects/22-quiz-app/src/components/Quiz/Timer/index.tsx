import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useQuizStore } from '../../../store';
import { TIMER_VALUE } from '../../../constants';

interface TimerProps {
  nextQuestion: () => void;
}

export default function Timer({ nextQuestion }: TimerProps) {
  const [time, setTime] = useState(TIMER_VALUE);
  const { decrementScore, answerIndex, questionIndex, addUserAnswer } =
    useQuizStore();

  useEffect(() => {
    const resetTimer = () => {
      setTime(TIMER_VALUE);
    };

    resetTimer();
  }, [questionIndex]);

  useEffect(() => {
    const nextMove = () => {
      nextQuestion();
      decrementScore();
      addUserAnswer('');
      setTime(TIMER_VALUE);
    };

    if (time === 0) nextMove();

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (answerIndex > -1) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [nextQuestion, time, answerIndex, addUserAnswer, decrementScore]);

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timerLabel}>⏱ {time}</div>
    </div>
  );
}
