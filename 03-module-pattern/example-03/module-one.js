/**
 * Awesome Application
 * @module  application.moduleOne
 * @augments application
 */
var application = (function (application, global) {
    'use strict';

    // Private properties and methods.
    var name = 'Module One';

    var version = 'v0.0.2';

    // Augment the public parent object.
    application.moduleOne = {
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
