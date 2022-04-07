import React from 'react';
import { getPercentageAPI, checkIpAPI } from '../api/Api';
import * as actionTypes from './action';

export const percentageAction = (saveResult) => async (dispatch, getState) => {
    try {
        dispatch({ type: actionTypes.setResultCalculator, payload: {} })
        dispatch({ type: actionTypes.setLoading, payload: true })
        const { name } = getState().localData

        const response = await getPercentageAPI(name.fName, name.sName)

        if (response.status == 200) {
            dispatch({ type: actionTypes.setSnackbar, payload: { text: name.fName + " & " + name.sName + " " + response.data.result, severity: "info" } })
            dispatch({ type: actionTypes.setResultCalculator, payload: response.data })
            dispatch({ type: actionTypes.setLoading, payload: false })
            saveResult(response.data)
        }


    } catch (error) {

        dispatch({ type: actionTypes.setSnackbar, payload: { text: error.message, severity: "error" } })
    }
};

export const checkIpAction = () => async (dispatch) => {
    try {
        const { data } = await checkIpAPI()

        if (data.status == "success" && data.country == "Iran") {
            dispatch({ type: actionTypes.setSnackbar, payload: { text: <div class='flex' dir='rtl'>فیلتر شکن شما خاموش است، در این برنامه از api استفاده شده است که ایران را تحریم کرده است، لطفا IP خود را به خارج ایران تغییر دهید</div>, severity: "warning" } })
        }

    } catch (error) {

        dispatch({ type: actionTypes.setSnackbar, payload: { text: error.message, severity: "error" } })
    }
};
