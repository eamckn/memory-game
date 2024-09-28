import { useState } from "react";
import '../styles/Card.css'
import '../styles/fonts.css'
import '../styles/animations.css'

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
        <div className="card grow"
            onClick={handleClick}>
            <div className="img-wrapper">
                <img src={url} />
            </div>
            <p>{name}</p>
        </div>
    )
}