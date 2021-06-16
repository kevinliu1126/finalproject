import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "white"
  }
})(Typography);

const ColorLink = withStyles({
  root: {
    color: 'yellow'
  },
})(Link)

function Copyright() {
  return (
    <WhiteTextTypography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <ColorLink color="red" href="http://localhost:3000/">
        Your Website
      </ColorLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </WhiteTextTypography>
  );
}

const SignIn = (props) => {
  const { email, setEmail, password, setPassword, handleLogin, emailError, passwordError, user } = props;
  return (
  <div>
    {
      user?(
        window.location.replace("https://finaltest111.herokuapp.com/input")
        // window.location.replace("http://localhost:3000/input")
      ): (
          <section className="login">
              <nav>
                <h2>Welcome</h2>
                <button >back to homepage</button>
              </nav>
          <div className="loginContainer">
            <h1>LOGIN</h1>
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
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <br/>
            <ColorLink href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </ColorLink>
            <br/>
            <button onClick={handleLogin}>
                signup
            </button>
            <Box mt={5}>
             <Copyright />
           </Box>
          </div>
        </section>
      )}
  </div>
    
  );
}
export default SignIn;