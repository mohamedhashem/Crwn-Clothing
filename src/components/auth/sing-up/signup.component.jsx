import React from 'react';
import './signup.styles.scss'
import FormInput from '../../form-input/form-input.component';
import CustomButton from '../../custom-button/custom-button.component';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        phone: '',
        name: ''
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    handelChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-up'>
                <h2>I don't Have an Account</h2>
                <span>sign Up with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='name'
                        type='name'
                        handleChange={this.handelChange}
                        value={this.state.name}
                        label='Name'
                        required />
                    <FormInput
                        name='phone'
                        type='phone'
                        handleChange={this.handelChange}
                        value={this.state.phone}
                        label='Phone No.'
                        required />
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handelChange}
                        value={this.state.email}
                        label='Email'
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handelChange}
                        value={this.state.password}
                        label='Password'
                        required />
                    <CustomButton type='submit'>
                        Sign Up
                    </ CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;