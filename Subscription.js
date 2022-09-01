"use strict";
exports.__esModule = true;
exports.Subscription = void 0;
var Subscription = /** @class */ (function () {
    function Subscription(streamingService) {
        this.streamingService = streamingService;
    }
    Subscription.prototype.watch = function (showName) {
        var showsArray = this.streamingService.shows;
        for (var i = 0; i < this.streamingService.shows.length; i++) {
            if (showsArray[i].name === showName) {
                alert("Playing ".concat(showName));
                break;
            }
            if (i === showsArray.length - 1) {
                alert("This show is absent");
            }
        }
    };
    Subscription.prototype.getRecommendationTrending = function () {
        var thisYear = new Date().getFullYear();
        var mostViewedShows = this.streamingService
            .getMostViewedShowsOfYear()
            .sort(function (a, b) { return a.getDuration() - b.getDuration(); });
        var randomShowIndex = Math.floor(Math.random() * mostViewedShows.length);
        return mostViewedShows[randomShowIndex];
    };
    Subscription.prototype.getRecommendationByGenre = function (genre) {
        var mostViewedShows = this.streamingService
            .getMostViewedShowsOfGenre(genre)
            .sort(function (a, b) { return a.getDuration() - b.getDuration(); });
        var randomShowIndex = Math.floor(Math.random() * mostViewedShows.length);
        return mostViewedShows[randomShowIndex];
    };
    return Subscription;
}());
exports.Subscription = Subscription;
