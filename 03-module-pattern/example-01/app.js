/**
 * JavaScript Code Organisation
 * @module Module Pattern
 *
 * @description
 * The basic idea of the Module Pattern is to put your code into an anonymous
 * function and execute it immediately. In addition you wrap a closure around this
 * function to provide privacy.
 * All methods that have to be public must be part of the function's return value.
 * If it is necessary to use any other globals inside our separated code you can
 * pass them as simple parameters to the anonymous function.
 *
 * Example usage: application.launch()
 */
var application = (function (global) {
    'use strict';

    // Private properties and methods.
    var name = 'Awesome Application';

    var version = 'v0.1.0';

    var init = function () {
        return name + ' was successfully launched!';
    };

    // Reveal public API.
    return {
        launch: function () {
            global.console.log(
                init()
            );
        },
        info: function () {
            global.alert('Version ' + version);
        }
    };
}(window));
