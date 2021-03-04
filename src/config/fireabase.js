import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDTG7jsZfh2cAac06lTN0Lz126Gee4lU4g',
  authDomain: 'clone-redux-bjs.firebaseapp.com',
  projectId: 'clone-redux-bjs',
  storageBucket: 'clone-redux-bjs.appspot.com',
  messagingSenderId: '670087833954',
  appId: '1:670087833954:web:212b843f58fd7d077ae43b',
  measurementId: 'G-0SSJPZEE50',
};

const youtubeApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth;

export { auth };
