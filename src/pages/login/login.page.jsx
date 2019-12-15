import React from 'react'

import './login.styles.scss'

import LoginForm from '../../components/login/login-form.component'

export default function LoginPage() {
    return(
        <div className='login-page'>
            <h1>Inicia sesion</h1>
            <LoginForm />
        </div>
    )
}