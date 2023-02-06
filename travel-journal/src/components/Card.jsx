import React from 'react';

export default function Card(props){
    return(
        <div>
             <h2>{props.item.title}</h2>
            location: {props.item.location}
            <a href={`"${props.item.googleMapsUrl}"`}>{props.item.googleMapsUrl}</a>
            <p>{props.item.startDate}</p>
            <p>{props.item.endDate}</p>
            <p> {props.item.description}</p>
        </div>
    )
}