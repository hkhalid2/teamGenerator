const Manager = require('../lib/Manager');

//various test's that test the manager class's properties/methods
//as well as the Employee ones it should have access to
describe('Manager', () => {
    it('Should return Employee Name: Django', () => {
        const check = "Django";
        const testEmployee = new Manager("Django", "12345", "Django@gmail.com", "90210");
        expect(testEmployee.getName()).toEqual(check);
    });

    it('Should return Employee ID: 12345', () => {
        const check = "12345";
        const testEmployee = new Manager("Django", "12345", "Django@gmail.com", "90210");
        expect(testEmployee.getId()).toEqual(check);
    });

    it('Should return Django@gmail.com', () => {
        const check = "Django@gmail.com";
        const testEmployee = new Manager("Django", "12345", "Django@gmail.com", "90210");
        expect(testEmployee.getEmail()).toEqual(check);
    });

    it('Should return the string Manager', () => {
        const testEmployee = new Manager("Django", "12345", "Django@gmail.com", "90210");
        expect(testEmployee.getRole()).toEqual('Manager');
    });

    it('Should be equivalent to inputted officeNumber', () => {
        const testEmployee = new Manager("Django", "12345", "Django@gmail.com", "90210");
        expect(testEmployee.officeNumber).toBe("90210");
    });

    it('Should return undefined since school property does not exist', () => {
        const testEmployee = new Manager("Django", "12345", "Django@gmail.com", "90210");
        expect(testEmployee.school).toBe(undefined);
    });

});