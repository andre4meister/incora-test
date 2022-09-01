"use strict";
exports.__esModule = true;
var Series_1 = require("./Series");
var Movie_1 = require("./Movie");
var StreamingService_1 = require("./StreamingService");
var Subscription_1 = require("./Subscription");
var User_1 = require("./User");
var firstShow = new Movie_1.Movie("Fast and furious", "thriller", new Date(2026, 5, 17), 140);
var secondShow = new Series_1.Series("Witcher", "Fantasy", new Date(2020, 10, 7), 59, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var testStreamingService = new StreamingService_1.StreamingService("megogo", ["a", "b", "c", "d"], new Map([
    [firstShow.name, 6646],
    [secondShow.name, 1626]
]));
var lowSubsciption = new Subscription_1.Subscription(testStreamingService);
var userFirst = new User_1.User([lowSubsciption]);
console.log(userFirst);
alert(userFirst)
