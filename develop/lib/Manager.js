const Employee = require('./Employee');
//used extend/require in order to add Employee's properties/methods
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;  
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;