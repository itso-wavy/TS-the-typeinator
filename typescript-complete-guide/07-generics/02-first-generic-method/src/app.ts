// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(' ');
// })

/* new Promise<resolve시 반환값의 타입>((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
}); */
new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('10');
  }, 2000);
});
new Promise<boolean>((resolve, reject) => {
  setTimeout(() => {
    resolve(true);
  }, 2000);
}).then(data => data);

function mergeObj<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
