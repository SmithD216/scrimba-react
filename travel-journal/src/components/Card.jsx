import React from 'react';
import '../styles/card.css'

export default function Card(props){
    return(
        <div className='card'>
            <div className='card--left'>
                <img className='card--image' src={`${props.item.imageUrl}`} />
            </div>
            <div className='card--right' >
                <p className='card--location'>{props.item.location}</p>
                <a className='card--url' href={`${props.item.googleMapsUrl}`}>View on Google maps</a>
                <h2 className='card--title'>{props.item.title}</h2>
                <p className='card--startdate' >{props.item.startDate} - </p>
                <p className='card--enddate' >{props.item.endDate}</p>
                <p className='card--description'> {props.item.description}</p>
            </div>
            
        </div>
    )
}