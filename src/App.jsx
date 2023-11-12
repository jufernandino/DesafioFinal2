import { useState } from 'react'
import './App.css'
import Card from '../components/Card';

function App() {
  const [count, setCount] = useState(0)

  const favoriteStyle = {
    color: 'white',
  };

  return (
    //APLICATIVO GERAL
    <div className='app'>
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
        <button className='logout-btn'>
          <span className="material-symbols-outlined">
            logout&ensp;</span>
          Logout
        </button>
      </div>
      {/*AREA PRINCIPAL*/}
      <div className='main-container'>
        <h1>Artistas</h1>
        <div className="artists-container"> {/*AREA DOS ARTISTAS*/}
          <div className='comp'> {/*LINHA DE CIMA DOS ARTISTAS*/}
            <Card imageSrc="" artistName="Engenheiros do Havai"/>
            <Card imageSrc="" artistName="Cidade Negra"/>
            <Card imageSrc="" artistName="Capital Inicial"/>
            <Card imageSrc="" artistName="Skank"/>
            <Card imageSrc="" artistName="Paralamas de Sucesso"/>
          </div>
          <div className='comp'> {/*LINHA DE BAIXO DOS ARTISTAS*/}
            <Card imageSrc="" artistName="Lulu Santos"/>
            <Card imageSrc="" artistName="Cazuza"/>
            <Card imageSrc="" artistName="Kid Abelha"/>
            <Card imageSrc="" artistName="Biquíni Cavadão"/>
            <Card imageSrc="" artistName="O Rappa"/>
          </div>
        </div> {/* FIM AREA DOS ARTISTAS*/}
      </div> {/*FIM AREA PRINCIPAL*/}
      
    </div>
  )
}

export default App
