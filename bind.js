
const normalPerson = {

    firstName : "parker",
    lastName  : "peter",
    salary    : 15000,
    getFullName : function() {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    },
    chargeBill : function(amount) {
        console.log(this);
        console.log("amount:", amount);
        this.salary= this.salary - amount;
        return this.salary;
    }
} 
const heroPerson = {
    firstName : "hero",
    lastName : "khan",
    salary   : 30000,
}

const friendlyPerson = {
    firstName : "mark",
    lastName : "dan",
    salary   : 20000,   
}

// normalPerson.chargeBill();

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
const friendChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
friendChargeBill(1500);
console.log(friendlyPerson.salary);