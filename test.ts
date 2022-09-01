import { Series } from "./Series";
import { Episode } from "./Episode";
import { Movie } from "./Movie";
import { StreamingService } from "./StreamingService";
import { Subscription } from "./Subscription";
import { User } from "./User";

let firstShow = new Movie("Fast and furious", "thriller", new Date(2026, 5, 17), 140);
let secondShow = new Series("Witcher", "Fantasy", new Date(2020, 10, 7), 59, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let testStreamingService = new StreamingService(
  "megogo",
  ["a", "b", "c", "d"],
  new Map([
    [firstShow.name, 6646],
    [secondShow.name, 1626]
  ])
);
let lowSubsciption = new Subscription(testStreamingService);
let userFirst = new User([lowSubsciption]);
console.log(userFirst);
