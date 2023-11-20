import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import './Registration.css'
import axios from "axios";
import api from "../services/api";
import Alert from "@mui/material/Alert";

//FUNÇÃO PARA PAGINA DE REGISTRO DE CONTA
const RegistrationPage = () => {
    const [newEmail, setEmail]= useState('')
    const [newPassword, setPassword] = useState('')
    const [userName, setName] = useState('')
    const [error, setError] = useState("");
    const [success, setSucess] = useState("");
    
    //FUNÇÃO COM A REQUISIÇÃO DE CRIAÇÃO DE NOVO USUÁRIO
    const createNewUser= async ()=> {  
        try {
            await api.post("/users", {
                name: userName,
                email: newEmail,
                password: newPassword,
                role: "user",
                })
            
                console.log('Novo usuário criado');
                setError("");//Zerar a mensagem de erro
                setSucess ('Usuário criado');
        } catch (error) {
            console.log('Falha na criação do novo usuário ' + error);
            console.log(error.response.data);
            setError(error.response.data);
        }
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
                <button className="BtnRegister" onClick={createNewUser}> CADASTRAR</button> 
            </div>
            {/* LOCAL PARA REGISTRAR UMA NOVA CONTA */}
            <div className="Login">
                <p>Já é um usuário do Spotify? <Link to="/">FAÇA LOGIN</Link> </p>
            </div>
            {/* AVISO DE ERRO E DE SUCESSO*/}
            {error ? <Alert variant="filled" severity="error">{error}</Alert> : <div /> }
            {success? <Alert variant="filled" severity="success">{success}</Alert> : <div />}

        </div> 
    );
};


export default RegistrationPage