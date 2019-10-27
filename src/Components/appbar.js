import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
export default function FormPersonalDetails() {
    const classes = useStyles();
    return (
        // <div>
        //     {/* <h2>user personal details</h2>
        //     <button onClick={e => nextStep()}>+</button>
        //     <button onClick={e => prevStep()}>-</button>
        //     <button onClick={e => console.log(dataFroms)}>state</button> */}
     
        // </div>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <i class="material-icons">menu</i>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                        </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
