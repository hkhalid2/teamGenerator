const Intern = require('../lib/Intern');


describe('Employee', () => {
    it('Should return Employee Name: Billybob', () => {
        const check = "Billybob";
        const testEmployee = new Intern("Billybob", "12345", "billybob@gmail.com", "billybobgithub");
        expect(testEmployee.getName()).toEqual(check);
    });

    it('Should return Employee ID: 12345', () => {
        const check = "12345";
        const testEmployee = new Intern("Billybob", "12345", "billybob@gmail.com", "billybobgithub");
        expect(testEmployee.getId()).toEqual(check);
    });

    it('Should return Billybob@gmail.com', () => {
        const check = "billybob@gmail.com";
        const testEmployee = new Intern("Billybob", "12345", "billybob@gmail.com", "billybobgithub");
        expect(testEmployee.getEmail()).toEqual(check);
    });

    it('Should return the string Intern', () => {
        const testEmployee = new Intern("Billybob", "12345", "billybob@gmail.com", "billybobgithub");
        expect(testEmployee.getRole()).toEqual('Intern');
    });

    it('Should return VCU', () => {
        const check = "VCU"
        const testEmployee = new Intern("Billybob", "12345", "billybob@gmail.com", "VCU");
        expect(testEmployee.getSchool()).toEqual(check);
    });

});