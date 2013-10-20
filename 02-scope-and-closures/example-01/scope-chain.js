var globalVar = 1;

var outer = function () {
    'use strict';

    var outerVar = 2;

    var inner = function () {
        var innerVar = 3;

        var core = function () {
            var coreVar = 4;

            return coreVar + innerVar + outerVar + globalVar;
        };

        return core();
    };

    return inner();
};

outer(); // 10
