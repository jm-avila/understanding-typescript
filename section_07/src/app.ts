//Generics

const names: string[] = ["Max", "Manuel"];

const strPromise: Promise<string> = (() => Promise.resolve("str"))();
strPromise.then((res) => {
  res.split("");
});

// Generic Function
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj1 = merge({ name: "Max" }, { age: 30 });
const mergeObj2 = merge({ name: "Max" }, 30); // Fails silently, 30 is not assigned.
console.log({ mergeObj1, mergeObj2 });

// Generic Function with Constraints

function mergeConstrained<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  return Object.assign(objA, objB);
}

const mergeObj3 = mergeConstrained({ name: "Max" }, { age: 30 });
// const mergeObj4 = mergeConstrained({ name: "Max" }, 30); // An error is thrown.
console.log({ mergeObj3 });

// Generic Function

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(""));
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe([]));
console.log(countAndDescribe([1, 2, 3, 4]));

// keyof Constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));

// Generic Clases

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manny");
textStorage.addItem("Randy");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

interface People {
  id: string;
  name: string;
  age: number;
}

const peopleStorage = new DataStorage<People>();
const max: People = { id: "01sa1f4", name: "Max", age: 99 };
const emmanuel: People = { id: "01sfg14", name: "Emmanuel", age: 29 };
peopleStorage.addItem(max);
peopleStorage.addItem(emmanuel);
peopleStorage.removeItem(emmanuel);
console.log(peopleStorage.getItems());

// Built-in Generics

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

// Readonly

const namesList: Readonly<string[]> = ["Max", "Anna"];

// namesList.push("ssds"); => Methods that modifie the array are not available.
