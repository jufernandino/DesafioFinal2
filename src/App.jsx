import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    //APLICATIVO GERAL
    <div className='app'>
      {/*BARRA LATERAL*/}
      <div className='left-container'>
        <h1 className='title'>iSpotify ®</h1>
        <button className='artist-btn'>Artistas</button>
        <button className='like-btn'>Músicas Curtidas</button>
        <button className='logout-btn'>Logout</button>
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
