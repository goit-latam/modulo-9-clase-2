// https://api.github.com/users/riko1212
// function myAsyncFunction(url) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if (xhr.status !== 200) {
//         reject(xhr.status);
//       } else {
//         resolve(xhr.responseText);
//       }
//     });
//   });

//   return promise;
// }

// myAsyncFunction('https://api.github.com/users/riko1212')
//   .then((data) => {
//     data = JSON.parse(data);
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? Solicitud del usuario mediante callbacks

// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log('Робимо запит на сервер...');

//   setTimeout(() => {
//     const isDone = Math.random();

//     if (isDone > 0.5) {
//       const user = {
//         firstName: name,
//         lastName: 'Francis',
//         age: 30,
//       };

//       onSuccess(user);
//     } else {
//       onError(`No se encontró ningún usuario con el nombre ${name}`);
//     }
//   }, 2000);
// };

// const handleSuccessFetch = (data) => {
//   console.log(data);
// };

// const handleErrorFetch = (err) => {
//   console.log(err);
// };

// fetchUserByName('Ida', handleSuccessFetch, handleErrorFetch);

//?Solicitud del usuario mediante promesas

const fetchUserByName = name => {
  const promise = new Promise((resolve, reject) => {
    console.log('Робимо запит на сервер...');
    setTimeout(() => {
      const isDone = Math.random();

      if (isDone > 0.5) {
        const user = {
          firstName: name,
          lastName: 'Francis',
          age: 30,
        };

        resolve(user);
      } else {
        reject(`No se encontró ningún usuario con el nombre ${name}`);
      }
    }, 2000);
  });
  return promise;
};

fetchUserByName('Ida')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
