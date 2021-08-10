const Employee = require('./Employee');
//used extend/require in order to add Employee's properties/methods
class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;  
    }
    getSchool(){
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;