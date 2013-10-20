/**
 * My Shop
 * @module shop.basket
 * @augments shop
 */
shop.basket = (function () {
    'use strict';

    // Private properties and methods.
    var basket = [];

    var item = {
        name: 'n.a',
        price: 0.00
    };

    var getItemCount = function () {
        return basket.length;
    };

    // Reveal public API.
    return {
        addItem: function (item) {
            basket.push(item);

            return getItemCount();
        },

        getTotal: function () {
            var total = 0, i;

            for (i = 0; i < getItemCount(); i += 1) {
                total += basket[i].price;
            }

            return total;
        }
    };
}());
