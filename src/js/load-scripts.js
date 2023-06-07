// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Carga de varios scripts
 */
//? Crea una función loadScript(url) que creará y añadirá un script a la página

// const loadScript = (url, onSuccess, onError) => {
//   const script = document.createElement('script');
//   script.src = url;
//   document.body.append(script);

//   script.addEventListener('load', e => {
//     onSuccess(`El script ${script.src}  se ha cargado`);
//   });

//   script.addEventListener('error', e => {
//     onError(`El script ${script.src} no  se ha cargado`);
//   });
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   message => {
//     console.log(message);
//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       message => {
//         console.log(message);
//         loadScript(
//           'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//           message => {
//             console.log(message);
//           },
//           err => {
//             console.log(err);
//           }
//         );
//       },
//       err => {
//         console.log(err);
//       }
//     );
//   },
//   err => {
//     console.log(err);
//   }
// );

//? Proporciona un callback que se llamará cuando se complete la carga del script

//? Maneja los errores

//?  Carga de varios scripts

//? Pirámide infernal de callbacks

//? Solución mediante promesas

// const loadScript = url => {
//   const promise = new Promise((resolve, reject) => {
//     const script = document.createElement('script');
//     script.src = url;
//     document.body.append(script);
//     script.addEventListener('load', e => {
//       resolve(`El script ${script.src}  se ha cargado`);;
//     });
//     script.addEventListener('error', e => {
//       reject(`El script ${script.src} no  se ha cargado`);;
//     });
//   });

//   return promise;
// };

// loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
//   .then(message => {
//     console.log(message);
//     return loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
//   })
//   .then(message => {
//     console.log(message);
//     return loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js');
//   })
//   .then(message => {
//     console.log(message);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   (message) => {
//     console.log(message);
//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       (message) => {
//         console.log(message);
//         loadScript(
//           'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//           (message) => {
//             console.log(message);
//           },
//           (err) => {
//             console.log(err);
//           }
//         );
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   },
//   (err) => {
//     console.log(err);
//   }
// );
