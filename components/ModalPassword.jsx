import { React, useState, useEffect } from 'react'
import './ModalPassword.css';
import axios from 'axios';
import api from '../src/services/api';

import Chip from '@mui/material/Chip';
import HttpsIcon from '@mui/icons-material/Https';


const BG_STYLE = { //Estilo do background
    position:'fixed',
    top:'0',
    bottom:'0',
    left:'0',
    right:'0',
    backgroundColor:'rgb(0,0,0,0.4)',
    zIndex:'1000',
} 
const MODAL_PASSWORD_STYLE = { //Estilo da Janela
    position:'fixed',
    top:'50%',
    height:'453px',
    left:'50%',
    width:'506.19px',
    transform:'translate(-50%, -50%)',
    backgroundColor:'#000000',
    borderRadius:'10px',
    zIndex:'1000',
} 

const ModalPassword = ({isOpen, setModalPassOpen}) => {

    const [password, setPassword] = useState("");

    if(isOpen){
        return (
            <div style = {BG_STYLE}>
                <div style = {MODAL_PASSWORD_STYLE}>
                    <div className='Modal-Password'>
                        <h1 id="NewPassword">Novo Senha</h1>
                        {/* LOCAL SENHA ATUAL */}
                        <div className="password">
                            <input type="text" placeholder="Senha" value={password}/>
                            <Chip id="icons" icon={<HttpsIcon />} />
                        </div>
                        {/* LOCAL PARA CRIAR A SENHA */}
                        <div className="newPassword">
                            <input type="text" placeholder="Senha" value={password} />
                            <Chip id="icons" icon={<HttpsIcon />} />
                        </div>  
                        {/* LOCAL PARA CRIAR A SENHA */}
                        <div className="newPasswordConfirm">
                            <input type="text" placeholder="Senha" value={password} />
                            <Chip id="icons" icon={<HttpsIcon />} />
                        </div>  
                        {/* LOCAL PARA BOTÕES DE CANCELAR E CONFIRMAR */}
                        <div>
                            <button className='Cancel' onClick = {setModalPassOpen}>Cancelar</button>
                            <button className='Confirm'>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return null;
};

export default ModalPassword