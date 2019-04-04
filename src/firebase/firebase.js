import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBDAjby21zb-SVNwvRpg1upduiA11zsCw8",
  authDomain: "expensify-wu.firebaseapp.com",
  databaseURL: "https://expensify-wu.firebaseio.com",
  projectId: "expensify-wu",
  storageBucket: "expensify-wu.appspot.com",
  messagingSenderId: "485874070687"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: "Greg M"
});
