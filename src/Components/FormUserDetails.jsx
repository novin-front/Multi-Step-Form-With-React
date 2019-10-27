import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useStateData } from '../store/StateManagment';

export default function FormUserDetails({ nextComponent,func_che}) {
    const [state,dispatch] = useStateData();
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            flexFlow:'column',
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

    return (
        <div className="form-user-details makeStyles-container-gird">
            <form className={classes.container} noValidate autoComplete="off">
                {console.log('this is data', state.formsData)}
                <Grid item xs={12} >
                <TextField
                    id="firstName"
                    label="firstName"
                    
                    className={classes.textField}
                    value={state.formsData.firstName}
                        onChange={e =>{
                            dispatch({
                                type: 'ADD_FILDE',
                                payload :{
                                    key : 'firstName',
                                    value: e.target.value,
                                }
                            })
                        }}
                    margin="normal"
                />
                </Grid>
                <Grid item xs={12} >
                <TextField
                    id="lastName"
                    label="lastName"
                    value={state.formsData.lastName}
                        onChange={e =>{
                            dispatch({
                                type: 'ADD_FILDE',
                                payload :{
                                    key : 'lastName',
                                    value: e.target.value,
                                }
                            })
                        }}
                    className={classes.textField}
                    margin="normal"
                />
                </Grid>
                <Grid item xs={12} >
                <TextField
                    id="bio"
                    label="bio"
                    multiline
                    rowsMax="6"
                    rows="4"
                    value={state.formsData.bio}
                    defaultValue=""
                        onChange={e =>{
                            dispatch({
                                type: 'ADD_FILDE',
                                payload :{
                                    key : 'bio',
                                    value: e.target.value,
                                }
                            })
                        }}
                    className={classes.textField}
                    margin="normal"
                />
                </Grid>
                <Grid item xs={12} >
                    <Button variant="contained" onClick={
                        e => {
                            dispatch({
                                type: 'NEXT_STEP',
                            })
                        }
                    } color="primary" className={classes.button}>
                        continue
                </Button>
                </Grid>
               
                </form>
        </div>
    )
}
