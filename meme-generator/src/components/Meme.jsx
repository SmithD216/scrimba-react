import React, { useState } from 'react';
import '../styles/meme.css';
import memesData from '../memesData.js'

export default function Meme(){
    const [maymay, setMayMay] = useState("")

    function getMeme(){
        const memes = memesData.data.memes
        const result = memes[Math.floor(Math.random() * 100) + 1].url;
        setMayMay(result)
    }
    
    return(
        <>
        <div className="meme--form">
            <input type="text" className="meme--top"/>
            <input type="text" className="meme--bottom"/>
            <button className="meme--button" onClick={getMeme}>Get a new meme image &#128444;&#65039;</button>
        </div>
        <img className='meme--image' src={maymay}/>
        </>
    )
}