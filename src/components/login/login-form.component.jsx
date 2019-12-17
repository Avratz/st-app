import React from 'react'

import './login-form.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

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

                <CustomButton type="submmit">Iniciar sesion</CustomButton>
            </form>
        )
    }
}

export default LoginForm