// const arr = Array.from({ length: 10 }, (v, k) => k + 1);
const arr = ["city", "country"];

const student = {
  id: 1,
  name: "murat",
  surname: "turkay",
  age: 23,
  ["key"]: "todo",
};

arr.map((item) => (student[item.toString()] = item + " my-city"));

console.log(student);
