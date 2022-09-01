"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Series = void 0;
var Show_1 = require("./Show");
var Series = /** @class */ (function (_super) {
    __extends(Series, _super);
    function Series(name, genre, releaseDate, duration, episodes) {
        var _this = _super.call(this, name, genre, releaseDate, duration) || this;
        _this.episodes = episodes;
        return _this;
    }
    Series.prototype.getDuration = function () {
        return 515;
    };
    return Series;
}(Show_1.Show));
exports.Series = Series;
