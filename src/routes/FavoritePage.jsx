import { useEffect, useState } from 'react'
import Music from "/components/music";
import React from "react";
import { Link, useParams } from "react-router-dom";
import './FavoritePage.css'
import api from '../services/api';
import Navbar from '/components/Navbar';

function FavoritePlaylist(){
  const [artist, setArtist]= useState({})
  const {id}= useParams()

  //ARRAY COM LISTA DAS MUSICAS
  const [musics, setMusics] = useState([
    {id:1,
      title: "The Zephyr Song",
      artist: "Red Hot Chili Pepers",
      album: "By The Way",
      favorite: false,
    },
    {
      id:2,
      title: "Talk",
      artist: "Coldplay",
      album: "X&Y",
      favorite: false,
    },
    {
      id:3,
      title: "Cidade Negra",
      artist: "Firmamento",
      album: "Cidade Negra Acústico MTV",
      favorite: false,
    },
    {
      id:4,
      title: "Clocks",
      artist: "Coldplay",
      album: "A Rush of Blood to the Head",
      favorite: false,
    },
  ]);


  //FUNÇÃO PARA REMOVER UMA MUSICA DA PLAYLIST
  const remove = (id) => {
    const newMusic = [...musics]
    const filteredMusics = newMusic.filter(music => 
      music.id !== id ? music : null
    );
    setMusics(filteredMusics);
  };

  

  return ( 
    //APLICATIVO GERAL
    <div>
      <Navbar />
      <div className="favoritePage"> 
            {/*AREA PRINCIPAL*/}
            <div className='main'>
                {/*IMAGEM DA PLAYLIST*/}
                <div className='image-favorites'></div>
                {/*NOME DA PLAYLIST*/}
                <div className="name-favPlaylist">
                    <p>Playlist</p>
                    <h1>Músicas Curtidas</h1>
                </div>
                
            </div>

            {/*BOTÕES DO MEIO*/}
            <div className='middle-buttons'>
            <div className='play-button-box'>
                <button className="play-button"></button>
            </div>
            <button className='download-button'>
                <span className="material-symbols-outlined"> download_for_offline </span>
            </button>
            </div>

            {/*CABEÇALHO PARA AREA EM QUE APARECE AS MUSICAS*/}
            <div className="header-favPlaylist">
            <div className='header-favPlaylist-tittle'> <span className="material-symbols-outlined"> numbers </span> <h4> TÍTULO </h4> </div>
            <h4>ÁLBUM</h4>
            <span className="material-symbols-outlined"> schedule </span>
            </div>

            {/*LINHA SEPARANDO O CABEÇALHO*/}
            <hr className='line-header'></hr>

            {/*AREA EM QUE APARECE AS MUSICAS*/}
            <div className="favPlaylist"> 
                {musics.map ((music) => ( //Mapear os itens da função "musics"
                    <ul key={music.id}> {/*Listar todas as música */}
                    < Music music={music} remove={remove}/> 
                    </ul> // Fim da listagem das músicas
                ))} {/*Fim do map */}
            </div> {/*FIM DA AREA DAS MUSICAS*/}
      </div>
    </div>
    //FIM DO APLICATIVO GERAL
  ); //FIM DO RETURN
} 

function FavoritePage(){
  
  return ( 
      FavoritePlaylist()    
    )
}

export default FavoritePage
