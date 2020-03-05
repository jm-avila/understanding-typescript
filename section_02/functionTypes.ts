function add(num1: number, num2: number): number {
  return num1 + num2;
}

let combineNumbers: (a: number, b: number) => number;
combineNumbers = add;

let combineNumbers2: Function;
combineNumbers2 = combineNumbers;
