const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;  
    }
    getGithub(){
        console.log(`Engineer's Github: ${this.github}`);
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;