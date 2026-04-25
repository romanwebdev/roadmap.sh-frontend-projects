import styles from './styles.module.css';
import Button from '../ui/Button';

interface HomeProps {
  startQuiz: () => void;
}

export default function Home({ startQuiz }: HomeProps) {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1 className={styles.title}>Quiz App</h1>
        <h2 className={styles.description}>
          Test your knowledge of planets, stars, galaxies, and the mysteries of
          the universe.
        </h2>
        <Button onClick={startQuiz}>Start</Button>
      </div>
    </div>
  );
}
