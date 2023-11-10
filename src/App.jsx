import { useState } from 'react'
import './App.css'

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
          <span class="material-symbols-outlined">
            radio_button_checked&ensp;</span>
          Artistas
        </button>
        <button className='like-btn'>
          <span style = {favoriteStyle} className="material-symbols-outlined">
            favorite&ensp;</span>
          Músicas Curtidas
        </button>
        <button className='logout-btn'>
          <span class="material-symbols-outlined">
            logout&ensp;</span>
          Logout
        </button>
      </div>
      {/*AREA PRINCIPAL*/}
      <div className='main-container'>
        <h1>Artistas</h1>
        <div className="artists-container"> {/*AREA DOS ARTISTAS*/}
          <div className='comp'> {/*LINHA DE CIMA DOS ARTISTAS*/}
            <button className='components'></button>
            <button className='components'></button>
            <button className='components'></button>
            <button className='components'></button>
            <button className='components'></button>
          </div>
          <div className='comp'> {/*LINHA DE BAIXO DOS ARTISTAS*/}
            <button className='components'></button>
            <button className='components'></button>
            <button className='components'></button>
            <button className='components'></button>
            <button className='components'></button>
          </div>
        </div> {/* FIMAREA DOS ARTISTAS*/}
      </div> {/*FIM AREA PRINCIPAL*/}
      
    </div>
  )
}

export default App
