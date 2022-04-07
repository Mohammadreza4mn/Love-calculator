import * as actionTypes from './action';

export const inistialState = {
    name: {
        sName: '',
        fName: ''
    },
    signUp: {
        username: '',
        password: '',
        rePassword: ''
    },
    resultCalculator: {},
}

export const notifications = (state = {
    validateForm: false,
    snackbar: { text: "", severity: "" }
}, action) => {

    switch (action.type) {
        case actionTypes.setValidateForm:
            return {
                ...state,
                validateForm: action.payload
            }
        case actionTypes.setValidatesignUp:
            return {
                ...state,
                validatesignUp: action.payload
            }
        case actionTypes.setSnackbar:
            return {
                ...state,
                snackbar: action.payload
            }
        case actionTypes.setLoading:
            return {
                ...state,
                loading: action.payload
            }
        case actionTypes.setStatus:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}

export const reducer = (state = inistialState, action) => {

    switch (action.type) {
        case actionTypes.setAllData:
            return {
                ...state,
                allData: action.payload
            }
        case actionTypes.setUserAccount:
            return {
                ...state,
                userAccount: action.payload
            }
        case actionTypes.setSignUp:
            return {
                ...state,
                signUp: action.payload
            }
        case actionTypes.setName:
            return {
                ...state,
                name: action.payload
            }
        case actionTypes.setResultCalculator:
            return {
                ...state,
                resultCalculator: action.payload
            }
        case actionTypes.setUserData:
            return {
                ...state,
                userData: action.payload
            }
        case actionTypes.setTableRow:
            return {
                ...state,
                tableRow: action.payload
            }
        default:
            return state
    }
}