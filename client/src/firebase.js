import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBc1adVrhmqBy41B4in8h9RYZ3DnxHflc",
  authDomain: "withback-21b7e.firebaseapp.com",
  projectId: "withback-21b7e",
  storageBucket: "withback-21b7e.appspot.com",
  messagingSenderId: "1079405116143",
  appId: "1:1079405116143:web:ef25acafd16c514ccdb91a",
  measurementId: "G-911S3WTX5Q",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
