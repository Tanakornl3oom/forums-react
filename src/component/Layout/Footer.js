import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Footer() {
    const useStyles = makeStyles(theme => ({
        footer: {
            position: 'absolute',
            bottom: '0',
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(6),
            width: '100%'
        }
    }));

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
                component="p"
            >
                Something here to give the footer a purpose!
            </Typography>
            <Copyright />
        </footer>
    );
}

export default Footer;
