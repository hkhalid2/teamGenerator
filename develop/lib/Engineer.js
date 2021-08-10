const Employee = require('./Employee');
//used extend/require in order to add Employee's properties/methods
class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;  
    }
    getGithub(){
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;