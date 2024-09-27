export default function ScoreDisplay({currentScore, bestScore}) {
    return (
        <div id="score-display">
            <CurrentScore currentScore={currentScore} />
            <BestScore bestScore={bestScore} />
        </div>
    )
}

function CurrentScore({currentScore}) {
    return (
        <p>Current Score: {currentScore}</p>
    )
}

function BestScore({ bestScore }) {
    return (
        <p>Best Score: {bestScore}</p>
    )
}