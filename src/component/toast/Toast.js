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
    const { snackbar } = useSelector(state => state.notifications);

    const snackbarTransition = (props) => {
        return <Slide {...props} direction="down" />
    };

    return (
        <Snackbar className={styles.snackbarResult} open={Boolean(snackbar.text)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={60000} TransitionComponent={snackbarTransition}
            onClose={() => dispatch({ type: actionTypes.setSnackbar, payload: { text: "", severity: "" } })}>
            <Alert variant="filled" severity={snackbar.severity} onClose={() => dispatch({ type: actionTypes.setSnackbar, payload: { text: "", severity: "" } })}>{snackbar.text}</Alert>
        </Snackbar>
    )
}

export default Toast;
