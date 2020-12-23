const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, officeNumber) {
        super(name, id);
        
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    };

    getOfficeNumber() {
        return `Office Number: ${this.officeNumber}`;
    };
};

module.exports = Manager;