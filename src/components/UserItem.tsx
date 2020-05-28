import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

interface Props {
    id:number;
    name: string;
    job: string;
}

export const UserItem = ({ id, name, job }: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.user} >
                <Typography variant="h4" color="primary" component="h4">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {job}
                </Typography>
            </div>
            <div onClick={() => console.log( id + ' ' + name + ' ' + job)}><DeleteForeverOutlinedIcon color="primary"/></div>
        </div>
    )
}

const useStyles = makeStyles({
    user: {
        padding: '.5rem',
        border: '1px solid #ccc',
        margin: '1rem',
        width: '80%'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});
