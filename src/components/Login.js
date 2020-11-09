import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

import './Login.css';

function Login() {
    const signIn = () => {
        // google login method
        auth.signInWithPopup(provider)
            .catch(err => alert(err.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png" alt="Discord logo"/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
};

export default Login;
