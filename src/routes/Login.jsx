import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import './Login.css'

//FUNÇÃO PARA A PÁGINA DE LOGIN
const LoginPage = () => {
    //FUNÇÃO PARA EMAIL
    const [email, setEmail]= useState()
    //FUNÇÃO PARA SENHA
     const [password, setPassword] = useState()

    //FUNÇÃO PARA SUBMETER O EMAIL
    const SubmitEmail =(email, value, password, value2) => {
        localStorage.setItem(email, value)
        localStorage.setItem(password, value2)
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
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            {/* LOCAL PARA LOGAR A SENHA */}
            <div className="Password">
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            {/* BOTÃO PARA ENTRAR NA CONTAR */}
            <div>    
                <button className="BtnLogin" onClick={()=> SubmitEmail("ls_email", email, "ls_password", password) }>
                        ENTRAR
                    </button> 
            </div>
            {/* LOCAL PARA REGISTRAR UMA NOVA CONTA */}
            <div className="Register">
                <p>NÃO TEM UMA CONTA? <Link to="register">INCREVA-SE</Link> </p>
            </div>
            
            {/* Provisório, só para testa se esta funcionando */}
            <div className="Teste">
                <div> <Link to="playlist">PLAYLIST  </Link> </div>
                <div> <Link to="home"> HOME</Link> </div>
            </div>


        </div> 
    );
};

export default LoginPage