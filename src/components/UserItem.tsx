import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles';

interface Props {
    name: string;
    job: string;
}

export const UserItem = ({ name, job }: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.user} >
            <Typography variant="h4" color="primary" component="h4">
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {job}
            </Typography>
        </div>
    )
}

const useStyles = makeStyles({
    user: {
        padding: '.5rem',
        border: '1px solid #ccc',
        margin: '1rem'
    }
});
