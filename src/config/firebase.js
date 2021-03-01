import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDbQ9Jb25ukEIxCHO6vTk0qb8lHM8GyFtM",
    authDomain: "vue-doc-ec077.firebaseapp.com",
    projectId: "vue-doc-ec077",
    storageBucket: "vue-doc-ec077.appspot.com",
    messagingSenderId: "625383185962",
    appId: "1:625383185962:web:915bd3617dc90e9df5ed53"
  };

const fire = firebase.initializeApp(firebaseConfig)

export default fire