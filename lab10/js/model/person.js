export class Person {
    constructor(name, dateOfBirth) {
        this.name = name || '';
        this.dateOfBirth = dateOfBirth || new Date();
    }

    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    setDateOfBirth(newDateOfBirth) {
        this.dateOfBirth = newDateOfBirth;
    }

    toString() {
        return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth.toISOString().substr(0, 10)}`;
    }
}