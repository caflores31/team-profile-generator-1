class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.email = `${name}@company.com`;
        this.role = 'Employee';
    };

    getName() {
        return this.name;
    }

    getId() {
        return `ID: ${this.id}`;
    };

    getEmail() {
        return `Email: ${this.email}`;
    }

    getRole() {  
        return this.role;
    }
};

module.exports = Employee;