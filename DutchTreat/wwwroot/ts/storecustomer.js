"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StoreCustomer = (function () {
    function StoreCustomer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.visists = 0;
    }
    StoreCustomer.prototype.showName = function () {
        this.firstName + " " + this.lastName;
    };
    return StoreCustomer;
}());
exports.StoreCustomer = StoreCustomer;
//# sourceMappingURL=storecustomer.js.map