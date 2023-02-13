import React, { useState } from 'react';
import '../styles/meme.css';
import memesData from '../memesData.js'

export default function Meme(){
    const [maymay, setMayMay] = useState("");
    const [meme, setMeme] = useState({topText: "", bottomText: "", randomImage: ""});
    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMeme(){
        const memes = allMemeImages.data.memes
        const result = memes[Math.floor(Math.random() * 100) + 1].url;
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                randomImage: result
            }
        })
    }
    
    return(
        <>
        <div className="meme--form">
            <input type="text" className="meme--top"/>
            <input type="text" className="meme--bottom"/>
            <button className="meme--button" onClick={getMeme}>Get a new meme image &#128444;&#65039;</button>
        </div>
        <img className='meme--image' src={meme.randomImage}/>
        </>
    )
}