import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdrzBe2aqK_eNFYA5GxQQPjElR94qVGNk",
  authDomain: "firegram-tutorial-a93e9.firebaseapp.com",
  projectId: "firegram-tutorial-a93e9",
  storageBucket: "firegram-tutorial-a93e9.appspot.com",
  messagingSenderId: "1088849547148",
  appId: "1:1088849547148:web:6dd61cc64cd6a8fbd5d0a9"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};