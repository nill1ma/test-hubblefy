import firebase from 'firebase'
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyBHNRE5g0n-DHNK8pjl_GaB721PjVuq9Yc",
  authDomain: "test-project-88982.firebaseapp.com",
  projectId: "test-project-88982",
  storageBucket: "test-project-88982.appspot.com",
  messagingSenderId: "409936301427",
  appId: "1:409936301427:web:cffc4382dcec6fb3254906"
};
var fireDb = firebase.initializeApp(firebaseConfig)

export default fireDb.database().ref();