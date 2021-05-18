import firebase from 'firebase';
import 'firebase/firestore';

// export to seperate file, same system used to export & import theme
const collections = {
  gallery: 'gallery',
};

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

const uploadImgs = async (file) => {
  const imgs = [];

  const storageRef = firebase.storage().ref();
  var i;
  for (i = 0; i < file.length; i++) {
    const fileRef = storageRef.child(file[i].name);
    await fileRef.put(file[i]);
    const url = await fileRef.getDownloadURL();
    imgs.push(url);
  }
  return imgs;
};

const uploadGallery = async ({ user_id, title, images, user_name }) => {
  await db.collection(collections.gallery).add({
    user_id,
    title,
    images,
    user_name,
  });
};

// Check yourself
const getGalleries = async () => {
  const data = [];
  const querySnapshot = await db.collection(collections.gallery).get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

export default {
  registerUser,
  signInUser,
  logOutUser,
  getCurrentUser,
  googleLogin,
  uploadImgs,
  uploadGallery,
  getGalleries,
};
