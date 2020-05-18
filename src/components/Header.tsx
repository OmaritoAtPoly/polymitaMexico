import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { userLogOut } from '../services/Auth';

export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Nemesis
                </Typography>
                <NavLink to="/login" className={classes.logout}onClick={() => userLogOut()} >
                    <span onClick={() => userLogOut()}>Logout</span>
                </NavLink>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        link: {
            textDecoration: 'none',
            color: 'inherit'
        },
        title: {
            flexGrow: 1,
        },
        logout:{
            textDecoration: 'none',
            color: 'inherit',
            paddingLeft:20,
        }
    }),
);

