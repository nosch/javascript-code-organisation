/**
 * My Shop
 * @module shop.auth
 * @augments shop
 */
shop.auth = (function () {
    'use strict';

    // Private properties and methods.
    var status = false;

    var identity = {
        id: 100,
        name: 'John Doe',
        role: 'customer'
    };

    // Reveal public API.
    return {
        login: function () {
            status = true;
        },

        logout: function () {
            status = false;
        },

        getStatus: function () {
            return (status) ? identity.name + ' you are logged in as ' + identity.role + '!'
                            : 'You are logged out!';
        }
    };
}());
