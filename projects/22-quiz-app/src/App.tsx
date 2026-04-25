import { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { Phase } from './enums/phase.enum';
import type { PhaseType } from './enums/phase.enum';

function App() {
  const [currentPhase, setCurrentPhase] = useState<PhaseType>(Phase.Home);

  const startQuiz = () => setCurrentPhase(Phase.Quiz);
  const showResult = () => setCurrentPhase(Phase.Result);
  const goHome = () => setCurrentPhase(Phase.Home);

  switch (currentPhase) {
    case Phase.Quiz:
      return <Quiz showResult={showResult} />;
    case Phase.Result:
      return <Result goHome={goHome} />;
    default:
      return <Home startQuiz={startQuiz} />;
  }
}

export default App;
