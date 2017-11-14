"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());
exports.Order = Order;
var OrderItem = (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;
//# sourceMappingURL=order.js.map