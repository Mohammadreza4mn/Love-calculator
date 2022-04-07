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

function SignUp(props) {

    const styles = myStyles();
    const theme = useTheme();

    const dispatch = useDispatch();
    const { allData, signUp } = useSelector(state => state.localData);
    const { validatesignUp } = useSelector(state => state.notifications);

    const handlerSignUp = (event) => {

        event.preventDefault()
        dispatch({ type: actionTypes.setValidatesignUp, payload: true })

        if (Object.values(signUp).every(value => value.trim())) {

            let flagDatabase = allData && allData.find((item) => item.username === signUp.username)

            if (!flagDatabase) {

                if (signUp.password === signUp.rePassword) {

                    let flagAllData = allData || []
                    flagAllData.push({ username: signUp.username, password: signUp.password })

                    localStorage.setItem("love-calculator", JSON.stringify(flagAllData))
                    localStorage.setItem("love-calculator_user", signUp.username)
                    localStorage.setItem("love-calculator_login", "login")

                    window.location.reload()
                } else {
                    dispatch({ type: actionTypes.setSnackbar, payload: { text: "تکرار رمز عبور یکسان نیست", severity: "warning" } })
                }
            } else {
                dispatch({ type: actionTypes.setSnackbar, payload: { text: "نام کاربری قبلا در سیستم ثبت شده است", severity: "error" } })
            }
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
                    <Grid component="form" container justify="center" autoComplete="off" noValidate onSubmit={handlerSignUp} spacing={1}>
                        <Grid item xs={12} className={styles.input}>
                            <TextField fullWidth autoFocus label="نام کاربری" error={!signUp.username.trim() && validatesignUp && true} variant="filled" onChange={(event) => dispatch({ type: actionTypes.setSignUp, payload: { ...signUp, username: event.target.value } })} />
                        </Grid>
                        <Grid item xs={12} className={styles.input}>
                            <TextField type="password" fullWidth label="پسورد" error={!signUp.password.trim() && validatesignUp && true} variant="filled" onChange={(event) => dispatch({ type: actionTypes.setSignUp, payload: { ...signUp, password: event.target.value } })} />
                        </Grid>
                        <Grid item xs={12} className={styles.input}>
                            <TextField type="password" fullWidth label="تکرار پسورد" error={!signUp.rePassword.trim() && validatesignUp && true} variant="filled" onChange={(event) => dispatch({ type: actionTypes.setSignUp, payload: { ...signUp, rePassword: event.target.value } })} />
                        </Grid>
                        <Grid item xs={12} className={styles.input}>
                            <Button fullWidth size="large" variant="outlined" type="submit">
                                ثبت نام
                            </Button >
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default SignUp;