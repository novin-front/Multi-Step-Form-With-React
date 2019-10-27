import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { useStateData } from '../store/StateManagment';


export default function FormUserDataAccount({ nextComponent }) {

    const [state, dispatch] = useStateData();
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
            margin: '0 auto',
            padding: '30px 0'


        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        dense: {
            marginTop: 19,
        },
        menu: {
            width: 200,
        },
    }));


    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = () => { }
    return (
        <div className="form-user-details makeStyles-container-gird">
            <form className={classes.container} noValidate autoComplete="off">
                <div className="alert-success">
                    <span>Thank you for your registration! </span>
                </div>

            </form>
        </div>
    )
}
