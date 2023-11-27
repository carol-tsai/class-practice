class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = null;
        if(manager) {
            this.manager = manager
        }
        
    }
}

module.exports = Employee;

const leo = new Employee('Leonardo', 90000, 'Ninja');
console.log(leo)