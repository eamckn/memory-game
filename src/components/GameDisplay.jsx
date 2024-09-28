import { useState, useEffect } from 'react'
import Card from './Card'
import '../styles/utility.css'
import '../styles/GameDisplay.css'
import '../styles/fonts.css'


export default function GameDisplay({ round,
    currentScore,
    bestScore,
    setCurrentScore,
    setBestScore,
    setRound }) {
    
    const [cardInfo, setCardInfo] = useState([])

    const randomizeCards = (array = cardInfo) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const filterAkastuki = (array) => {
        return array.filter(member => member.name === "Black Zetsu" ||
            member.name === "Deidara" ||
            member.name === "Hidan" ||
            member.name === "Itachi Uchiha" ||
            member.name === "Kakuzu" ||
            member.name === "Kisame Hoshigaki" ||
            member.name === "Konan" ||
            member.name === "Nagato" ||
            member.name === "Obito Uchiha" ||
            member.name === "Sasori" ||
            member.name === "Tobi (Zetsu)" ||
            member.name === "White Zetsu")
    }

    if (cardInfo.length !== 0) {
        randomizeCards();
    }

    useEffect(() => {
    async function getData() {
        const url = 'https://narutodb.xyz/api/akatsuki?limit=44';
        try {
            let response = await fetch(url);
            let json = await response.json();
            let akatuski = json.akatsuki.map((member) => (
                {id: member.id, name: member.name, url: member.images[0]}
            ))
            akatuski = filterAkastuki(akatuski)
            console.log(akatuski)
            setTimeout(() => {
                setCardInfo(akatuski);
            }, 500);
        } 
        catch (error){
            console.error(error.message)
        }
    }
    getData();
}, []);


    if (!cardInfo.length) {
        return <div id="game-display">
                    <div id="loading">Loading</div>
                </div>
    } else {
        return <div id="game-display">
            {console.log(cardInfo)}
            {cardInfo.map(item => {
                return <Card key={item.id}
                    round={round}
                    currentScore={currentScore}
                    bestScore={bestScore}
                    setCurrentScore={setCurrentScore}
                    setBestScore={setBestScore}
                    setRound={setRound}
                    url={item.url}
                    name={item.name}
                    randomizeCards={randomizeCards}/> 
            })}
        </div>
    }
}