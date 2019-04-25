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

const onValueChange = (snapshot) => {
  const response = snapshot.val();
  console.log(response);
  console.log(`${response.name} is a ${response.job.title} at ${response.job.company}`);
};

database.ref().on('value', onValueChange),
  (e) => {
    console.log('Error fetching data', e);
  };

setTimeout(() => {
  database.ref().update({
    name: 'GREGORIO',
    'job/company': 'ServiceNow',
    'job/title': 'Associate Developer'
  });
}, 5000);

// console.log(database.ref(name) + ' is a ' + database.ref(job) + ' at '+ database.ref(company));

// const onValueChange = (snapshot) => {
//   console.log(snapshot.val());
// };
//
// database.ref().on('value', onValueChange), (e) => {
//   console.log('error fetching data', e);
// };
//
// setTimeout(() => {
//   database.ref('age').set(55);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(100);
// }, 10500);


// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e)=>{
//   console.log('Error fetching data', e);
// })

//
// database.ref().set({
//   name: "Greg M",
//   stressLevel: 6,
//   age: 31,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     country: 'United States',
//     state: 'California',
//     city: 'San Diego'
//   }
// }).then(() => {
//   console.log('DATA IS SAVED!');
// }).catch((e) => {
//   console.log('ThIs fAiLeD', e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
//
// const singleRef = database.ref('isSingle');



//
// singleRef.remove().then(() => {
//   console.log('REMOVE SUCCESS');
// }).catch((e) => {
//   console.log('REMOVE FAILED');
// });
