import React from 'react';
import './signin.styles.scss'
import FormInput from '../../form-input/form-input.component';
import CustomButton from '../../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase';


class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
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
            <div className='sign-in'>
                <h2>I already Have an Account</h2>
                <span>sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
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
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign In
                        </ CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            {' '} Sign In with Google {' '}
                        </ CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;