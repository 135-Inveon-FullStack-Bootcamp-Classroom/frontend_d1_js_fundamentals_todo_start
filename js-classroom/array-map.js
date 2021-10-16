const arr = [1, 2, 3, 4, 5, "murat", 12.34, undefined, null];

const sayiArr = [1, 2, 3, 4, 5];

// console.log(typeof null, typeof undefined, typeof 4, typeof "ss");

// for (const i = 0; i < arr.length; i++) {
//   console.log(arr[i]); // iteration
// }

// arr.map((e, index) => console.log(e, index));

// function topla(a, b) {
//   return a + b;
// }

// console.log(topla(1, 3));

const carpilmislar = sayiArr.map((p, index, array) => {
  console.log(index, p, array);
  return p * 2;
});
console.log(carpilmislar);
