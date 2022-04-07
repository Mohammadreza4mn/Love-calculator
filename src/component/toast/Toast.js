import React from 'react';
import { makeStyles, Snackbar, Slide } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../store/action';

const myStyles = makeStyles((theme) => ({
    snackbarResult: {
        direction: 'ltr',
        [theme.breakpoints.down('xs')]: {
            top: '60px'
        }
    }
}));

function Toast(props) {

    const styles = myStyles();

    const dispatch = useDispatch();
    const { snackbar, callApiFailed } = useSelector(state => state);

    const snackbarTransition = (props) => {
        return <Slide {...props} direction="down" />
    };

    return (
        <Snackbar className={styles.snackbarResult} open={snackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={60000} TransitionComponent={snackbarTransition}
            onClose={() => dispatch({ type: actionTypes.setSnackbar, payload: null })}>
            <Alert variant="filled" severity={callApiFailed ? "error" : "info"} onClose={() => dispatch({ type: actionTypes.setSnackbar, payload: null })}>{snackbar}</Alert>
        </Snackbar>
    )
}

export default Toast;
