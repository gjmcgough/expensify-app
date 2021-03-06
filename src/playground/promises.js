const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Greg',
      age: '30'
    });
    reject('ERROR');
  }, 3000)
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('MESSAGE!');
      reject('ERROR');
    }, 3000)
  });
}).then((str) => {
  console.log('this runs!', str);
}).catch((error) => {
  console.log('error: ' + error);
});

console.log('after');
