import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBc-QOx7_9ywCx1QHapyhTE94p5Jfle0Nc',
  authDomain: 'imger-a34ba.firebaseapp.com',
  databaseURL: 'https://imger-a34ba-default-rtdb.firebaseio.com/',
  projectId: 'imger-a34ba',
  storageBucket: 'imger-a34ba.appspot.com',
  messagingSenderId: '1050967856522',
  //   appId: 'app-id',
  //   measurementId: 'G-measurement-id',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
