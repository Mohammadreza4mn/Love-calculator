import React from 'react';
import { Grid, makeStyles, Box, TextField, Button, IconButton, Dialog, DialogTitle, useMediaQuery, DialogContent, useTheme } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../store/action';

const myStyles = makeStyles((theme) => ({
    input: {
        display: 'flex',
        justifyContent: 'center'
    },
    dialog_form: {
        overflowX: 'hidden',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
}));

function Login(props) {

    const styles = myStyles();
    const theme = useTheme();

    const dispatch = useDispatch();
    const allData = useSelector(state => state.allData);
    const userAccount = useSelector(state => state.userAccount);
    const status = useSelector(state => state.status);

    const handlerLogin = (event) => {
        event.preventDefault()

        if (allData) {
            let flagDatabase = allData.find((item) => item.username === event.target[0].value)

            if (flagDatabase) {

                dispatch({ type: actionTypes.setUserAccount, payload: flagDatabase })
                dispatch({ type: actionTypes.setStatus, payload: "password" })
            } else {
                dispatch({ type: actionTypes.setStatus, payload: "signUp" })
            }

        } else {
            dispatch({ type: actionTypes.setStatus, payload: "signUp" })
        }
    };

    const handlerPassword = (event) => {

        event.preventDefault()

        if (userAccount.password === event.target[0].value) {

            localStorage.setItem("love-calculator_login", "login")
            localStorage.setItem("love-calculator_user", userAccount.username)
            window.location.reload();
        } else {
            dispatch({ type: actionTypes.setSnackbar, payload: "رمز کاربری نادرست است" })
        }
    };

    return (
        <Dialog fullWidth={true} fullScreen={useMediaQuery(theme.breakpoints.down('xs'))} open={true} onClose={() => dispatch({ type: actionTypes.setStatus, payload: "" })} >
            <DialogTitle>
                <IconButton onClick={() => dispatch({ type: actionTypes.setStatus, payload: "" })}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={styles.dialog_form}>
                <Box mb={3}>
                    <Grid component="form" autoComplete="off" container justify="center" noValidate onSubmit={status == "password" ? handlerPassword : handlerLogin} spacing={1} >
                        {status == "password"
                            ?
                            <Grid item xs={12} className={styles.input}>
                                <TextField type="password" fullWidth autoFocus label="پسورد" variant="filled" />
                            </Grid>
                            :
                            <Grid item xs={12} className={styles.input}>
                                <TextField fullWidth label="نام کاربری" variant="filled" />
                            </Grid>
                        }
                        <Grid item xs={12} className={styles.input}>
                            <Button fullWidth size="large" variant="outlined" type="submit">
                                {status == "password" ? "ورود" : "ثبت نام / ورود"}
                            </Button >
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;