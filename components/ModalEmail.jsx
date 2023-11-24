import { React, useState, useEffect } from 'react'
import './ModalEmail.css';
import axios from 'axios';
import api from '../src/services/api';

import Chip from '@mui/material/Chip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const BG_STYLE = { //Estilo do background
    position:'fixed',
    top:'0',
    bottom:'0',
    left:'0',
    right:'0',
    backgroundColor:'rgb(0,0,0,0.4)',
    zIndex:'1000',
} 
const MODAL_EMAIL_STYLE = { //Estilo da Janela
    position:'fixed',
    top:'50%',
    height:'261.26px',
    left:'50%',
    width:'506.19px',
    transform:'translate(-50%, -50%)',
    backgroundColor:'#000000',
    borderRadius:'10px',
    zIndex:'1000',
} 

const ModalEmail = ({isOpen, setModalEmailOpen}) => {

    const [email, setEmail] = useState("");

    if(isOpen){
        return (
            <div style = {BG_STYLE}>
                <div style = {MODAL_EMAIL_STYLE}>
                    <div className='Modal-Email'>
                        <h1 id="NewEmail">Novo E-mail</h1>
                        {/* LOCAL PARA MUDAR O EMAIL */}
                        <div className="email">
                            <input type="text" placeholder="Email" value={email}/>
                            <Chip id="icons" icon={<MailOutlineIcon />} />
                        </div>
                        {/* LOCAL PARA BOTÕES DE CANCELAR E CONFIRMAR */}
                        <div>
                            <button className='Cancel' onClick = {setModalEmailOpen}>Cancelar</button>
                            <button className='Confirm'>Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return null;
};

export default ModalEmail