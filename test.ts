import { Series } from "./Series";
import { Movie } from "./Movie";
import { StreamingService } from "./StreamingService";
import { Subscription } from "./Subscription";
import { User } from "./User";

let fast = new Movie("Fast and furious 10", "Action", new Date(2022, 5, 17), 140);
let fast9 = new Movie("Fast and furious 9", "Action", new Date(2019, 5, 17), 140);
let fast8 = new Movie("Fast and furious 8", "Action", new Date(2016, 5, 17), 140);
let fast7 = new Movie("Fast and furious 7", "Action", new Date(2014, 5, 17), 140);
let fast6 = new Movie("Fast and furious 6", "Action", new Date(2012, 5, 17), 140);
let fast5 = new Movie("Fast and furious 5", "Action", new Date(2010, 5, 17), 140);
let fast4 = new Movie("Fast and furious 4", "Action", new Date(2008, 5, 17), 140);
let fast3 = new Movie("Fast and furious 3", "Action", new Date(2004, 5, 17), 140);
let fast2 = new Movie("Fast and furious 2", "Action", new Date(2002, 5, 17), 140);
let fast1 = new Movie("Fast and furious", "Action", new Date(2000, 5, 17), 140);

let witcher = new Series("Witcher", "Fantasy", new Date(2020, 10, 7), 59, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let avengers = new Movie("Avengers", "Fantasy", new Date(2022, 10, 7), 209);
let starwars = new Movie("Star Wars", "Fantasy", new Date(2022, 10, 7), 209);
let topGun = new Movie("Top Gun", "Action", new Date(2022, 5, 17), 130);

let megogo = new StreamingService(
  "megogo",
  [fast, witcher, topGun, avengers, fast1, fast2, fast3, fast4, fast5, fast6, fast7, fast8, fast9, starwars],
  new Map([
    [fast.name, 6646],
    [witcher.name, 1626],
    [topGun.name, 7949],
    [avengers.name, 6363]
  ])
);
let sweatTV = new StreamingService(
  "sweatTV",
  [fast, witcher, topGun, avengers, fast1, fast2, fast3, fast4, fast5, fast6, fast7, fast8, fast9, starwars],
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

lowSubsciption.watch(topGun.name);
console.log(lowSubsciption.getRecommendationTrending());
console.log(lowSubsciption.getRecommendationByGenre("Action"));

// Testing StreamingService

console.log(megogo.getMostViewedShowsOfYear(new Date().getFullYear()));
console.log(megogo.getMostViewedShowsOfGenre("Action"));

// Testing Movie, Epidose, Series

console.log(avengers.getDuration());
console.log(witcher.getDuration());
