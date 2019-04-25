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

// database.ref('age').set(30);
// database.ref('location/city').set('Rosarito');
// database.ref('location/state').set('Baja Norte');
// database.ref('location/country').set('Mexico');
database.ref("attributes").set({
  height: 170,
  weight:  67
}).then(() => {
  console.log('WU TANG CLAN');
}).catch((e) => {
  console.log('FAILURE ERROR', e);
});
