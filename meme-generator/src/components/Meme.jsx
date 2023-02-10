import React from 'react';
import '../styles/meme.css';
import memesData from '../memesData.js'

export default function Meme(){
    function getMeme(){
        const memes = memesData.data.memes
        console.log(memes[Math.floor(Math.random() * 100) + 1].url);
    }

    return(
        <div className="meme--form">
            <input type="text" className="meme--top"/>
            <input type="text" className="meme--bottom"/>
            <button className="meme--button" onClick={getMeme}>Get a new meme image &#128444;&#65039;</button>
        </div>
    )
}