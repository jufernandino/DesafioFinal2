import { React, useState, useEffect } from 'react'
import './ArtistPage.css'
import Card from '/components/Card';
import axios from 'axios';
import api from '../services/api';
import { Link, useNavigate } from "react-router-dom";


//FUNÇÃO PARA A PÁGINA DE ARTISTA
const ArtistPage = () => {
  const [arrayImages, setArrayImages]= useState([])
  const navigate= useNavigate()

  const favoriteStyle = {
    color: 'white',
  }

  const artistsNames= ['Engenheiros do Hawaii', 'Cidade Negra', 'Capital Inicial', 'Skank', 'Paralamas do Sucesso', 'Lulu Santos', 'Cazuza', 'Kid Abelha', 'Biquini Cavadão', 'O Rappa']

  const getImageUrl= (array, artistName) => {
    let object= null
    for(let i=0; i<array.length;i++){
      if(array[i].name == artistName){
        object=array[i]
        break
      }
    }

    return object.image
  }

  const getArtists= async ()=>{
    try {
      const response= await api.get('/artists')
      return response.data
    } catch (error) {
      console.log('Falha na requisição')
    }
  }

  const logOut= async ()=>{
    try {
      await api.post('/users/logout')
      console.log('Logout efetuado')
      return navigate('/')

    } catch (error) {
      console.log('Logout não efetuado')
    }
  }

  useEffect(() => {
    (async () => {
      const objectsArray= await getArtists()
      let auxArray= []
      let aux=''
      for(let i=0; i<artistsNames.length; i++){
        aux= getImageUrl(objectsArray, artistsNames[i])
        auxArray.push(aux)
      }
      setArrayImages(auxArray)

    })();
  }, []);



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
            <Link to="/home/playlist">Músicas Curtidas</Link>
        </button>
        <button className='logout-btn' onClick = {logOut}>
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
