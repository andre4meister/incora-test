"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(subscriptions) {
        this.subscriptions = subscriptions;
    }
    User.prototype.subscribe = function (streamingService) {
        if (this.subscriptions.has(streamingService)) {
            throw new Error("User aldready has this subscription");
        }
        else {
            this.subscriptions.add(streamingService);
        }
        return this.subscriptions;
    };
    User.prototype.unsubscribe = function (streamingService) {
        if (this.subscriptions.has(streamingService)) {
            this.subscriptions["delete"](streamingService);
        }
        else {
            throw new Error("User doesn`t has this subscription");
        }
        return this.subscriptions;
    };
    return User;
}());
exports.User = User;
