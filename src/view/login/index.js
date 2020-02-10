import React, {useState} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';
import firebase from '../../config/firebase';
import 'firebase/auth';

import {useSelector, useDispatch} from 'react-redux';

function Login(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [msgTipo, setMsgTipo] = useState('');

  const dispatch = useDispatch();



  function logar() {
    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
      setMsgTipo('sucesso');
      setTimeout(() => {
        dispatch({type: 'LOG_IN', usuarioEmail: email});
      }, 2000);
      
    }).catch(erro => {
      setMsgTipo('erro');
    });
    
  }
  

  return(
    <div className="login-content d-flex align-items-center">

    { useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' />: null }

    <form className="form-signin mx-auto">
      <div className="text-center mb-4">
      <i class="far fa-smile-wink fa-5x text-white"></i>
        <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
      </div>
    
      <div classNameName="form-label-group">
        <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" required autofocus />
      </div>
    
      <div className="form-label-group">
        <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" required />
      </div>

      <button onClick={logar} className="btn btn-lg btn-login btn-block" type="button">Logar</button>

      <div className="msg-login text-white text-center my-5">
        {msgTipo==='sucesso' && <span><strong>Wow!</strong> Você está conectado! &#128526;</span>}
        {msgTipo==='erro' && <span><strong>Oops!</strong> Verifique se a senha ou o usuário estão corretos! &#128546;</span>} 
      </div>

      <div className="opcoes-login mt-5">
        <Link to="/usuariorecuperarsenha" className="mx-2">Recuperar Senha</Link>
        <span className="text-white">&#9733;</span>
        <Link to='novousuario' href="#" className="mx-2">Quero Cadastrar</Link>
      </div>
    </form>
    </div> 
  )
}

export default Login;