import React from "react";
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import axios from "axios";
import api from "../services/api";
import Alert from "@mui/material/Alert";

import Chip from '@mui/material/Chip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsIcon from '@mui/icons-material/Https';

//FUNÇÃO PARA A PÁGINA DE LOGIN
const LoginPage = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState()
    const navigate= useNavigate('')
    const [error, setError] = useState("");

    //FUNÇÃO COM A REQUISIÇÃO PARA LOGAR UM USUÁRIO
    const login= async ()=>{
        try {  
            await api.post('/users/login', 
            {
              email: email,
              password: password, 
            })   

            console.log('Login efetuado')
            return navigate('home')
            
        } catch (error) {
            console.log('Login não efetuado' + error);
            console.log(error.response.data);
            setError(error.response.data);
        }
    }


    return (
        <div className="Login"> 
            {/* TITULO */}
            <div className="Title">
                <h1>iSpotify ®</h1>
            </div>
            <div className="SubTitle">
                <h1>Música para todos.</h1>
            </div>
            {/* LOCAL PARA LOGAR O EMAIL */}
            <div className="Email">
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <Chip id="icons" icon={<MailOutlineIcon />} />
            </div>
            {/* LOCAL PARA LOGAR A SENHA */}
            <div className="Password">
                <input type="text" placeholder="Senha" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Chip id="icons" icon={<HttpsIcon />} />
            </div>
            {/* BOTÃO PARA ENTRAR NA CONTAR */}
            <div>    
                <button className="BtnLogin" onClick={login}>
                        ENTRAR
                    </button> 
            </div>
            {/* LOCAL PARA REGISTRAR UMA NOVA CONTA */}
            <div className="Register">
                <p>NÃO TEM UMA CONTA? <Link to="register">INCREVA-SE</Link> </p>
            </div>
            {/* AVISO DE ERRO */}
            {error ? <Alert variant="filled" severity="error">{error}</Alert> : <div /> }

        </div> 
    );
};

export default LoginPage