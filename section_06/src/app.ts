type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(e1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//Function Overload

//Type Guard : typeof
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(add(1, 1), add(1, "1"));

type UnknownEmployee = Employee | Admin;

//Type Guard : property check
function printEmployee(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges" + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date" + emp.startDate);
  }
}

printEmployee(e1);

//Type Guard : instanceof
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

const bird: Bird = {
  type: "bird",
  flyingSpeed: 18,
};

const horse: Horse = {
  type: "horse",
  runningSpeed: 12,
};

moveAnimal(bird);
moveAnimal(horse);

// Type Casting

const concatStr = add("Jose", "Avila") as string;

concatStr.split("");

// Indexable Properties
interface ErrorContainer {
  [prop: string]: boolean;
}

const mistake: ErrorContainer = {
  present: true,
};

interface ErrorList {
  [key: number]: boolean;
}

const mistake2: ErrorList = [true];

// Function Overload

function concatOrAdd(a: string, b: string): string;
function concatOrAdd(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const str = concatOrAdd("Jose", "Avila");

str.split("");

// Optional Chaining

function generateRandom() {
  const i = Math.floor(Math.random() * 2);

  const iAlpha = ["zero", "one"];
  return {
    [iAlpha[i]]: {
      random: "key",
    },
  };
}

const random = generateRandom();
console.log(random?.zero?.random);
console.log(random?.one?.random);

// Nullish Coalescing

const A = null;
const B = ""; // falsy
const c = undefined;

const valA = A ?? "null";
const valB = B ?? "falsy";
const valC = c ?? "undefined";

const valAA = A || "null";
const valBB = B || "falsy";
const valCC = c || "undefined";

console.log({ valA, valAA });
console.log({ valB, valBB });
console.log({ valC, valCC });
