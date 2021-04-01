const Employee = (function () {
    let name, age, salary;

    const setName = (newName) => {
        name = newName;
    }

    const setAge = (newAge) => {
        age = newAge;
    }

    const setSalary = (newSalary) => {
        salary = newSalary;
    }

    const getName = () => {
        return name;
    }

    const getAge = () => {
        return age;
    }

    const getSalary = () => {
        return salary;
    }

    const increaseSalary = (percentage) => {
        setSalary(getSalary() + getSalary() * (percentage / 100));
    }

    const increaseAge = () => {
        setAge(getAge() + 1);
    }

    return {
        setName,
        setAge,
        setSalary,
        increaseSalary,
        increaseAge
    }
});

const emp1 = new Employee();
emp1.setAge(10);
emp1.setSalary(1000);