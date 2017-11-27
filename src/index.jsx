/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import firebase from 'firebase';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './store';
import './styles/styles.scss';
import firebaseConfig from '../config/firebase-config';


const root = document.getElementById('root');
firebase.initializeApp(firebaseConfig);

render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  root,
);
