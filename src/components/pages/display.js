import React from 'react';
import './display.css'

export default function Dispcards(props)
{
    return (
        <div className="main">
            <div className="imgs">
                <img src={props.avatar} alt="not found"/>
            </div>
            <div className="details">
                <h1>{props.first_name}</h1>
                <p>{props.email}</p> 
            </div>
        </div>
    )
}





