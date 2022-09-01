"use strict";
exports.__esModule = true;
exports.StreamingService = void 0;
var StreamingService = /** @class */ (function () {
    function StreamingService(name, shows, viewsByShowNames) {
        this.name = name;
        this.shows = shows;
        this.viewsByShowNames = viewsByShowNames;
    }
    StreamingService.prototype.addShow = function (show) {
        this.shows.push(show);
    };
    StreamingService.prototype.getMostViewedShowsOfYear = function () {
        var thisYear = new Date().getFullYear();
        var topShows = [];
        var sortedShows = new Map(Array.from(this.viewsByShowNames.entries()).sort(function (a, b) { return b[1] - a[1]; }));
        for (var showName in sortedShows.keys()) {
            var showIndex = this.shows.indexOf(showName);
            if (showIndex !== -1 && this.shows[showIndex].releaseDate.getFullYear() === thisYear) {
                topShows.push(showName);
            }
        }
        var lastArrayIndex = topShows.length;
        return lastArrayIndex > 10 ? topShows.slice(0, 10) : topShows.slice(0, lastArrayIndex);
    };
    StreamingService.prototype.getMostViewedShowsOfGenre = function (genre) {
        var topShows = [];
        var sortedShows = new Map(Array.from(this.viewsByShowNames.entries()).sort(function (a, b) { return b[1] - a[1]; }));
        for (var showName in sortedShows.keys()) {
            var showIndex = this.shows.indexOf(showName);
            if (showIndex !== -1 && this.shows[showIndex].genre === genre) {
                topShows.push(showName);
            }
        }
        var lastArrayIndex = topShows.length;
        return lastArrayIndex > 10 ? topShows.slice(0, 10) : topShows.slice(0, lastArrayIndex);
    };
    return StreamingService;
}());
exports.StreamingService = StreamingService;
