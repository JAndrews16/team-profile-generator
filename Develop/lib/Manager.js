// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(officeNumber, title) {
        this.officeNumber = officeNumber;
        this.title = title;
    }
}