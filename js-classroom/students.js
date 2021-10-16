class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

// c#
// abstract class Person{}
// class Teacher: Person
// {
// }

class Teacher extends Person {
  constructor(name, surname, classrooms) {
    super(name, surname);
    this.classrooms = classrooms;
  }
}

class Student extends Person {
  constructor(name, surname, classroom) {
    super(name, surname);

    this.classroom = classroom;
  }
}

const murat = new Teacher("murat", "türkay", [1, 2, 3]);

const emre = new Student("Emre", "Bal", 1);
console.log(murat, emre);
