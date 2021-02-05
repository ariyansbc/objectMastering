
const normalPerson = {

    firstName : "parker",
    lastName  : "peter",
    salary    : 15000,
    getFullName : function() {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    },
    chargeBill : function(amount, tax , tips) {
        console.log(this);
        console.log("amount:", amount);
        this.salary= this.salary - amount-tax-tips;
        return this.salary;
    }
} 
const heroPerson = {
    firstName : "hero",
    lastName : "khan",
    salary   : 30000,
    getHeroPersonTax : function() {

    }
}

const friendlyPerson = {
    firstName : "mark",
    lastName : "dan",
    salary   : 20000,   
}
//using call 
normalPerson.chargeBill.call(heroPerson, 3000, 500, 100);
console.log("heroPerson.salary:",heroPerson.salary);
// console.log(heroPerson);
normalPerson.chargeBill.apply(heroPerson,[5000,1000,500]);
console.log("heroPerson.salary:",heroPerson.salary);
console.log("heroPerson.salary:",heroPerson.salary);