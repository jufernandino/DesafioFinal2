import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import './Registration.css'
import axios from "axios";
import api from "../services/api";

//FUNÇÃO PARA PAGINA DE REGISTRO DE CONTA
const RegistrationPage = () => {
    //FUNÇÃO PARA EMAIL
    const [newEmail, setEmail]= useState('')
    //FUNÇÃO PARA SENHA
    const [newPassword, setPassword] = useState('')
    //FUNÇÃO PARA NOME
    const [userName, setName] = useState('')
    
    //FUNÇÃO PARA SUBMETER O EMAIL
    const SaveRegister =(newEmail, value, newPassword, value2, userName, value3) => {
        localStorage.setItem(newEmail, value)
        localStorage.setItem(newPassword, value2)
        localStorage.setItem(userName, value3)
    }
    
    //REQUISIÇÃO DE CRIAÇÃO DE NOVO USUÁRIO
    const createNewUser= async ()=> {  
        try {
            await api.post("/users", {
                name: userName,
                email: newEmail,
                password: newPassword,
                role: "user",
                })
            
                console.log('Requisição concluida com sucesso')
        } catch (error) {
            console.log('Falha na requisição' + error)
        }
    }
    

    //FUNÇÃO EXECUTADA AO CLICAR NO BOTÃO DE CADASTRO
    const Cadastrar= async ()=>{
        await createNewUser()
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
                <input type="text" value={newEmail} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            {/* LOCAL PARA CRIAR A SENHA */}
            <div className="newPassword">
                <input type="text" value={newPassword} placeholder="Crie uma senha" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            {/* LOCAL PARA CADASTRAR O NOME */}
            <div className="Name">
                <input type="text" value={userName} placeholder="Como devemos chamar você?" onChange={(e)=>setName(e.target.value)}/>
            </div>
            {/* BOTÃO PARA SALVAR A CONTAR */}
            <div>    
                <button className="BtnRegister" onClick={()=> {Cadastrar()} }> CADASTRAR</button> 
            </div>
            {/* LOCAL PARA REGISTRAR UMA NOVA CONTA */}
            <div className="Login">
                <p>Já é um usuário do Spotify? <Link to="/">FAÇA LOGIN</Link> </p>
            </div>

        </div> 
    );
};


export default RegistrationPage