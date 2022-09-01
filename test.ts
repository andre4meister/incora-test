import { Series } from "./Series";
import { Movie } from "./Movie";
import { StreamingService } from "./StreamingService";
import { Subscription } from "./Subscription";
import { User } from "./User";

let fast = new Movie("Fast and furious", "Action", new Date(2022, 5, 17), 140);
let witcher = new Series("Witcher", "Fantasy", new Date(2020, 10, 7), 59, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let avengers = new Movie("Avengers", "Fantasy", new Date(2022, 10, 7), 209);
let topGun = new Movie("Top Gun", "Action", new Date(2022, 5, 17), 130);

let megogo = new StreamingService(
  "megogo",
  [fast, witcher, topGun, avengers],
  new Map([
    [fast.name, 6646],
    [witcher.name, 1626],
    [topGun.name, 7949],
    [avengers.name, 6363]
  ])
);
let sweatTV = new StreamingService(
  "sweatTV",
  [fast, witcher, topGun, avengers],
  new Map([
    [fast.name, 6646],
    [witcher.name, 1626],
    [topGun.name, 7949],
    [avengers.name, 6363]
  ])
);
let lowSubsciption = new Subscription(megogo);

let userFirst = new User([]);

// Testing User methods
console.log(userFirst);

userFirst.subscribe(megogo);
userFirst.subscribe(sweatTV);
console.log(userFirst.subscriptions.length);

userFirst.unsubscribe(megogo);
console.log(userFirst.subscriptions.length);

userFirst.unsubscribe(megogo);
console.log(userFirst.subscriptions.length);

console.log(userFirst.subscriptions.length);
console.log(userFirst);

// Testing Subscription methods

lowSubsciption.watch(witcher.name);
console.log(lowSubsciption.getRecommendationTrending());
console.log(lowSubsciption.getRecommendationByGenre("Action"));

// Testing StreamingService

console.log(megogo.getMostViewedShowsOfYear(new Date().getFullYear()));
console.log(megogo.getMostViewedShowsOfGenre("Action"));

// Testing Movie, Epidose, Series

console.log(avengers.getDuration());
console.log(witcher.getDuration());
