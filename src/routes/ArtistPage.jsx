import { React, useState, useEffect } from 'react'
import './ArtistPage.css'
import Card from '/components/Card';
import axios from 'axios';
import spotify_api from '../services/spotifyApi';
import { Link } from "react-router-dom";


//FUNÇÃO PARA A PÁGINA DE ARTISTA
const ArtistPage = () => {
  const [arrayImages, setArrayImages]= useState([])
  const [token, setToken]= useState("")

  const handleClick=()=>{

  }

  const favoriteStyle = {
    color: 'white',
  }

  const client_id= 'ff9df290dfae488ca3cf4ecc7a643239';
  const client_secret= '1ed7d01b9380442d8cbd5e66e1fd7750';
  const artists_id=[ "0GNq4xh8uFCyihPurnunf7","4cx31cxKTg5L8blZE24qfZ", "4Z0yuwHVJBROVZqFpTIr0d", "4C4kpaAdp6aKSkguw40SsU", "7EM9m7HOXxVgP9oEpDDv70", "0A1oy7PC7fdzURgaLaWkL1", "1PwOU6fFbmaGkK3wkbb8fU", "4bOZtegYNmYOe3gMgPtt0H", "7E5dcvoiZra9wwBuXYAYTw", "1A5QJAC1vdhbhPE25Q0x0f" ]
  let artists_images= []

  const getToken= async ()=>{
    try {
            const response= await axios.post("https://accounts.spotify.com/api/token", 
            'grant_type=client_credentials&client_id=' + client_id+ '&client_secret='+client_secret, {
        });
        return response.data.access_token
    }catch (error) {
        console.log('Erro na requisição do token '+ error)
    }
  }

  const getImage= async (token, id)=>{
    try {
        const response= await spotify_api.get("/v1/artists/" + id,  
            {
              headers: {
                  'Authorization': 'Bearer ' + token,
              }
            }, )
  
        return response.data.images[2].url
    } catch (error) {
        console.log('Erro na requisição de imagem' + error)
    }
  }

  useEffect(() => {
    (async () => {
      const new_token = await getToken();
      setToken(new_token)
      let auxiliar
      let arrayAuxiliar=[]

      for (let i = 0; i < artists_id.length; i++) {
        auxiliar= await getImage(token, artists_id[i]);
        arrayAuxiliar.push(auxiliar)
      }

      setArrayImages(arrayAuxiliar)
      
    })();
  }, [arrayImages]);



  return (
    //APLICATIVO GERAL
    <div className='artistPage'>
      {/*BARRA LATERAL*/}
      <div className='left-container'>
        <h1 className='title'>iSpotify ®</h1>
        <button className='artist-btn'>
          <span className="material-symbols-outlined">
            mode_standby&ensp;</span>
          Artistas
        </button>
        <button className='like-btn'>
          <span style = {favoriteStyle} className="material-symbols-outlined">
            favorite&ensp;</span>
          Músicas Curtidas
        </button>
        <button className='logout-btn' onClick ={handleClick}>
          <span className="material-symbols-outlined">
            logout&ensp;</span>
          Logout
        </button>
      </div>
      {/*AREA PRINCIPAL*/}
      <div className='main-container'>
        <h1>Artistas</h1>
        <div className="artists-container"> {/*AREA DOS ARTISTAS*/}
          <div className='comp'> {/*CONTAINER COM OS CARDS DOS ARTISTAS*/}
            <Card imageSrc={arrayImages[0]} artistName="Engenheiros do Havai"/>
            <Card imageSrc={arrayImages[1]} artistName="Cidade Negra"/>
            <Card imageSrc={arrayImages[2]} artistName="Capital Inicial"/>
            <Card imageSrc={arrayImages[3]} artistName="Skank"/>
            <Card imageSrc={arrayImages[4]} artistName="Paralamas de Sucesso"/>

            <Card imageSrc={arrayImages[5]} artistName="Lulu Santos"/>
            <Card imageSrc={arrayImages[6]} artistName="Cazuza"/>
            <Card imageSrc={arrayImages[7]} artistName="Kid Abelha"/>
            <Card imageSrc={arrayImages[8]} artistName="Biquíni Cavadão"/>
            <Card imageSrc={arrayImages[9]}  artistName="O Rappa"/>
          </div>
        </div> {/* FIM AREA DOS ARTISTAS*/}
      </div> {/*FIM AREA PRINCIPAL*/}
      
      
    </div>
  );
};

export default ArtistPage
