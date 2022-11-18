import React from 'react'
import { signInWithGoogle } from "../services/firebase"

function Login() {
    return (
        <div>
            <button onClick={signInWithGoogle}>
                Sign in with google
            </button>
        </div>
    )
}

export default Login
