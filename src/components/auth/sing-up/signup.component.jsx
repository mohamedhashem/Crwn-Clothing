import React from 'react';
import './signup.styles.scss'
import FormInput from '../../form-input/form-input.component';
import CustomButton from '../../custom-button/custom-button.component';
import {auth,createUserProfileDoc} from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword ){
            alert("Password don't Match")
            return;
        }
        try {
            const {user} = await createUserWithEmailAndPassword(auth,email,password);
            createUserProfileDoc(user, {displayName})

            
        } catch (error) {
            console.log(error)
        }
    }

    handelChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2>I don't Have an Account</h2>
                <span>sign Up with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        handleChange={this.handelChange}
                        value={displayName}
                        label='Name'
                        required />
                    <FormInput
                        name='email'
                        type='text'
                        handleChange={this.handelChange}
                        value={email}
                        label='Email'
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handelChange}
                        value={password}
                        label='Password'
                        required />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        handleChange={this.handelChange}
                        value={confirmPassword}
                        label='Confirm Passsword'
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