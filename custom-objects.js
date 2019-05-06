// Let's consider a person object with first and last fields. There are two ways in
// which the name might be displayes: as "first last" or "last, firs".
// Using the functions and objects, we could display the data like this:

function makePerson(first, last) {
    return {
        first: first,
        last: last
    };
}

function personFullName(person) {
    return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
    return person.last + ', ' + person.first;
}

let s = makePerson('Solomon', 'Grundy');
personFullName(s); // "Solomon Grundy"
personFullNameReversed(s); // "Grundy, Solomon"

// The above works but it's pretty ugly. You end up with dozens of functions in your global namespace.
// What we really need is a way to attach a function to an object. Since functions are objects, this iseasy:

function makePersonV1(first, last) {
    return {
        first: first,
        last: last,
        fullName: function() {
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function() {
            return this.last + ', ' + this.first;
        }

    };
}

let s1 = makePersonUpdated('Solomon', 'Grundy');
s1.fullName(); // "Solomon Grundy"
s1.fullNameReversed(); // "Grundy, Solomon"

// See notes on 'this' keyword

// We can take advantage of the 'this' keyword to improve our makePerson function:

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

    let s2 = new Person('Solomon')