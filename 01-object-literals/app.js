/**
 * JavaScript Code Organisation
 * @module Object Literals
 *
 * @description
 * The easiest way to structure your JS code is to put variables and functions
 * into an object literal. Your variables and functions are now properties and
 * methods of this object and no longer part of the global namespace.
 * Keep in mind that all properties and methods of this object are public.
 *
 * Example usage: application.init()
 */
var application = {
    name: 'Awesome Application',

    version: 'v0.1.0',

    init: function () {
        'use strict';

        return this.name + ' was successfully launched!';
    },

    reveal: function () {
        'use strict';

        return this;
    }
};
