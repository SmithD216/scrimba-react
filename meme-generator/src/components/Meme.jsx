import React, { useState, useEffect } from 'react';
import '../styles/meme.css';

export default function Meme(){
    const [meme, setMeme] = useState({topText: "", bottomText: "", randomImage: ""});
    const [allMemeImages, setAllMemeImages] = useState({});

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
    }, [])

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

    function handleChange(){
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return(
        <>
        <div className="meme--form">
            <input 
            type="text" 
            className="meme--top"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
            />
            <input 
            type="text" 
            className="meme--bottom"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
            />
            <button className="meme--button" onClick={getMeme}>Get a new meme image &#128444;&#65039;</button>
        </div>
        <div className='meme--imageWrapper'>
            <img className='meme--image' src={meme.randomImage}/>
            <h2 className='meme--topText'>{meme.topText}</h2>
            <h2 className='meme--bottomText'>{meme.bottomText}</h2>
        </div>
        </>
    )
}