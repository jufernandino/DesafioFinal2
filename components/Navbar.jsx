import { React, useState, useEffect } from 'react'
import './Navbar.css';
import axios from 'axios';
import api from '/src/services/api';
import { Link, useNavigate } from "react-router-dom";


//FUNÇÃO PARA ABA DE NAVEGAÇÃO
const Navbar = () => {
  const navigate= useNavigate()
  const logOut= async ()=>{
    try {
      await api.post('/users/logout')
      console.log('Logout efetuado')
      return navigate('/')

    } catch (error) {
      console.log('Logout não efetuado')
    }
  }

  return (
    <div className='NAV'>
        {/*BARRA LATERAL*/}
        <div className='left-container'>
            <h1 className='SpotifyTitle'>iSpotify ®</h1>
            <button className='artist-btn'>
            <span className="material-symbols-outlined">
                mode_standby&ensp;</span>
            <Link className='link' to="/home">Artistas</Link>
            </button>
            <button className='like-btn'>
                <span className="material-symbols-outlined">
                favorite&ensp;</span>
                <Link className='link' to="/favorites">Músicas Curtidas</Link>
            </button>
            <button className='account-btn'>
                <span className="material-symbols-outlined">
                account_circle&ensp;</span>
                <Link className='link' to="/myaccount">Minha Conta</Link>
            </button>
            <button className='logout-btn' onClick = {logOut}>
            <span className="material-symbols-outlined">
                logout&ensp;</span>
            Logout
            </button>
        </div>
    </div>
  );
};

export default Navbar