import React from 'react';
import ReactDOM from 'react-dom';

import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { FirestoreProvider } from "@react-firebase/firestore";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'



import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { app } from "./firebase/config"




const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>

        <FirebaseAuthProvider firebase={firebase} {...app}>
          <AlertProvider template={AlertTemplate} {...options}>

            {/* <FirestoreProvider {...firebaseConfig} firebase={firebase}> */}
            <App />
            {/* </FirestoreProvider> */}
          </AlertProvider>

        </FirebaseAuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
