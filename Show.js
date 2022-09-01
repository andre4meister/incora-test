"use strict";
exports.__esModule = true;
exports.Show = void 0;
var Show = /** @class */ (function () {
    function Show(name, genre, releaseDate, duration) {
        this.name = name;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.duration = duration;
    }
    Show.prototype.getDuration = function () {
        return this.duration;
    };
    return Show;
}());
exports.Show = Show;
