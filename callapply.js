
const normalPerson = {

    firstName : "parker",
    lastName  : "peter",
    salary    : 15000,
    getFullName : function() {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    },
    getSalary : function(amount) {
        this.salary= this.salary - amount;
        return this.salary;
    }
} 
console.log(normalPerson.getFullName());
console.log("netSalary:", normalPerson.getSalary(1000));