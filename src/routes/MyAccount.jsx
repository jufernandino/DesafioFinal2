import { React, useState, useEffect } from 'react'
import './MyAccount.css';
import axios from 'axios';
import api from '../services/api';
import Navbar from '/components/Navbar';
import ModalEmail from '/components/ModalEmail';
import ModalPassword from '/components/ModalPassword';

import Chip from '@mui/material/Chip';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

//FUNÇÃO PARA A PÁGINA MINHA CONTA
const MyAccount = () => {
  const [email, setEmail] = useState("");
  const [senha, setsenha] = useState("");
  const [name, setName]= useState("")
  const [openModalEmail, setOpenModalEmail] = useState(false)
  const [openModalPass, setOpenModalPass] = useState(false)
  
  async function getUserName() {
    try {
      const response = await api.get('/users/user')
      return response.data.name
    } catch (error) {
      console.log('Falha na requisição do nome')
    }
  }
 
  async function getUserEmail() {
    try {
      const response = await api.get('/users/user')
      return response.data.email
     
    } catch (error) {
      console.log('Falha na requisição do email')
    }
  }

  useEffect(()=>{
    ( async ()=>{
      
      const auxName= await getUserName()
      const auxEmail= await getUserEmail()
      setName(auxName)
      setEmail(auxEmail)

    })()
  }, [])
  
  return (
    //APLICATIVO GERAL
    <div>
      {/*BARRA LATERAL*/}
      <Navbar />
      {/*AREA PRINCIPAL*/}
      <div className='myAccountPage'>
        <h1 className = 'myAccount'>Minha Conta</h1>
        {/* LOCAL QUE APARECE O NOME DO USUÁRIO */}
        <div className="Name">
          <input type="text" value= {name}/> 
          <Chip id="icons" icon={<AccountCircleIcon />} />
        </div>
        {/* LOCAL QUE APARECE O EMAIL DO USUARIO */}
        <div className="Email">
          <input type="text" value={email}/>
          <Chip id="icons" icon={<MailOutlineIcon />} />
        </div>
        {/* BOTÃO PARA TROCAR EMAIL */}
        <div>    
          <button className="BtnEmail" onClick={() =>setOpenModalEmail(true)}> Trocar Email</button> 
        </div>
        <ModalEmail isOpen={openModalEmail} setModalEmailOpen={() => setOpenModalEmail(!openModalEmail)}/>
        {/* BOTÃO PARA TROCAR SENHA */}
        <div>    
          <button className="BtnPassword" onClick={() =>setOpenModalPass(true)}> Trocar Senha</button> 
        </div>
        <ModalPassword isOpen={openModalPass} setModalPassOpen={() => setOpenModalPass(!openModalPass)}/>
      </div> {/*FIM AREA PRINCIPAL*/}
      
      
    </div>
  );
};

export default MyAccount