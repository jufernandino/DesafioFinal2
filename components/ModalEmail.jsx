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
    height:'281.26px',
    left:'50%',
    width:'506.19px',
    transform:'translate(-50%, -50%)',
    backgroundColor:'#000000',
    borderRadius:'10px',
    zIndex:'1000',
} 

const ModalEmail = ({isOpen, setModalEmailOpen}) => {

    const [newEmail, setNewEmail] = useState("");
    const [userId, setUserId]= useState("");
    const [visibleEmailMessage, setVisibleEmailMessage]= useState(false)

    const getUser= async()=>{
        try {
          const response= await api.get('/users/user')
          return response.data
        } catch (error) {
          console.log('Erro na requisição de id ' + error)
        }
    }
    
    async function updateEmail(user_id) {
      try {
        await api.put(`/users/${user_id}`,
        {
            email: newEmail
        }) 
        setVisibleEmailMessage(true)
        const message= document.querySelector("div#email-message")
        message.innerText= 'Email alterado.'
        message.style.color= '#3FE168'
        console.log('Email alterado para ' + newEmail)

      } catch (error) {
        const message= document.querySelector("div#email-message")
        message.innerText= 'Email alterado não alterado.'
        message.style.color= '#E42D2D'
        console.log('Falha na requisição do novo email')
      }
    }

    async function Confirm(){
      await updateEmail(userId)
      setTimeout(() => {
        setModalEmailOpen()
      }, 2000);
    }

    useEffect( ()=>{
        ( async()=>{
          setVisibleEmailMessage(false)
          const auxUser= await getUser()
          setUserId(auxUser.id)
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
                            <button className='Confirm' onClick = {Confirm} >Confirmar</button>
                        </div>
                        {visibleEmailMessage && <div id='email-message'></div>}
                    </div>
                </div>
            </div>
        );
    };
    return null;
};

export default ModalEmail

//erros
// id, retornando response.data.id e tentando pegar o auxUser.id no useeffect, tentando chamar getUser dentro de onclique