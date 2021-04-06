"use strict";
// prob 1
let aPerson = {
    name: '',
    birthOfDate: '',
    getName() {
        return this.name;
    },
    setName(name) {
        this.name = name;
    }
};

let john = Object.create(aPerson);
john.name = 'John';
john.birthOfDate = '1998-12-10';

console.log(`The person’s name is ${john.getName()}`)
console.log(`${john.getName()} was born on ${john.birthOfDate}`)


// prob2
let employee = Object.create({
    ...aPerson,
    salary: 0.0,
    hireDate: new Date(),
    doJob(jobTitle) {
        console.log(`${this.name} is a ${jobTitle} who earns ${this.salary.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}`);
    }
});

let anna = Object.create(employee);
anna.name = 'Anna';
anna.salary = 249995.50;

anna.doJob('Programmer');

// prob3
function Person(name, birthOfDate) {
    this.name = name;
    this.birthOfDate = birthOfDate;
}

Person.prototype.getName = function () {
    return this.name;
}

Person.prototype.setName = function (name) {
    this.name = name;
}

Person.prototype.toString = function () {
    return `The person’s name is ${this.name}.\n${this.name} was born on ${this.birthOfDate}`;
}

const peter = new Person('Peter', '1985-11-10');

console.log(peter.toString());