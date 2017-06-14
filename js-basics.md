## Welcome to JavaScript

### Important stuff 
`=` is the assignment operator. `var myFavoriteNumber = 23` assigns the numeric expression 23 to the variable `myFavoriteNumber`. 

`==` is the equality operator. It compares expressions on the left to expressions on the right, returning true or false. Numbers inside strings are treated as numbers. `myFavoriteNumber == "23"` and `myFavoriteNumber == 23` are both true.

`===` is the identity operator. It's more strict than `==` and returns true or false if *both* the value and data type of each value are the same. `myFavoriteNumber === "23"` is `false` because `"23"` is a string and `23` is a number.

Be mindful about `+`. In JS, `2 + 2` is `4`, but `2 + "2"` is `"22"` because the `+` operator adds number data types but concatenates string data types. `2 + parseInt("2")` is `4` because parseInt("4") returns the number expression `4`.

### Vocabulary
- **Statement**: Statements are the pieces of our language that *do* things but do not represent values with data types. We use statements to 
  
  - Statement examples:
    - `var` and `const` on their own do not have a value or data type.
    - `if`, `if...else`, `switch` conditionals
    - `while`, `do..while`, `for`, and `forEach` loop
    - keywords in the language like `return`, 

- **Expression**: An expression is a piece of our language that is or returns a value that has a data type. Expressions are literal values, variables that hold literal values, and any operator or function that returns (evaluates to) a value with a data type. Every literal value is an expression. 
  - Expression examples:
    - `true`, `false`, `undefined`, `0`, `23`, `"Bob"`, `[1, 2, 3]`,
    - Operators like `!`, `=`, `==`, `===`, `!=`, `<`, `+`, `*`, etc..
    - Result of running functions like `isNaN("Bob")`, `parseFloat("3.141")`


