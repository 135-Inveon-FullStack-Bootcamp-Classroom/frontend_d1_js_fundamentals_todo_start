const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const stutends = [
  { id: 1, name: "Emre" },
  { id: 2, name: "Burakcan" },
];

const buyuk5 = arr.filter((p) => p > 5);

const idfilter = stutends.filter((student) => student.id === 2);

console.log(idfilter);
