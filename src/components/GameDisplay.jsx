import { useState } from 'react'
import '../styles/utility.css'
import '../styles/GameDisplay.css'

const imageUrls = [{id: "Ruins-GS", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ruins_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png"},
    {id: "Eclipse-Shotel", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/eclipse_shotel_curved_sword_weapon_elden_ring_wiki_guide_200px.png"},
    {id: "Grafted-Blade-GS", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/grafted_blade_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png"},
    {id: "SONAF", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_night_and_flame_straight_sword_weapon_elden_ring_wiki_guide_200px.png"},
    {id: "Marias-Executioner-GS", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marais_executioners_sword_weapon_elden_ring_wiki_guide_200px.png"},
    {id: "DMGS", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dark_moon_greatsword_weapon_elden_ring_wiki_guide_200px.png"},
    {id: "Devourer's-Scepter", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/devourers_scepter_warhammer_weapon_elden_ring_wiki_guide_200px.png"},
    {id: "GOGS", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_order_greatsword_weapon_elden_ring_wiki_guide_200px.png"},
    {id: "Bolt-of-Gransax", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bolt_of_gransax_spear_weapon_elden_ring_wiki_guide_200px.png"},
    {id: "Black-Knife", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_knife_dagger_weapon_elden_ring_wiki_guide_200px.png"},
    {id: "Godslayer-GS", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godslayers_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png"},
    {id: "AMOGS", url: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancient_meteoric_ore_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"},
]

export default function GameDisplay({ round, currentScore, bestScore, setCurrentScore, setBestScore, setRound }) {
    
    const [init, setInit] = useState(false);

    const randomizeCards = (array = imageUrls) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    if (!init) {
        randomizeCards();
        setInit(!init);
    }

    return (
        <div id="game-display">
            {imageUrls.map(item => {
                return <Card key={item.id}
                    round={round}
                    currentScore={currentScore}
                    bestScore={bestScore}
                    setCurrentScore={setCurrentScore}
                    setBestScore={setBestScore}
                    setRound={setRound}
                    url={item.url}
                    randomizeCards={randomizeCards}/> 
            })}
        </div>
    )
}

function Card({round, currentScore, bestScore, setCurrentScore, setBestScore, setRound, url, randomizeCards }) {
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
            <img src={url}/>
        </div>
    )
}