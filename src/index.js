import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';
import env from './env'

// Firebase integration
firebase.initializeApp({
  apiKey: env.firebase_apiKey,
  authDomain: env.firebase_authDomain,
  databaseURL: env.firebase_databaseURL,
  projectId: env.firebase_projectId,
  storageBucket: env.firebase_storageBucket,
  messagingSenderId: env.firebase_messagingSenderId
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
