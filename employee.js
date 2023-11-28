
class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = null;
        if(manager) {
            this.manager = manager
            manager.addEmployee(this);
        }
        
    }

    calculateBonus(multiplier) {
        return this.salary*multiplier;
    }
}

module.exports = Employee;

