import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { useStateData } from '../store/StateManagment';


const useStyles = makeStyles({
    root: {
        width: '100%',
       
    },
    table: {
        width: '90%',
        padding: '30px',
        margin:' 0px auto',
        borderCollapse:'separate'
    },
});


export default function Confirm() {
    const [state, dispatch] = useStateData();
        const classes = useStyles();
        const [open, setOpen] = React.useState(true);

        const handleClick = () => {
            setOpen(!open);
        };
    return (
        <div className="form-user-details makeStyles-container-gird confirm-div">
           
            <div className={classes.root}>
               

                <Paper className={classes.root}>
                    
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Filde name</TableCell>
                                <TableCell align="right">Data</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    First Name :
                                    </TableCell>
                                <TableCell align="right">{state.formsData.firstName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    Last Name :
                                    </TableCell>
                                <TableCell align="right">{state.formsData.lastName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    bio :
                                    </TableCell>
                                <TableCell align="right">{state.formsData.bio}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                     occupation :
                                    </TableCell>
                                <TableCell align="right">{state.formsData.occupation}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    City :
                                    </TableCell>
                                <TableCell align="right">{state.formsData.city}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    Address :
                                    </TableCell>
                                <TableCell align="right">{state.formsData.address}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    Email :
                                    </TableCell>
                                <TableCell align="right">{state.formsData.email}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    Password :
                                    </TableCell>
                                <TableCell align="right"> **** </TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                    <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid item sm={3}>

                        <Button margin={5} variant="contained" onClick={
                            e => {
                                dispatch({
                                    type: 'NEXT_STEP',
                                })
                            }
                        } color="primary" className={classes.button}>
                            Create Account
                    </Button>
                    </Grid>
                    <Grid item sm={3}>

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

                </Paper>
            </div>
        </div>
    );
}
