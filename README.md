# understanding-typescript

## Basic Types

- string
- number
- boolean
- objects
  - object
  - array
  - function
  - enum
  - tuple
- any
- unknown
- void
- never
- literal
- alias
- union

### Examples:

String

```
    const hello: string = "Hello";
```

Number

```
    const num: number = 1;
```

Boolean

```
    const bool: boolean = true;
```

Object

```
    const fullName: {first: string, last: string} = {
        fisrt: "Mario",
        last:"Casa"
        };
```

Array

```
    const strList: string[];
    strList.push("HELLO");

    const strNums: number[];
    strNums.push(1);
```

Function

```
    let greeter: (msg: string) => void;
    funtion handleGreet(str: string): void {
        console.log(str);
    };
```

Enum

```
    // numeric
    enum Peanuts {
        CHARLIEBROW
    };
    console.log(Peanuts.CHARLIEBROWN); => 0

    // string
    enum PeanutsAge {
        TEN = "TEN"
    };
    console.log(PeanutsAge.TEN; => "TEN"
```

Note: Enums allow us to define a set of named constants. Are often in all-uppercases but that's not a must-do.

Tuple

```
    const ageName: [string, number] = ["CHARLIEBROW", 10];
```

Note: Specifies both the length of an array and the type of each value at a certain index.

Any

```
    const str: any = "1";
    const num: any = 1;
    const bool: any = true;

    const str1: string = str;
    const num1: number = num;
    const bool1: boolean = str;
```

Note: Allows performing any operation without type checking.

Unknown

```
    let something: unkwown;
    something = "1"
```

Note: All types are assignable to unknown, but the type can only be handled with the any or unkwon type.

Void

```
    function greet(msg: string): void {
        console.log(msg)
    };
```

Note: Returns undefined.

Never

```
    function err(msg: string): never {
        throw msg
    };
```

Note: The return never happens.

Literal

```
    function literally(msg : "Hello" | "Bye"): void {
        if (msg === "Hello"){
            console.log("Greetings Friend");
        }
        if (msg === "Bye"){
            console.log("See You Later");
        }
    };
```

Alias

```
    type ageName = [string, number];
    const charlieData: ageName = ["CHARLIEBROW", 10];
```

Union

```
    let number: (string | number) = 1
    number = "1"
```

## The Compiler

tsc fileName

tsc fileName -w

### Generate config file

tsc --init

Note: Once a tsconfig.json has been generated you can use tsc to compile all the project.

Important Options:

- target: ECMAScript target version
  - es6: is the equivalent to setting the lib options found under the lib bullet.
- module: module code generation
- lib: library files to be included in the compilation
  - dom: DOM Iterable APIs
  - es6
  - dom.iterable: DOM Iterable APIs
  - scripthost: Windows Script Host APIS
- outDir: Redirect output structure to the directory
- rootDir: root directory of input files

## Interfaces

Interfaces are capable of describing the wide range of shapes that JavaScript objects can take.

```
    interface Person {
        firstName: string;
        lastName: string;
        age: number;
    }
```

### Optional Properties

Not all properties of an interface may be required.

Optional properties are denoted by a ? at the end of the property name in the declaration.

```
    interface Person {
        firstName: string;
        lastName: string;
        nickname?: string;
        age: number;
    }
```

### Readonly properties

Some properties should only be modifiable when an object is first created. You can specify this by putting readonly before the name of the property.

```
    interface Person {
        firstName: string;
        lastName: string;
        nickname?: string;
        age: number;
        readonly birthdate: string;
    }
```

### Readonly Arrays

TypeScript comes with a ReadonlyArray<TYPE> type with all mutating methods removed.

Even assigning the entire ReadonlyArray back to a normal array is illegal. Unless overriden with a type assertion.

```
    const listA: number[] = [1,2,3,4];
    let listB: ReadonlyArray<number> = listA;
    listA = listB as number[];
```

### Function Types

Interfaces are also capable of describing function types.

To describe a function type with an interface, we give the interface a call signature. This is like a function declaration with only the parameter list and return type given.

