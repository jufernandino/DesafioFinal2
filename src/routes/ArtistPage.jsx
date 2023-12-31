import { React, useState, useEffect } from 'react'
import './ArtistPage.css'
import Card from '/components/Card';
import axios from 'axios';
import api from '../services/api';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '/components/Navbar';


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
      <Navbar />
      {/*AREA PRINCIPAL*/}
      <div className='main-container-artist'>
        <h1>Artistas</h1>
        <div className="artists-container"> {/*AREA DOS ARTISTAS*/}
          <div className='comp'> {/*CONTAINER COM OS CARDS DOS ARTISTAS*/}
            <Card imageSrc={arrayImages[0]} artistName="Engenheiros do Havai" id='7' />
            <Card imageSrc={arrayImages[1]} artistName="Cidade Negra" id='6' />
            <Card imageSrc={arrayImages[2]} artistName="Capital Inicial" id='4' />
            <Card imageSrc={arrayImages[3]} artistName="Skank" id='12' />
            <Card imageSrc={arrayImages[4]} artistName="Paralamas de Sucesso" id='10' />

            <Card imageSrc={arrayImages[5]} artistName="Lulu Santos" id='9' />
            <Card imageSrc={arrayImages[6]} artistName="Cazuza" id='5' />
            <Card imageSrc={arrayImages[7]} artistName="Kid Abelha" id='8' />
            <Card imageSrc={arrayImages[8]} artistName="Biquíni Cavadão" id='3' />
            <Card imageSrc={arrayImages[9]}  artistName="O Rappa" id='11' />
          </div>
        </div> {/* FIM AREA DOS ARTISTAS*/}
      </div> {/*FIM AREA PRINCIPAL*/}
      
      
    </div>
  );
};

export default ArtistPage
