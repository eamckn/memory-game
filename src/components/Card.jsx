import { useState } from "react";
import '../styles/Card.css'

export default function Card({ round,
    currentScore,
    bestScore,
    setCurrentScore,
    setBestScore,
    setRound,
    name,
    url,
    randomizeCards }) {
    
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
            randomizeCards();
        }
    }

    return (
        <div className="card"
            onClick={handleClick}>
            <img src={url} />
            <p>{name}</p>
        </div>
    )
}