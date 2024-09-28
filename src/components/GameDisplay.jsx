import { useState, useEffect } from 'react'
import '../styles/utility.css'
import '../styles/GameDisplay.css'

// const cardsInfo = [{id: "Ruins-GS", name:"Ruins Greatsword", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ruins_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png"},
//     {id: "Eclipse-Shotel", name:"Eclipse Shotel", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/eclipse_shotel_curved_sword_weapon_elden_ring_wiki_guide_200px.png"},
//     {id: "Grafted-Blade-GS", name:"Grafted Blade Greatsword", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/grafted_blade_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png"},
//     {id: "SONAF", name:"Sword of Night and Flame", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_night_and_flame_straight_sword_weapon_elden_ring_wiki_guide_200px.png"},
//     {id: "Marias-Executioner-GS", name:"Marais Executioner's Sword", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marais_executioners_sword_weapon_elden_ring_wiki_guide_200px.png"},
//     {id: "DMGS", name:"Dark Moon Greatsword", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dark_moon_greatsword_weapon_elden_ring_wiki_guide_200px.png"},
//     {id: "Devourer's-Scepter", name:"Devourer's Scepter", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/devourers_scepter_warhammer_weapon_elden_ring_wiki_guide_200px.png"},
//     {id: "GOGS", name:"Golden Order Greatsword", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_order_greatsword_weapon_elden_ring_wiki_guide_200px.png"},
//     {id: "Bolt-of-Gransax", name:"Bolt of Gransax", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bolt_of_gransax_spear_weapon_elden_ring_wiki_guide_200px.png"},
//     {id: "Black-Knife", name:"Black Knife", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_knife_dagger_weapon_elden_ring_wiki_guide_200px.png"},
//     {id: "Godslayer-GS", name:"Godslayer's Greatsword", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godslayers_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png"},
//     {id: "AMOGS", name:"Ancient Meteoric Ore Greatsword", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancient_meteoric_ore_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"},
// ]


export default function GameDisplay({ round,
    currentScore,
    bestScore,
    setCurrentScore,
    setBestScore,
    setRound }) {
    
    const [init, setInit] = useState(false);
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

    // async function getData() {
    //     const url = 'https://narutodb.xyz/api/akatsuki?limit=44';
    //     try {
    //         let response = await fetch(url);
    //         let json = await response.json();
    //         //console.log(typeof json)
    //         //console.log(json);
    //         //console.log(json.akatsuki)
    //         let akatuski = json.akatsuki.map((member) => (
    //             {id: member.id, name: member.name, url: member.images[0]}
    //         ))
    //         akatuski = filterAkastuki(akatuski)
    //         console.log(akatuski)
    //         setCardInfo(akatuski);
    //     } 
    //     catch (error){
    //         console.error(error.message)
    //     }
    // }

    // if (!init) {
    //     randomizeCards();
    //     setInit(!init);
    // }

    useEffect(() => {
    async function getData() {
        const url = 'https://narutodb.xyz/api/akatsuki?limit=44';
        try {
            let response = await fetch(url);
            let json = await response.json();
            //console.log(typeof json)
            //console.log(json);
            //console.log(json.akatsuki)
            let akatuski = json.akatsuki.map((member) => (
                {id: member.id, name: member.name, url: member.images[0]}
            ))
            akatuski = filterAkastuki(akatuski)
            console.log(akatuski)
            setCardInfo(akatuski);
        } 
        catch (error){
            console.error(error.message)
        }
    }
    getData()
}, []);


    if (!cardInfo.length) {
        return <div id="loading">Loading</div>  
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

function Card({ round,
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