import '../styles/utility.css'
import '../styles/GameDisplay.css'

export default function GameDisplay() {
    return (
        <div id="game-display">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

function Card() {
    return (
        <div className="card"></div>
    )
}