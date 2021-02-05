class Person {
    constructor(firstName, lastName , salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary   = salary;
    }
}
const heroPerson = new Person("peter", "perker", 20000);
console.log(heroPerson);
const friendlyPerson = new Person("ahmed", "juba", 5000);
console.log(friendlyPerson);

// old style

function Person1(firstName, lastName,salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary  = salary;
}

const oldPerson  = new Person1("masum", "billa",30000);
console.log(oldPerson);