import * as firebase from 'firebase';
//import "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyDKlbUt-wD4JRhrp5oFoI5_4tFfmEJivGs',
    authDomain: 'recipro-95bca.firebaseapp.com',
    databaseURL: 'https://recipro-95bca.firebaseio.com',
    projectId: 'recipro-95bca',
    storageBucket: 'recipro-95bca.appspot.com',
    messagingSenderId: '573030585306',
    appId: '1:573030585306:android:d189c1ea474fa281dce6e3',
    //measurementId: 'G-measurement-id',
};
  
firebase.initializeApp(firebaseConfig);
export {firebase};