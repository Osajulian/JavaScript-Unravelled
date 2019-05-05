Starting in ECMAScript 5, reserved words may be used as object property names "in the buff". 
This means that they don't need to be "clothed" in quotes when defining object literals.

Starting in ECMAScript 2015, object keys can be defined by the variable using bracket
notation upon being created. {[phoneType]: 12345} is possible instead of just
```javascript 
let userPhone = {};
userPhone[phoneType] = 12345
```