```
    interface Greeter {
        (text: string): void
    }

    let greeter: Greeter = (msg) => console.log(msg)
```

### Indexable Types

We can also describe types that we can “index into”. Indexable types have an index signature that describes the types we can use to index into the object, along with the corresponding return types when indexing.

```
    interface StrArray {
        [index: number]: string;
    }

    let myArray: StrArray;
    myArray = ["Bob", "Marley"];
```

Above, the interface has an index signature.

There are two types of supported index signatures: string and number. It is possible to support both types of indexers, but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer. This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object.

While string index signatures are a powerful way to describe the “dictionary” pattern, they also enforce that all properties match their return type. This is because a string index declares that obj.property is also available as obj["property"].

## Advanced Types

- Union Types
- Intersection Types
- Type Guards
- Discriminated Unions
- Type Casting
- Function Overloads

### Union Types

A union type describes a value that can be one of several types. We use the vertical bar (|) to separate each type, so number | string | boolean is the type of a value that can be a number, a string, or a boolean.

### Intersection Types

Intersection types are closely related to union types, but they are used very differently. An intersection type combines multiple types into one using the ampersand, (&) or by extending types or interfaces. This allows you to add together existing types to get a single type that has all the features you need.

### Type Guards

A type guard is some expression that performs a runtime check that guarantees the type in some scope.

To define a type guard, we simply need to define a function whose return type is a type predicate:

### Discriminated Unions

A common technique for working with unions is to have a single field which uses literal types which you can use to let TypeScript narrow down the possible current type.

### Type Casting

Type castings allow you to convert a variable from one type to another.

In TypeScript, you can use the as keyword or <> operator for type castings.

### Function Overloads

JavaScript is inherently a very dynamic language. It’s not uncommon for a single JavaScript function to return different types of objects based on the shape of the arguments passed in.

### Optional Chaining

With optional chaining by using the quetion mark (?) symbol you can safely access nested properties and nested objects in our object data.

### Nullish Coalescing

The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

Contrary to the logical OR (||) operator, the left operand is returned if it is a falsy value which is not null or undefined. In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable (eg. '' or 0). See below for more examples.

## Generics

The implementation of generics in Typescript give us the ability to pass in a range of types to a component, adding an extra layer of abstraction and re-usability to your code. Generics can be applied to functions, interfaces and classes in Typescript.

A generic type is a type which is connected to some other type and is very flexible regarding which type the other type is.

Type variables are also referred to as type parameters.

e.g.

```
    const firstNames: Array<string> = [""];
    const lastNames: string[]> = [""];
```

Generic<T>

T stands for Type, and is commonly used as the first type variable name when defining generics. But in reality T can be replaced with any valid name. Not only this, we are not limited to only one type variable — we can bring in any amount we wish to define.

### Built-in generics:

- Promise
- Array
- Readonly
  - prevents properties of an object from being reassign any other values to it's name.
- ReadonlyArray
  - throws errors when array methods that mutate the original array are used.
- ReturnType
  - gets you the return type of any function, including functions inside classes.
- Partial
  - takes all properties from one type, and makes them optional. Partial<T> helps you getting autocomplete and type-checking.
- Required
  - Required<T> is the opposite to Partial<T>, makes every property necessary.
- NonNullable
  - helps ensure you don’t pass null or undefined to your functions. Complements strictNullChecks compiler flag, when active.
- Pick
  - With Pick<T, K extends keyof T> you can create a new type from an existing object, by only using a selected list of properties.
- Record
  - Record<K, T>, with it you can say that every key K should be of type T. It helps when dealing with other generic types.
- Extract
  - Extract<T, K> extracts all types from T that are assignable to K.
- Exclude
  - Exclude<T, K> excludes all types from T that are assignable to K. It’s like the opposite of Extract.
- Omit
  - Since version 3.5, TypeScript includes the Omit<T, K> helper type. Omit<T, K> is a shortcut for Pick<T, Exclude<keyof T, K>>.
- Bottom line

### Constraints

A requirement on what T can be. To do so, we can create an interface that describes our constraint and use this interface and the extends keyword to denote our constraint.

### Generic Clases

When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor functions.
