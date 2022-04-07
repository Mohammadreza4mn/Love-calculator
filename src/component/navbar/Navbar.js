import React, { useEffect } from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Chip, Avatar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LogOut from '../logOut/LogOut';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import logo from '../../assets/imge/m.m.jpg'
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../../store/action';

const myStyles = makeStyles((theme) => ({
    navbar: {
        top: 0
    },
    chip: {
        direction: 'ltr',
        marginRight: 'auto'
    }
}));

function Navbar(props) {

    const styles = myStyles();

    const dispatch = useDispatch();

    const { status } = useSelector(state => state.notifications);
    const { userData } = useSelector(state => state.localData);

    useEffect(() => {

        dispatch({ type: actionTypes.setAllData, payload: JSON.parse(localStorage.getItem("love-calculator")) })
        dispatch({ type: actionTypes.setStatus, payload: localStorage.getItem("love-calculator_login") })
        dispatch({ type: actionTypes.setUserData, payload: localStorage.getItem("love-calculator_user") })
    }, [])

    return (
        <AppBar position="fixed" className={styles.navbar}>
            <Toolbar>
                {status == "login"
                    ?
                    <Typography>
                        <LogOut />
                        {userData}
                    </Typography>
                    :
                    <IconButton color="inherit" onClick={() => dispatch({ type: actionTypes.setStatus, payload: "username" })} >
                        <AccountCircleIcon />
                    </IconButton>
                }
                <Chip className={styles.chip} component="a" avatar={<Avatar src={logo} />} label="M.M" href="https://github.com/mohammadreza4mn" clickable target="_blank" />
            </Toolbar>
            {(status == "username" || status == "password") && <Login />}
            {status == "signUp" && <SignUp />}
        </AppBar>
    )
}

export default Navbar;