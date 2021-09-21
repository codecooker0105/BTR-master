import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';
import { SnackbarProvider } from 'notistack';
import { Button } from '@material-ui/core';
import './assets/scss/main.scss';

const { store, persistor } = configureStore()

const notistackRef = React.createRef();
const onClickDismiss = key => () => {
  notistackRef.current.closeSnackbar(key);
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SnackbarProvider 
        maxSnack={3} 
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
        autoHideDuration={3000} 
        ref={notistackRef} 
        action={(key) => (<Button onClick={onClickDismiss(key)} style={{ color: 'white' }}>Dismiss</Button>)}
      >
        <App />
      </SnackbarProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
