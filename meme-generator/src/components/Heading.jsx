import React from 'react';
import '../styles/heading.css';

export default function Heading(){
    return(
        <div className='heading'>
            <img className='heading--image' src="../src/assets/trollface.png"/>
            <h1 className='heading--title' >Meme Generator</h1>
            <p className='heading--subtitle' >React Course - Project 3</p>
        </div>
    )
}