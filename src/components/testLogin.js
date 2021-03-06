import React from 'react';

const LoginTest = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    autoFocus
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <button onClick={handleLogin}>
                    signup
                </button>
            </div>
        </section>
    )
}
export default LoginTest;