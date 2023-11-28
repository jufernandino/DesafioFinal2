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

    const [userId, setUserId]= useState("");
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword]= useState("")
    const [newPasswordConfirm, setNewPasswordConfirm]= useState("")
    const [visiblePasswordMessage, setVisiblePasswordMessage]= useState(false)
    
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
                password: newPassword
            }) 
            setVisiblePasswordMessage(true)
            const message= document.querySelector("div#password-message")
            message.innerText= 'Senha alterada.'
            message.style.color= '#3FE168'
            console.log('Senha alterado para ' + newPassword)
        } catch (error) {
          console.log('Falha na requisição do nova senha')
        }
    }

    async function Confirm(){
        if(newPassword == newPasswordConfirm){
            await updateEmail(userId)
            setTimeout(() => {
                setModalPassOpen()
            }, 1000);
        }else{
            setVisiblePasswordMessage(true)
            const message= document.querySelector("div#password-message")
            message.innerText= 'Confirme a nova senha corretamente!'
            message.style.color= '#E42D2D'
        }
    }
  
    useEffect( ()=>{
        ( async()=>{
            setVisiblePasswordMessage(false)
            const auxUser= await getUser()
            setUserId(auxUser.id)
        })()
    },[])

    if(isOpen){
        return (
            <div style = {BG_STYLE}>
                <div style = {MODAL_PASSWORD_STYLE}>
                    <div className='Modal-Password'>
                        <h1 id="NewPassword">Novo Senha</h1>
                        {/* LOCAL SENHA ATUAL */}
                        <div className="password">
                            <input type="text" placeholder="Senha atual" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <Chip id="icons" icon={<HttpsIcon />} />
                        </div>
                        {/* LOCAL PARA CRIAR A SENHA */}
                        <div className="newPassword">
                            <input type="text" placeholder="Nova senha" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
                            <Chip id="icons" icon={<HttpsIcon />} />
                        </div>  
                        {/* LOCAL PARA CRIAR A SENHA */}
                        <div className="newPasswordConfirm">
                            <input type="text" placeholder="Confirmar nova senha" value={newPasswordConfirm} onChange={(e)=>setNewPasswordConfirm(e.target.value)} />
                            <Chip id="icons" icon={<HttpsIcon />} />
                        </div>  
                        {/* LOCAL PARA BOTÕES DE CANCELAR E CONFIRMAR */}
                        <div>
                            <button className='Cancel' onClick = {setModalPassOpen}>Cancelar</button>
                            <button className='Confirm' onClick={Confirm}>Confirmar</button>
                        </div>
                        { visiblePasswordMessage &&  <div id='password-message'></div>}
                    </div>
                </div>
            </div>
        );
    };
    return null;
};

export default ModalPassword