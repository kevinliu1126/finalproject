import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { withStyles } from "@material-ui/core/styles";
import { db } from '../fire';

const WelcomeLink = withStyles({
    root: {
      color: 'white',
      fontWeight:'bolder',
      fontSize: '30px'
    },
  })(Link)
  
const ColorLink = withStyles({
    root: {
        color: 'yellow',
        fontSize: '19px',
    },
})(Link)

export default function Input(props) {
    const [City, setCity] = useState("");
    const [Dist, setDist] = useState("");
    const [Place_name, setPlace_name] = useState("");
    const [Date_time, setDate_time] = useState("");
    const [DataError, setDataError] = useState("");
    const handleSubmit = () => {
        setDataError("");
        if (City && Dist && Date_time && Place_name) {
            db.collection("place").add({
            City: City,
            Dist: Dist,
            Date_time: Date_time,
            Place_name: Place_name,
            user: user.email,
            })
            
            setCity("");
            setDist("");
            setPlace_name("");
            setDate_time("");
            alert("Adding successfully")
        } else {
            setDataError("Please enter your information");
        }
        
    }
    const { handleLogout, user } = props;
    return (
        <div>
            {console.log(user)}
            {user ? (
                <section className='input'>
                    <nav>
                        <WelcomeLink href="/choose" variant="body2">Welcome</WelcomeLink>
                        <button onClick={handleLogout}>Logout</button>
                    </nav>
                    <div className='inputContainer'>
                        <h1>WHERE YOU BEEN</h1>
                        <label>City</label>
                        <input
                            type="text"
                            value={City}
                            onChange={(e) => setCity(e.target.value)}
                            autoFocus
                            required="required"
                        />
                        <label>Dist</label>
                        <input
                            type="text"
                            value={Dist}
                            onChange={(e) => setDist(e.target.value)}
                            required
                        />
                        <label>Place name</label>
                        <input
                            type="text"
                            value={Place_name}
                            onChange={(e) => setPlace_name(e.target.value)}
                            required
                        />
                        <label>Date time</label>
                        <input
                            type="datetime-local"
                            value={Date_time}
                            onChange={(e) => setDate_time(e.target.value)}
                            required
                        />
                        <br/>
                        <button onClick={handleSubmit}>
                            Submit
                        </button>
                        <p className="errorMsg">{DataError}</p>
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