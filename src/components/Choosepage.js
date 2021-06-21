import React from 'react';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import WhiteTextTypography from './WhiteTextTypography';
import DAddLocationIcon from './DAddLocationIcon';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.light,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const ColorLink = withStyles({
    root: {
        color: 'yellow',
        fontSize: '19px',
    },
})(Link)
export default function Choose(props) {
    const classes = useStyles();
    const { user } = props;
    return (
        <div>
            <section className='choose'>
                {user ? (
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <DAddLocationIcon />
                            </Avatar>
                            <WhiteTextTypography component="h1" variant="h5">
                                Where You Been
                            </WhiteTextTypography>

                            <form className={classes.form} noValidate>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    href="/input"
                                >
                                    輸入足跡
                                </Button>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    href="/show"
                                >
                                    顯示足跡
                                </Button>
                            </form>
                        </div>
                    </Container>
                ) : (
                    <section className='change'>
                        <div className='changeToLogin'>
                            <ColorLink href="/login" variant="body2">
                                {"Please log in"}
                            </ColorLink>
                        </div>
                    </section>
                )}
            </section>
        </div>
    );
}