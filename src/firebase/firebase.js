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

const expensesList = database.ref('expenses');

expensesList.push({
  description: 'TRD Offroad',
  note: 'Badass',
  amount: 35000,
  createdAt: '4/16/19'
});

expensesList.push({
  description: 'bumper',
  note: 'front',
  amount: 1000,
  createdAt: '4/30/19'
});

expensesList.push({
  description: 'rack',
  note: 'roof',
  amount: 1000,
  createdAt: '5/15/19'
});






// database.ref('notes/-LdLm1XJ8fCGzNmZwjtb').remove();

// database.ref('notes').push({
//   title: 'Course topix',
//   body: 'React, redux, seismic'
// });

//
// const firebaseNotes = () => {
//   notes: {
//     id: {
//       title: ,
//       body:
//     },
//     id: {
//       title: ,
//       body:
//     }
//   }
// }
//
// const notes = [{
//     id:12,
//     title:'first note',
//     body: 'notey stufffff afhiusdf sfs gousggdfgoghr gerg eg gsg erogelfdihgfkldg jerfdg ierofdhglsdj fwef sdf'
//   },{
//     id:34,
//     title:'second note',
//     body: 'more notey note stufffff afhiusdf sfs gousggdfgoghr gerg eg gsg erogelfdihgfkldg jerfdg ierofdhglsdj fwef sdf'
// }];
//
// database.ref('notes').set(notes);
