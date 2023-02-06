import React from 'react';
import '../styles/meme.css';

export default function Meme(){
    return(
        <form action="" className="meme--form">
            <input type="text" className="meme--top"/>
            <input type="text" className="meme--bottom"/>
            <button className="meme--button">Get a new meme image &#128444;&#65039;</button>
        </form>
    )
}