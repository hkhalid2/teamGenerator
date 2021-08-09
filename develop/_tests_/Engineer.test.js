const Engineer = require('../lib/Engineer');

describe('Employee', () => {
    it('Should return Employee Name: Billybob', () => {
        const check = "Billybob";
        const testEmployee = new Engineer("Billybob", "12345", "billybob@gmail.com", "billybobgithub");
        expect(testEmployee.getName()).toEqual(check);
    });

    it('Should return Employee ID: 12345', () => {
        const check = "12345";
        const testEmployee = new Engineer("Billybob", "12345", "billybob@gmail.com", "billybobgithub");
        expect(testEmployee.getId()).toEqual(check);
    });

    it('Should return Billybob@gmail.com', () => {
        const check = "billybob@gmail.com";
        const testEmployee = new Engineer("Billybob", "12345", "billybob@gmail.com", "billybobgithub");
        expect(testEmployee.getEmail()).toEqual(check);
    });

    it('Should return the string Engineer', () => {
        const testEmployee = new Engineer("Billybob", "12345", "billybob@gmail.com", "billybobgithub");
        expect(testEmployee.getRole()).toEqual('Engineer');
    });

    it('Should return billybobGithub', () => {
        const check = "billybobgithub"
        const testEmployee = new Engineer("Billybob", "12345", "billybob@gmail.com", "billybobgithub");
        expect(testEmployee.getGithub()).toEqual(check);
    });

});