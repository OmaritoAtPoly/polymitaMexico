import { Field, Form, Formik } from 'formik';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField, Typography } from '@material-ui/core';

export type UserInput = {
    name: string;
    job: string;
}

const initialValues = {
    name: '',
    job: ''
}

interface Props {
    loading: boolean;
    error: any;
    handleSubmit: (userInput: UserInput) => void
}

export const AddUserForm = ({ loading, error, handleSubmit }: Props) => {
    const classes = useStyles()
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                handleSubmit(values)
            }}
        >
            {({ handleChange, handleBlur, values }) => (
                <Form className={classes.container} >

                    <Typography className={classes.title} variant="h4" gutterBottom>
                        Create User
                    </Typography>
                    <div className={classes.form_group} >
                        <TextField
                            className={classes.input}
                            variant='outlined'
                            size='small'
                            label="Name"
                            onChange={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                    </div>
                    <div className={classes.form_group} >
                        <TextField
                            className={classes.input}
                            variant='outlined'
                            size='small'
                            label="job"
                            onChange={handleChange('job')}
                            onBlur={handleBlur('job')}
                            value={values.job}
                        />
                    </div>
                    <div className={classes.submit}  >
                        <Button disabled={loading} type='submit' variant="contained" size='small' color="primary">
                            Create
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        maxWidth: '25%',
        margin: '5rem auto'
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
    },
    form_group: {
        display: 'flex',
        justifyContent: 'center',
        width: 'inherit',
        margin: '.5rem'
    },
    submit: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: 'inherit',
        margin: '.5rem'
    }
});