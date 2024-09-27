function greetUser(name) {
  return `Hello ${name}, from function declaration`;
}

const greetUserArrow = (name) => {
  return `Hello ${name}, from arrow function`;
}

console.log(greetUser('andi'));
console.log(greetUserArrow('mahardika'));

