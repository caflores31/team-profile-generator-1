class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = `${firstName}.${lastName}@company.com`;
        this.role = 'Employee';
        this.icon = 'fas fa-briefcase'
    };

    getName() {
        return `${this.firstName} ${this.lastName}`;
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
    
    getIcon() {
        return `<i class="${this.icon} fa-3x"></i>`
    }
};

module.exports = Employee;