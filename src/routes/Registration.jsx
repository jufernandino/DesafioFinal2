import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import './Registration.css'

//UNÇÃO PARA PAGINA DE REGISTRO DE CONTA
const RegistrationPage = () => {
    //FUNÇÃO PARA EMAIL
    const [newEmail, setEmail]= useState()
    //FUNÇÃO PARA SENHA
    const [newPassword, setPassword] = useState()
    //FUNÇÃO PARA NOME
    const [userName, setName] = useState()
    
    //FUNÇÃO PARA SUBMETER O EMAIL
    const SaveRegister =(newEmail, value, newPassword, value2, userName, value3) => {
        localStorage.setItem(newEmail, value)
        localStorage.setItem(newPassword, value2)
        localStorage.setItem(userName, value3)
    }
    
    
    return (

        <div className="Register"> 
            {/* TITULO */}
            <div className="Title">
                <h1>Inscrever-se em uma 
                    conta grátis do <br></br>
                    iSpotify ® </h1>
            </div> 
            {/* LOCAL PARA CADASTRAR O EMAIL */}
            <div className="newEmail">
                <input type="text" value={newEmail} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            {/* LOCAL PARA CRIAR A SENHA */}
            <div className="newPassword">
                <input type="text" value={newPassword} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            {/* LOCAL PARA CADASTRAR O NOME */}
            <div className="Name">
                <input type="text" value={userName} onChange={(e)=>setName(e.target.value)}/>
            </div>
            {/* BOTÃO PARA SALVAR A CONTAR */}
            <div>    
                <button className="BtnRegister" onClick={()=> SaveRegister("ls_email", newEmail, "ls_password", newPassword, "ls_name", userName) }>
                        CADASTRAR
                </button> 
            </div>
            {/* LOCAL PARA REGISTRAR UMA NOVA CONTA */}
            <div className="Login">
                <p>Já é um usuário do Spotify? <Link to="/">FAÇA LOGIN</Link> </p>
            </div>

        </div> 
    );
};


export default RegistrationPage