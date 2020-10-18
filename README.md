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
