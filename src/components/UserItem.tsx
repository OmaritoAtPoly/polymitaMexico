import React from 'react';
import { makeStyles } from '@material-ui/styles';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


interface Props {

    name: string;
    job: string;
    id: number;
    onDelete: (id: number) => void;
}

export const UserItem = ({ name, job, id, onDelete }: Props) => {
    const classes = useStyles()

    const handleDelete = () => {
        onDelete(id)
    }

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
            <IconButton color="primary" component="span" onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

const useStyles = makeStyles({
    user: {
        display: 'flex',
        justifyContent: 'space-between',
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
