const Employee = require('./Employee');

class Manager extends Employee {
    constructor(firstName, lastName, id, officeNumber) {
        super(firstName, lastName, id);
        
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    };

    getOfficeNumber() {
        return `Office Number: ${this.officeNumber}`;
    };
};

module.exports = Manager;