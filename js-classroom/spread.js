const arr = [1, 2, 3, 4, 5];
const x = arr[0];
const y = arr[1];
const rest = [arr[2], arr[3], arr[4]];

const arrr = [1, () => {}];

const [x, y, ...rest] = arr;

// console.log(x, y, rest);

// const getFullName = (name, surname) => name + " " + surname;

// const nm = ["murat", "turkay"];

// console.log(getFullName(...nm));

const user = {
  name: "murat",
  surname: "turkay",
  password: "1234",
  city: {
    name: "izmir",
    uniq: 35,
  },
};

const hobbies = {
  hobby1: "football",
  hobby2: "basketball",
  hobby3: "chess",
};

// const hobby1 = hobbies.hobby1;
// const hobby2 = hobbies.hobby2;
// const hobby3 = hobbies.hobby3;

const { hobby1, hobby2 } = hobbies;

const user2 = { ...user, ...hobbies };

console.log(hobby1, hobby2);
