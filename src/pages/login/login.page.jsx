import React from 'react'

import './login.styles.scss'

import LoginForm from '../../components/login/login-form.component'

import { Layout as Content } from 'antd'

export default function LoginPage() {
    return(
        <Content className='login-page py-2'>
            <h2 className='st-h2 text-center'>Inicia sesion</h2>
            <LoginForm />
        </Content>
    )
}