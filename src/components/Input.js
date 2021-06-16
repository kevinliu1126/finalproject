import React from 'react';
import TextField from '@material-ui/core/TextField';
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
        color: 'yellow',
        fontSize: '19px',
    },
})(Link)

export default function Input(props) {
    const { handleLogout, user } = props;
    return (
        <div>
            {user ? (
                <section className='input'>
                    <nav>
                        <h2>Welcome</h2>
                        <button onClick={handleLogout}>Logout</button>
                    </nav>
                    <div className='inputContainer'>
                        <h1>WHERE YOU BEEN</h1>
                        <label>City</label>
                        <input
                            type="text"
                            autoFocus
                            required
                        />
                        <label>Dist</label>
                        <input
                            type="text"
                            required
                        />
                        <label>Place name</label>
                        <input
                            type="text"
                            required
                        />
                        <label>Date time</label>
                        <input
                            type="datetime-local"
                            required
                        />
                        <br/>
                        <button>
                            Submit
                        </button>
                    </div>
                </section>
                
            ):(
                <section className='change'>
                    <div className='changeToLogin'>
                        <ColorLink href="/login" variant="body2">
                            {"Please log in"}
                        </ColorLink>
                    </div>
                </section>     
            )}
        </div>
        
    );
}