import React, { useEffect } from 'react';
import { Grid, makeStyles, Box, TextField, Button, CircularProgress, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import HistoryTable from '../component/historyTable/HistoryTable';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../store/action';
import { percentageAction, checkIpAction } from '../store/thunk';

const myStyles = makeStyles((theme) => ({
    btn: {
        color: 'red'
    },
    input: {
        display: 'flex',
        justifyContent: 'center',
        '& input[type=text]': {
            textAlign: 'center'
        }
    },
    div: {
        [theme.breakpoints.down('xs')]: {
            margin: '100px 0'
        }
    }
}));

function Home(props) {

    const styles = myStyles();

    const dispatch = useDispatch();

    const { allData, userData, name, resultCalculator } = useSelector(state => state.localData);
    const { validateForm, loading, status } = useSelector(state => state.notifications);

    useEffect(() => {
        dispatch(checkIpAction())
    }, [])

    const callApi = (event) => {

        event.preventDefault()
        dispatch({ type: actionTypes.setValidateForm, payload: true })

        if (Object.values(name).every(value => value.trim())) {

            dispatch(percentageAction(saveResult))
        }
    };

    const saveResult = (data) => {

        if (status == "login") {

            let flagAllData = allData

            flagAllData.find((item) => {
                if (item.username === userData) {
                    item.results = item.results ? [...item.results] : []
                    item.results.push(data)
                    localStorage.setItem("love-calculator", JSON.stringify(flagAllData))

                    let flagRow = []
                    item.results.map((result, index) => {
                        flagRow.push({ id: index + 1, girlName: result.fname, boyName: result.sname, interest: result.percentage, description: result.result, remove: "del" })
                    })
                    dispatch({ type: actionTypes.setTableRow, payload: flagRow })
                }
            })
        }
    };

    const generateEmoji = (percentage) => {

        if (percentage < 50) {
            return <SentimentDissatisfiedOutlinedIcon />
        } else if (percentage == 50) {
            return <SentimentSatisfiedOutlinedIcon />
        } else {
            return <MoodOutlinedIcon />
        }
    };

    return (
        <Box height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" className={styles.div} >
            <Grid component="form" autoComplete="off" container justify="center" noValidate onSubmit={callApi} spacing={2} >
                <Grid item xs={12} sm={5} className={styles.input}>
                    <TextField fullWidth autoFocus label="نام پسر" error={!name.sName.trim() && validateForm && true} variant="outlined" onChange={(event) => dispatch({ type: actionTypes.setName, payload: { ...name, sName: event.target.value } })} />
                </Grid>
                <Grid item xs={12} sm={5} className={styles.input}>
                    <TextField fullWidth label="نام دختر" error={!name.fName.trim() && validateForm && true} variant="outlined" onChange={(event) => dispatch({ type: actionTypes.setName, payload: { ...name, fName: event.target.value } })} />
                </Grid>
                <Grid item xs={12} sm={2} className={styles.input}>
                    <Button fullWidth size="large" variant="outlined" type="submit" position="relative" display="inline-flex" >
                        {loading || resultCalculator.percentage
                            ?
                            <Box display="flex" alignItems="center">
                                <Box display="flex" alignItems="center" justifyContent="center" ml={2}>
                                    <CircularProgress variant={resultCalculator.percentage && "determinate"} value={resultCalculator.percentage && resultCalculator.percentage} />
                                    <Box position="absolute">
                                        <Typography variant="caption" component="div" color="textSecondary">{resultCalculator.percentage ? `${resultCalculator.percentage}%` : <Skeleton variant="text" width={20} />}</Typography>
                                    </Box>
                                </Box>
                                {generateEmoji(resultCalculator.percentage)}
                            </Box>
                            :
                            <FavoriteIcon className={styles.btn} />
                        }
                    </Button >
                </Grid>
            </Grid>
            {status == "login"
                ?
                <Box width="100%" height={400} mt={5} >
                    <HistoryTable />
                </Box>
                :
                <Box mt={5} boxShadow={2} border={1} borderColor="primary.main" borderRadius="borderRadius">
                    <Box m={1.5}>
                        <Typography align="center" variant="subtitle1">
                            برای مشاهده لیست نتایج با حساب کاربری وارد شوید
                        </Typography>
                    </Box>
                    <Button fullWidth={true} size="large" variant="contained" color="primary" onClick={() => dispatch({ type: actionTypes.setStatus, payload: "username" })}>
                        ورود به حساب کاربری
                    </Button>
                </Box>
            }
        </Box>
    )
}

export default Home;