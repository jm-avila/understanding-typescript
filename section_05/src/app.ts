class Department {
  // private properties can't be accesed from the outside of the object
  private employees: string[];

  constructor(private readonly id: string, public name: string) {
    this.employees = [];
  }

  describe(this: Department) {
    console.log(`My name is ${this.name} and my id is ${this.id}`);
  }

  addEmployee(employeeName: string) {
    this.employees.push(employeeName);
  }

  printEmployees(this: Department) {
    console.log(this.employees);
  }
}

const myDepartment = new Department("z343", "Home");
myDepartment.describe();
myDepartment.addEmployee("CHM");
myDepartment.printEmployees();
