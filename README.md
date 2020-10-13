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
