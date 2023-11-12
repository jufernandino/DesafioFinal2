import React from "react";
import './Card.css'

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