import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBhOgv6i_3h8Glp5nLGg8-0rMkCC2axGdw",
  authDomain: "letmeask-c1e80.firebaseapp.com",
  databaseURL: "https://letmeask-c1e80-default-rtdb.firebaseio.com",
  projectId: "letmeask-c1e80",
  storageBucket: "letmeask-c1e80.appspot.com",
  messagingSenderId: "95574434720",
  appId: "1:95574434720:web:8a6d4f36a72399be3e7ac5"
  
  // apiKey: process.env.REACT_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }