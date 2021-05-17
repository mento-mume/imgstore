import '../../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import firebase from 'firebase';

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});

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

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
