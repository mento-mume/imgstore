import firebase from 'firebase';
import 'firebase/firestore';

// Store db instace from firebase
const db = firebase.firestore();

const registerUser = async (email, password, displayName) => {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
  const user = await firebase.auth().currentUser;
  if (user) {
    await user.updateProfile({
      displayName,
    });
  }
  return user;
};

const signInUser = async (email, password) => {
  const signedUser = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  const user = signedUser.user;
  return user;
};

const getCurrentUser = async () => {
  const user = await firebase.auth().currentUser;
  return user;
};

const googleLogin = async () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  await firebase.auth().signInWithPopup(provider);
};

const logOutUser = async () => {
  await firebase.auth().signOut();
};

export default {
  registerUser,
  signInUser,
  logOutUser,
  getCurrentUser,
  googleLogin
};
