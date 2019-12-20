import React from 'react'

import './login.styles.scss'

import LoginForm from '../../components/login/login-form.component'

export default function LoginPage() {
    return(
        <div className='login-page'>
            <h2 className='st-h2'>Inicia sesion</h2>
            <LoginForm />
        </div>
    )
}