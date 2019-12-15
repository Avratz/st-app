import React from 'react'

import './login-form.style.scss'

import FormInput from '../form-input/form-input.component'

class LoginForm extends React.Component {
    constructor(){
        super()
        
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({[name]: value}, () => console.log(this.state))
    }

    render() {
        return (
            <form className='login-form' onSubmit={this.handleSubmit}> 
                <FormInput 
                    name="email" 
                    type="email" 
                    label="Email"
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    required />

                <FormInput 
                    name="password" 
                    type="password" 
                    label="Password"
                    value={this.state.password} 
                    handleChange={this.handleChange}  
                    required />

                <button type="submmit">Iniciar sesion</button>
            </form>
        )
    }
}

export default LoginForm