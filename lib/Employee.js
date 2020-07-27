// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, id, email){
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }

    printInfo(){
        console.log(`This employee info: ${this.name} ${this.role} ${this.id} ${this.email}`);
    }
}





module.exports = Employee;