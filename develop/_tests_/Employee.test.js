const Employee = require('../lib/Employee');

//tests the employee classes methods/properties
describe('Employee', () => {
    it('Should return Employee Name: Billybob', () => {
        const check = "Billybob";
        const testEmployee = new Employee("Billybob", "12345", "billybob@gmail.com");
        expect(testEmployee.getName()).toEqual(check);
    });

    it('Should return Employee ID: 12345', () => {
        const check = "12345";
        const testEmployee = new Employee("Billybob", "12345", "billybob@gmail.com");
        expect(testEmployee.getId()).toEqual(check);
    });

    it('Should return Billybob@gmail.com', () => {
        const check = "billybob@gmail.com";
        const testEmployee = new Employee("Billybob", "12345", "billybob@gmail.com");
        expect(testEmployee.getEmail()).toEqual(check);
    });

    it('Should return the string Employee', () => {
        const testEmployee = new Employee("Billybob", "12345", "billybob@gmail.com");
        expect(testEmployee.getRole()).toEqual('Employee');
    });
});