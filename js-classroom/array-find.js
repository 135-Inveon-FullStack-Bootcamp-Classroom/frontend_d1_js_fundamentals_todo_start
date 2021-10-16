const stutends = [
  { id: 1, name: "Emre" },
  { id: 2, name: "Burakcan" },
];

const burakcan = stutends.find((student) => student.id === 2);

console.log(burakcan.id, burakcan.name);
