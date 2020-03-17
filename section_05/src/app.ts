abstract class Department {
  // private properties can't be accesed from the outside of the object

  static fiscalYear: string = `${new Date().getFullYear()}`;
  protected employees: string[];

  constructor(protected readonly id: string, public name: string) {
    this.employees = [];
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employeeName: string) {
    this.employees.push(employeeName);
  }

  printEmployees(this: Department) {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "Tech");
  }

  describe() {
    console.log(`The ${this.name} department has ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  static getInstance(id: string, reports: string[]) {
    if (this.instance) return this.instance;
    this.instance = new AccountingDepartment(id, reports);
    return this.instance;
  }

  get mostRecentReport() {
    return this.lastReport;
  }

  set mostRecentReport(text: string) {
    this.addReport(text);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0] || "";
  }

  describe() {
    const lastReport: string = this.mostRecentReport
      ? `the last report is ${this.mostRecentReport}`
      : "and have no reports.";
    console.log(
      `The ${this.name} department has ID: ${this.id}, ${lastReport}`
    );
  }

  addEmployee(name: string) {
    if (name === "Max") return;
    this.employees.push(name);
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }
}

const techTeam = new ITDepartment("d1", []);
techTeam.name = "Tech Team";
techTeam.describe();
techTeam.addEmployee("Cho");
techTeam.printEmployees();

const accounting = AccountingDepartment.getInstance("d1", []);
accounting.describe();
accounting.addEmployee("Mario");
accounting.printEmployees();
accounting.addReport("Corona is comming");
accounting.addReport("Corona is here");
accounting.mostRecentReport = "Corona, Corona, wash your hands";
accounting.printReports();
accounting.describe();
console.log(accounting.mostRecentReport);

console.log("fiscalYear", Department.fiscalYear);
