import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import {useStateData} from '../store/StateManagment';


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
                <Grid container spacing={3} justify="center"   alignItems="center">
                    <Grid item xs={12} >
                        <TextField
                            id="email"
                            label="eamil"
                            value={state.formsData.email}
                            onChange={e => {
                                dispatch({
                                    type: 'ADD_FILDE',
                                    payload: {
                                        key: 'email',
                                        value: e.target.value,
                                    }
                                })
                            }}
                            className={classes.textField}
                            type="email"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            id="password"
                            label="Password"
                            value={state.formsData.password}
                            onChange={e => {
                                dispatch({
                                    type: 'ADD_FILDE',
                                    payload: {
                                        key: 'password',
                                        value: e.target.value,
                                    }
                                })
                            }}
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />
                    </Grid>

                    <Grid item xs={12} >
                        <TextField
                            id="repeatPassword"
                            label="repeatPassword"
                            value={state.formsData.repeatPassword}
                            onChange={e => {
                                dispatch({
                                    type: 'ADD_FILDE',
                                    payload: {
                                        key: 'repeatPassword',
                                        value: e.target.value,
                                    }
                                })
                            }}
                            className={classes.textField}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                        />
                    </Grid>

                    <Grid item  sm={3}>

                        <Button margin={5} variant="contained" onClick={
                            e => {
                                dispatch({
                                    type: 'NEXT_STEP',
                                })
                            }
                        } color="primary" className={classes.button}>
                            continue
                    </Button>
                    </Grid>
                    <Grid item  sm={3}>

                        <Button margin={5} variant="contained" onClick={
                            e => {
                                dispatch({
                                    type: 'PREV_STEP',
                                })
                            }
                        } color="primary" className={classes.button}>
                            back
                    </Button>
                    </Grid>

                </Grid>

            </form>
        </div>
    )
}
