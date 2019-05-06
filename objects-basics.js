// There are 2 basic ways to create an empty object:

let obj1 = new Object();

// And

//Object literal (should be preferred at all times)
let obj2 = {};

//Object literal syntax can be used to initialize an object in its entirety:

let obj = {
    name: 'Carrot',
    details: {
        color: 'orange',
        size: 12
    }
}

// Attribute access can be chained together

obj.details.color; // orange
obj['details']['size']; // 12

// The following example creates an object prototype, Pwerson and an instance of that prototype, you.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Define an object - we are creating a new person named 'you', aged 24
let you = new Person('You', 24);
console.log(you.age);

// Once created, an object's properties can again be accessed in one of two ways:

// dot notation
obj.name = 'Simon';
let name = obj.name;

//And

// bracket notation
obj['name'] = 'Simon';
let name = obj['name'];

/* 
Dot notation and bracket notation are semantically equivalent. The latter has the advantage that the name
of the property is provided as a string, which means it can be calculated at run-time. However, using this
method prevents some JavaScript engine and minifier optimizations being applied. It can also be used to set
and get prperties with names that are reserved words **( See notes for changes to this starting in ECMAScript5)**.
*/

obj.for = 'Simon'; // Syntax error, because 'for' is a reserved word
obj['for'] = 'Simon'; // works fine
