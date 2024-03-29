import React, { useState } from 'react';
import './Login.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

//componentes
import Input from '../../components/Input/Input';
import Button from '../../components/buttons/Button';

const Login = () => {

    const user = [{
        'email': 'yeisondiseno@gmail.com',
        'password': '123456'
    }];

    /// navegar
    let history = useHistory();

    //datos de login
    const [ dataLogin, setDataLogin ] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = e => {
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value
        })
    }

    // envio de formulario
    const handleSubmit = e => {
        e.preventDefault();
        if( dataLogin.email === user[0].email && dataLogin.password === user[0].password ) {
            console.log('Email correcto')
            history.push('/video');
        } else {
            console.log('Email incorrecto')
        }
    }

    return(
    
        <div className="login">
            <div className="login__content">
                <div className="login__head">
                    <span className="logo">
                        <i class="material-icons">play_arrow</i>
                        <h1>
                            Academo
                        </h1>
                    </span>
                </div>
                <div className="login__form">
                    <form onSubmit={(e) => handleSubmit(e)} >
                        <Input 
                            title="Correo"
                            type="email" 
                            name="email"
                            value={dataLogin.email}
                            id="email"
                            on={handleInputChange}
                        />
                        <Input 
                            title="Contraseña"
                            type="password" 
                            name="password" 
                            id="password"
                            value={dataLogin.password}
                            on={handleInputChange}
                        />
                        <Button btn clase="center" type="submit" iconL="send" title="Enviar" />
                    </form>
                </div>
            </div>
        </div>
        
    ); 
}

export default Login;