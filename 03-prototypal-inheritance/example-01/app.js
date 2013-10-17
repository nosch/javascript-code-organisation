/**
 * Constructor function for Person objects.
 * @constructor
 */
var Person = function (name) {
    'use strict';

    /**
     * The name of the person.
     * @type {*|string}
     */
    this.name = name || 'n.a.';

    /**
     * The age of the person.
     * @type {number}
     */
    this.age = 0;

    /**
     * The gender of the person.
     * @type {string}
     */
    this.gender = 'n.a';
};

/**
 * Sets the age of the person.
 * @param age
 */
Person.prototype.setAge = function (age) {
    'use strict';

    this.age = age;
};

/**
 * Sets the gender of the person.
 * @param gender
 */
Person.prototype.setGender = function (gender) {
    'use strict';

    this.gender = gender;
};

// Creating persons...
var norbert = new Person('Norbert');
norbert.setAge(44);
norbert.setGender('male');

var irina = new Person('Irina');
irina.setAge(42);
irina.setGender('female');

var unknown = new Person();

// Debug output...
console.log(norbert);
console.log(irina);
console.log(unknown);
