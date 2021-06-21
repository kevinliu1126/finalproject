import React from "react";
import { db } from '../fire';
import { useState } from "react";
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
const WelcomeLink = withStyles({
    root: {
        color: 'white',
        fontWeight: 'bolder',
        fontSize: '30px'
    },
})(Link)
const ColorLink = withStyles({
    root: {
        color: 'yellow',
        fontSize: '19px',
    },
})(Link)
export default function Selectpage(props) {
    const [Cities, setCitys] = useState([]);
    function getCity() {
        const { user } = props;
        db.collection('place').where('user', '==', user.email).onSnapshot(function (querySnapshot) {
            setCitys(
                querySnapshot.docs.map((doc) => ({
                    User: doc.data.user,
                    City: doc.data().City,
                    Shop: doc.data().Place_name,
                    Dist: doc.data().Dist,
                    Date_time: doc.data().Date_time,
                }))
            )
        })
    }
    const { handleLogout, user } = props;
    return (
        <div>
            {user ? (
                <section className={"show"}>
                    {getCity()}
                    <nav>
                        <WelcomeLink href="/choose" variant="body2">Welcome</WelcomeLink>
                        <button onClick={handleLogout}>Logout</button>
                    </nav>
                    <div>
                        <FormControl className={"showContainer"}>
                            <h1>你曾經去過的地方</h1>
                            {Cities.map((place) => (
                                <h2> {place.City} {place.Dist} {place.Shop} {place.Date_time} </h2>
                            ))}
                        </FormControl>
                    </div>
                </section>) : (
                <section className='change'>
                    <div className='changeToLogin'>
                        <ColorLink href="/login" variant="body2">
                            {"Please log in"}
                        </ColorLink>
                    </div>
                </section>
            )}
        </div>
    )
}
