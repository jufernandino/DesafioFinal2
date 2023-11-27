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

    const [newEmail, setNewEmail] = useState("");

    const getUser= async()=>{
        try {
          const response= await api.get('/users/user')
          return response.data.id
        } catch (error) {
          console.log('Erro na requisição de id ' + error)
        }
    }
    
    async function updateEmail(user_id) {
      try {
        await api.put(`/users/:${user_id}`,
        {
            email: newEmail, 
            role: "user",
        }) 
        console.log('Email alterado')
        return setModalEmailOpen;
      } catch (error) {
        console.log('Falha na requisição do novo email')
      }
    }
    useEffect( ()=>{
        ( async()=>{
          const auxUser= await getUser()
          const auxEmail= await updateEmail(auxUser.id)
          setNewEmail(auxEmail)
        })()
      },[])

    if(isOpen){
        return (
            <div style = {BG_STYLE}>
                <div style = {MODAL_EMAIL_STYLE}>
                    <div className='Modal-Email'>
                        <h1 id="NewEmail">Novo E-mail</h1>
                        {/* LOCAL PARA MUDAR O EMAIL */}
                        <div className="email">
                            <input type="text" placeholder="Email" value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}/>
                            <Chip id="icons" icon={<MailOutlineIcon />} />
                        </div>
                        {/* LOCAL PARA BOTÕES DE CANCELAR E CONFIRMAR */}
                        <div>
                            <button className='Cancel' onClick = {setModalEmailOpen} >Cancelar</button>
                            <button className='Confirm' onClick = {updateEmail(getUser)} >Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return null;
};

export default ModalEmail