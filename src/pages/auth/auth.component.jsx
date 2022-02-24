import React from 'react';
 import './auth.styles.scss'
import SignIn from '../../components/auth/sign-in/signin.component'
import SignUp from '../../components/auth/sing-up/signup.component'

function AuthPage() {
    return ( 
        <div className='auth'>
            <SignIn />
        </div>
     );
}

export default AuthPage;