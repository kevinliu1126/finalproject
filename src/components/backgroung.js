import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './Button';
import Typography from './Typography';
import ProductHeroLayout from './ProductHeroLayout';
const styles = (theme) => ({
    button: {
        minWidth: 200,
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    },
    fontcolor: {
        color: "#ffffff",
    }
});

function ProductHero(props) {
    const { classes } = props;

    return (
        <section className="main">
            <ProductHeroLayout backgroundClassName={classes.background}>
                <Typography align="center" variant="h2" className={classes.fontcolor} >
                    <b>做好足跡登記</b>
                </Typography>
                <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                    努力做好每一天的防疫，為了每個人的健康!
                </Typography>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    component="a"
                    href="https://finaltest111.herokuapp.com/login"
                    // href="http://localhost:3000/login"
                >
                    登入
                </Button>
                <Typography variant="body2" color="inherit" className={classes.more}>
                    Pretect Everyone
                </Typography>
            </ProductHeroLayout>
        </section>
    );
}

ProductHero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);