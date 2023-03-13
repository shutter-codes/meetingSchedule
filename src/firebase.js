import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAGoAl59-fqK47mNNtL34HmJIHzE7MotuM",
  authDomain: "meetingapp-90e73.firebaseapp.com",
  projectId: "meetingapp-90e73",
  storageBucket: "meetingapp-90e73.appspot.com",
  messagingSenderId: "144452238286",
  appId: "1:144452238286:web:c3c01ddd428f227f57099f",
  measurementId: "G-R92VEKW591",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export default db;
export { auth, provider };

