class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return`Hi, my name is ${this.name} and I am ${this.age} years old`;
  }
}

const person = new Person('Andi', 21);
console.log(person.introduce());
console.log(person);