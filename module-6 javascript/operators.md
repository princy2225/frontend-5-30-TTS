# JavaScript Operators

JavaScript includes operators as special symbols used to perform operations on operands (values and variables). For example, `+` is an operator used for addition.

Here are the different types of operators in JavaScript:

 1. Arithmetic Operators
Arithmetic operators are used to perform arithmetic on numbers:

| Operator | Description      | Example         |
| :------: | :--------------- | :-------------- |
|   `+`    | Addition         | `10 + 20 = 30`  |
|   `-`    | Subtraction      | `20 - 10 = 10`  |
|   `*`    | Multiplication   | `10 * 20 = 200` |
|   `/`    | Division         | `20 / 10 = 2`   |
|   `%`    | Modulus (Remainder)| `20 % 10 = 0`   |
|   `++`   | Increment        | `var a = 10; a++; // now a is 11` |
|   `--`   | Decrement        | `var a = 10; a--; // now a is 9` |
|   `**`   | Exponentiation (ES2016) | `10 ** 2 = 100` |

 2. Assignment Operators
Assignment operators assign values to JavaScript variables:

| Operator | Example  | Same As      |
| :------: | :------- | :----------- |
|   `=`    | `x = y`  | `x = y`      |
|   `+=`   | `x += y` | `x = x + y`  |
|   `-=`   | `x -= y` | `x = x - y`  |
|   `*=`   | `x *= y` | `x = x * y`  |
|   `/=`   | `x /= y` | `x = x / y`  |
|   `%=`   | `x %= y` | `x = x % y`  |
|   `**=`  | `x **= y`| `x = x ** y` |

 3. Comparison Operators
Comparison operators are used in logical statements to determine equality or difference between variables or values.

| Operator | Description              | Example                      |
| :------: | :----------------------- | :--------------------------- |
|   `==`   | Equal to                 | `10 == "10"` returns `true`  |
|   `===`  | Equal value and equal type | `10 === "10"` returns `false`|
|   `!=`   | Not equal                | `10 != 20` returns `true`    |
|   `!==`  | Not equal value or not equal type | `10 !== "10"` returns `true` |
|   `>`    | Greater than             | `20 > 10` returns `true`     |
|   `<`    | Less than                | `10 < 20` returns `true`     |
|   `>=`   | Greater than or equal to | `20 >= 10` returns `true`    |
|   `<=`   | Less than or equal to    | `10 <= 20` returns `true`    |
|   `?`    | Ternary operator         | `(10 > 5) ? "Yes" : "No"`    |

 4. Logical Operators
Logical operators are used to determine the logic between variables or values.

| Operator | Description | Example                      |
| :------: | :---------- | :--------------------------- |
|   `&&`   | Logical AND | `(10 > 5 && 20 > 10)` is `true`  |
|   `||`   | Logical OR  | `(10 > 5 || 20 < 10)` is `true`  |
|   `!`    | Logical NOT | `!(10 == 20)` is `true`        |

 5. Type Operators
| Operator | Description              | Example                      |
| :------: | :----------------------- | :--------------------------- |
| `typeof` | Returns the type of a variable | `typeof "John"` returns `"string"` |
| `instanceof` | Returns `true` if an object is an instance of an object type | ` "John" instanceof String` returns `false` |

 6. Bitwise Operators
Bitwise operators work on 32-bit numbers.

| Operator | Description |
| :------: | :---------- |
|   `&`    | AND         |
|   `|`    | OR          |
|   `~`    | NOT         |
|   `^`    | XOR         |
|   `<<`   | Left shift  |
|   `>>`   | Right shift |
|  `>>>`   | Unsigned right shift |
