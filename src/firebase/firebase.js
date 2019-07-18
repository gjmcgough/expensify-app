import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// const expensesList = database.ref('expenses');

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//       });
//   });
//     console.log(expenses);
// });
//
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


// expensesList.push({
//   description: 'TRD Offroad',
//   note: 'Badass',
//   amount: 35000,
//   createdAt: '4/16/19'
// });
//
// expensesList.push({
//   description: 'bumper',
//   note: 'front',
//   amount: 1000,
//   createdAt: '4/30/19'
// });
//
// expensesList.push({
//   description: 'rack',
//   note: 'roof',
//   amount: 1000,
//   createdAt: '5/15/19'
// });
//





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
