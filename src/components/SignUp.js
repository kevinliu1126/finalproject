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

function Copyright() {
  return (
    <WhiteTextTypography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <ColorLink href="http://localhost:3000/">
        Your Website
      </ColorLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </WhiteTextTypography>
  );
}
  
const ColorLink = withStyles({
  root: {
    color: 'yellow'
  },
})(Link)

const SignUp = (props) => {
  const { email, setEmail, password, setPassword, handleSignup, emailError, passwordError, user } = props;
  return (
    <div>
      {user?(
        window.location.replace("https://finaltest111.herokuapp.com/input")
        // window.location.replace("http://localhost:3000/input")
      ):(
        <section className="signup">
          <div className="signupContainer">
            <h1>SIGN UP</h1>
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
            <ColorLink href="/login" variant="body2" color="white">
              Already have an account? Sign in
            </ColorLink>
            <br/>
            <button onClick={handleSignup}>
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
export default SignUp;