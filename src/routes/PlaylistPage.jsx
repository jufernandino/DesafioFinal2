import { useEffect, useState } from 'react'
import Music from "/components/music";
import React from "react";
import { Link, useParams } from "react-router-dom";
import './PlaylistPage.css'
import api from '../services/api';
import Navbar from '/components/Navbar';

function Playlist(){
  const [artist, setArtist]= useState({})
  const {id}= useParams()

  //ARRAY COM LISTA DAS MUSICAS
  const [musics, setMusics] = useState([]);

  const getArtistsDetails= async() =>{
    try {
      const response= await api.get(`/artists/${id}`)
      return response.data

    } catch (error) {
      console.log('Falha na requisição')
    }
  }

  //FUNÇÃO PARA REMOVER UMA MUSICA DA PLAYLIST
  const remove = (id) => {
    const newMusic = [...musics]
    const filteredMusics = newMusic.filter(music => 
      music.id !== id ? music : null
    );
    setMusics(filteredMusics);
  };

  //FUNÇÃO PARA ADICIONAR UMA MUSICA AOS FAVORITOS 
  const favorite = async(id) => {
    const newMusic = [...musics]
    newMusic.map((music) =>
      music.id === id ? (music.favorite = !music.favorite) : music
    );
    setMusics(newMusic);
    await setUserMusics(id);
  };

  const getArtistSongs= async()=>{
    try {
      const response= await api.get(`/songs/artist/${id}`)
      return response.data
    } catch (error) {
      console.log("Erro na requisição de músicas " + error)
    }
  }

  const setUserMusics= async(music_id)=>{
    try {
      await api.post(`/users-songs/${music_id}`)
    } catch (error) {
      console.log('Erro na requisição ' + error)
    }
  }

  
  useEffect( ()=>{
    ( async()=>{
      
      const auxArtist = await getArtistsDetails()
      setArtist(auxArtist)

      const auxMusics= await getArtistSongs()
      const auxMusics2= auxMusics.map((music, index)=>{
        return { ...music, favorite: false, list_number: index+1}
      })
      setMusics(auxMusics2)

    })()  
  }, [])


  return ( 
    //APLICATIVO GERAL
    <div>
      <Navbar />
      <div className="playlistPage"> 
        {/*AREA PRINCIPAL*/}
        <div className='area'>
              {/*IMAGEM DA PLAYLIST*/}
              <div className='image-playlist'>
                { artist.image && <img id='artistImage' src={artist.image} alt="Imagem do artist" />}
              </div>
              {/*NOME E INFORMAÇÕES DA PLAYLIST*/}
              <div className="name-playlist">
                  <p>ARTISTA</p>
                  <p id='artist_name'>{artist.name}</p>
              </div>
              
        </div>

          {/*BOTÕES DO MEIO*/}
        <div className='middle-buttons'>
          <div className='play-button-box'>
            <button className="play-button"></button>
          </div>
          <button className='favorite-playlist-button'>
            <span className="material-symbols-outlined"> favorite </span>
          </button>
          <button className='download-button'>
            <span className="material-symbols-outlined"> download_for_offline </span>
          </button>
          <button className='more-options-button'>
            <span className="material-symbols-outlined"> more_horiz </span>
          </button>
        </div>

        {/*CABEÇALHO PARA AREA EM QUE APARECE AS MUSICAS*/}
        <div className="header-playlist">
          <div className='header-playlist-tittle'> <span className="material-symbols-outlined"> numbers </span> <h4> TÍTULO </h4> </div>
          <h4>Gênero</h4>
          <span className="material-symbols-outlined"> schedule </span>
        </div>

        {/*LINHA SEPARANDO O CABEÇALHO*/}
        <hr className='line-header'></hr>

        {/*AREA EM QUE APARECE AS MUSICAS*/}
        <div className="playlist"> 
          {musics.map ((music) => ( //Mapear os itens da função "musics"
            <ul key={music.id}> {/*Listar todas as música */}
              < Music music={music} remove={remove} favorite={favorite}/> 
            </ul> // Fim da listagem das músicas
          ))} {/*Fim do map */}
          
        </div> {/*FIM DA AREA DAS MUSICAS*/}
      </div>
    </div>
    //FIM DO APLICATIVO GERAL
  ); //FIM DO RETURN
} 

function PlaylistPage(){
  
  return ( 
      Playlist()    
    )
}

export default PlaylistPage
