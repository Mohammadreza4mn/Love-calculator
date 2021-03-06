import React from 'react';
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function LogOut(props) {

    const handlerLogOut = () => {
        localStorage.setItem("love-calculator_login", "logout")
        localStorage.setItem("love-calculator_user", null)
        window.location.reload()
    };

    return (
        <IconButton color="inherit" onClick={handlerLogOut} >
            <ExitToAppIcon />
        </IconButton>
    )
}

export default LogOut;