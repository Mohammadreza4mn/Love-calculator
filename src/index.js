import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Home from './containers/Home';
import Navbar from './component/navbar/Navbar';
import Toast from './component/toast/Toast';
import { Container, CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { inistialState, notifications, reducer } from './store/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const myTheme = createMuiTheme({
  typography: {
    fontFamily: ['vazir']
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          direction: 'rtl',
          overflowX: 'hidden'
        }
      }
    }
  }
});

const store = createStore(combineReducers({ localData: reducer, notifications }), inistialState, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Container fixed>
        <Provider store={store}>
          <Toast />
          <Navbar />
          <Home />
        </Provider>
      </Container>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
