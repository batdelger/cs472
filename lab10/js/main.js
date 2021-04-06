import { Person } from './model/person.js';
import { Employee } from './model/employee.js';

const arrays = [
    new Person('Ana Smith', new Date(1998, 11, 15)),
    new Person('Bob Jone', new Date(1945, 10, 16)),
    new Person('Carlos Slim Helu', new Date(1976, 8, 24)),
]

arrays.forEach(person => console.log(person.toString()));

const emp = new Employee('Jim Hanson', new Date(), 245990, new Date());

emp.doJob('Software Engineer');