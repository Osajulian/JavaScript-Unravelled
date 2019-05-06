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



## 'new'
'new' is strongly related to 'this'. It creates a brand new empty object, and then calls the function specified, with 'this' set to that new object. Notice though that the function specified with 'this' does not return a value but merely modifies the 'this' object. It's 'new' that returns thee 'this' object to the calling site. Functions that are designed to be called by 'new' are called constructor functions. Common practice is to capitalize these functions as a reminder to call them with 'new'


```javascript
function Person(first, last) {
        this.first;
        this.last;
        this.fullName = function() {
            return this.first + ' ' + this.last;
        };
        this.fullNameReversed = function() {
            return this.last + ', ' + this.first;
        };

    }
    let s2 = new Person('Solomon', 'Wilson');
    ```

## prototype
Person.prototype is an object shared by all instances of Person. It forms part of a lookup chain (that has a special name, "prototype chain"): any time you attempt to access a property of Person that isn't set, JavaScript will check Person.prototype to see if that property exists there instead. As a result, anything assigned to person.prototype becomes available to all instances of that constructor via the 'this' object.

This is an incredible powerfull tool. JavaScript lets you modify something's prototype at any time in your program, which means you can add extra methods to existing objects at runtime.

---javascript
let s = new Person('Solomon', 'Grundy');
s.firstNameCaps(); // TypeError on line 1: s.fullNameCaps is not a function

Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase();
}

s.firstNameCaps(); // "SOLOMON"
---

Interestingly, you can also add things to the prototype of built-in JavaScript objects. Let's add a method to String that returns that string in reverse:

---javascript 
let s = 'Solomon';
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
    let r = '';
    for(let i= this.length -1; i>=0; i--) {
        r += this[i];
    }
    return r;
};

s.reversed(); // nomoloS

// Our new method even works on string literals!
'This can now be reversed'.reversed(); // desrever eb won nac sihT
---


As mentioned before, the prototype forms part of a chain. The root of that chain is Object.prototype, whose methods include toString() - it is this method that is called when you try to represent an object as a string. This is useful for debugging our Person objects:

---javascript
let s = new Person('Solomon', 'Grundy');
s.toString(); // [object, object]

Person.prototype.toString = function() {
    return '<Person: ' + this.fullName() + '>';
}

s.toString(); // "<Person: Solomon Grundy>"
---