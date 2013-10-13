/**
 * Awesome Application
 * @module application
 *
 * @description
 * This is an interesting variation of the module pattern that allows a loose
 * coupling of modules. That means, there is no strict loading order.
 */
var application = (function (application, global) {
    'use strict';

    // Private properties and methods.
    var name = 'Awesome Application';

    var version = 'v0.1.0';

    // Public properties and methods.
    application.init = function () {
        return name + ' was successfully launched!';
    };

    application.info = function () {
        return name + ', ' + version;
    };

    // Reveal the application object.
    return application;
}(application || {}, window));
