const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reduced = arr.reduce((prev, cur, curentIndex, array) => {
  const toplam = prev + cur;
  console.log(curentIndex, toplam, array);
  return toplam;
});

console.log(reduced);
