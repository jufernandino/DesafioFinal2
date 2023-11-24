import React, { useEffect, useState } from "react";
import './Card.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Card(props){
    const navigate= useNavigate()
    
    const redirect= () =>{
        return navigate(`/home/playlist/${props.id}`)
    }

    return(
        <>
            <div id="card-container" onClick={redirect}>
                {props.imageSrc && <img id="artist-image" src={props.imageSrc} alt="Artista" /> }
                <p id="artist-name">{props.artistName}</p>
                <p id="Artista">Artista</p>
            </div>
        </>
    )
}

export default Card
