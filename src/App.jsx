import { useState } from 'react'
import ScoreDisplay from './components/ScoreDisplay';
import GameDisplay from './components/GameDisplay';
import './App.css'

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [round, setRound] = useState(1);

  return (
    <>
      <header id='header'>Memory Game
        <ScoreDisplay currentScore={currentScore} bestScore={bestScore} />
      </header>
      <GameDisplay key={round}
        round={round}
        currentScore={currentScore}
        bestScore={bestScore}
        setRound={setRound}
        setCurrentScore={setCurrentScore}
        setBestScore={setBestScore} />
    </>
  )
}

export default App
