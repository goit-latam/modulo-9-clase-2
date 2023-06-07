/*
 * Promesa
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randonNum = Math.random();
//     if (randonNum < 0.5) {
//       resolve('Good');
//     } else {
//       reject('Error');
//     }
//   }, 2000);
// });

// console.log(promise);

// promise.then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// promise
//   .then((data) => {
//     data = data + '!!!';
//     console.log(data);
//     return data;
//   })
//   .then((data) => {
//     data = data + '&&&';
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('Hello');
//   });

//? constructor new Promise(callback(resolve, reject));

//? then(onSuccess, onError)

//? Cadenas de promesas y catch(onError)

//? finally()

//? TASK 01
// ¿Es posible 'resolver' una promesa nuevamente??
// const promise = new Promise((resolve, reject) => {
//   // resolve(1);

//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then((result) => {
//   console.log(result);
// });

//? TASK 02
// ¿Qué aparecerá en la consola?
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? TASK 03
// ¿Qué aparecerá en la consola?
const promise = new Promise((resolve, reject) => {
  reject('error');
});

promise
  .then(data => {
    console.log(data);
  })
  .then(data => {
    console.log(data);
    return '2';
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
