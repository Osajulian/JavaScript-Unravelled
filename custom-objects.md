# Custom Objects
JavaScript is a prototype-based language that contains no class statement, as you'd find in C++ or Java.
Instead, JavaScript uses functions as classes.

## 'This'
Used inside of a function, 'this' refers to the current object. What that actually means is specified by the way in which you 
called that function. If you called it using a dot notation or bracket notation on an object, that object becomes 'this'.
If dot notation wasn't used for the call, 'this' refers to the global object. Note that this is a frequent source of mistakes. For example:

```javascript
let s1 = makePersonV1('Solomon', 'Grundy');
let fullName = s1.fullName
fullName(); // undefined undefined
```

When we call fullname() alone, without using s.fullName(), this is bound to the global object. Since there are no global variables called first or last
we get undefined for each one.

