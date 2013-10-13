/**
 * Awesome Application
 * @module  application.moduleTwo
 * @augments application
 */
var application = (function (application, global) {
    'use strict';

    // Private properties and methods.
    var name = 'Module Two';

    var version = 'v0.0.1';

    // Augment the public parent object.
    application.moduleTwo = {
        init: function () {
            return name + ' was loaded successfully!';
        },
        appInfo: function () {
            return name + ', ' + version + ', is part of ' + application.info() + '!';
        }
    };

    // Reveal the augmented application object.
    return application;
}(application || {}, window));
