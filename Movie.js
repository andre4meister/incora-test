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
exports.Movie = void 0;
var Show_1 = require("./Show");
var Movie = /** @class */ (function (_super) {
    __extends(Movie, _super);
    function Movie(name, genre, releaseDate, duration) {
        return _super.call(this, name, genre, releaseDate, duration) || this;
    }
    Movie.prototype.getDuration = function () {
        return 515;
    };
    return Movie;
}(Show_1.Show));
exports.Movie = Movie;
