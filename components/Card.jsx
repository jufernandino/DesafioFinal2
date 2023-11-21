import React, { useEffect, useState } from "react";
import './Card.css'
import axios from "axios";

function Card(props){
    
    return(
        <>
            <div id="card-container">
                {props.imageSrc && <img id="artist-image" src={props.imageSrc} alt="Artista" /> }
                <p id="artist-name">{props.artistName}</p>
                <p id="Artista">Artista</p>
            </div>
        </>
    )
}

export default Card
