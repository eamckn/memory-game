import { useState } from 'react'
import '../styles/utility.css'
import '../styles/GameDisplay.css'

export default function GameDisplay({round, currentScore, bestScore, setCurrentScore, setBestScore, setRound}) {

    return (
        <div id="game-display">
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
            <Card round={round} currentScore={currentScore} bestScore={bestScore} setCurrentScore={setCurrentScore} setBestScore={setBestScore} setRound={setRound} />
        </div>
    )
}

function Card({round, currentScore, bestScore, setCurrentScore, setBestScore, setRound }) {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        if (clicked) {
            setCurrentScore(0);
            if (currentScore > bestScore) {
                setBestScore(currentScore);
            }
            setRound(round + 1)
        } else {
            setClicked(!clicked);
            setCurrentScore(currentScore + 1)
        }
    }

    return (
        <div className="card"
            onClick={handleClick}>
        </div>
    )
}