var application = function () {
    'use strict';

    var name = 'Awesome Application';

    var version = 'v0.0.1';

    var init = function () {
        var msg = 'Successfully launched: ';

        return msg + name + ', ' + version;
    };

    return init;
};

var initApp = application();

initApp(); // Successfully launched: Awesome Application, v0.0.1
