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

const database = firebase.database();

database.ref().set({
  name: "Greg M",
  age: 31,
  isSingle: false,
  location: {
    country: 'United States',
    state: 'California',
    city: 'San Diego'
  }
}).then(() => {
  console.log('DATA IS SAVED!');
}).catch((e) => {
  console.log('ThIs fAiLeD', e);
});

const singleRef = database.ref('isSingle');

//
// singleRef.remove().then(() => {
//   console.log('REMOVE SUCCESS');
// }).catch((e) => {
//   console.log('REMOVE FAILED');
// });
