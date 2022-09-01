import { SubscriptionType, StreamingServiceType, GenreType } from "./types";

export class Subscription implements SubscriptionType {
  streamingService: StreamingServiceType;
  constructor(streamingService: StreamingServiceType) {
    this.streamingService = streamingService;
  }
  watch(showName: string) {
    const showsArray = this.streamingService.shows;
    console.log(showsArray);
    for (let i = 0; i < this.streamingService.shows.length; i++) {
      if (showsArray[i].name === showName) {
        console.log(`Playing ${showName}`);
        return undefined;
      }
      if (i === showsArray.length - 1) {
        console.log("This show is absent");
      }
    }
  }
  getRecommendationTrending() {
    const thisYear = new Date().getFullYear();

    const mostViewedShows = this.streamingService
      .getMostViewedShowsOfYear(thisYear)
      .sort((a, b) => a.getDuration() - b.getDuration());
    const randomShowIndex = Math.floor(Math.random() * mostViewedShows.length);

    return mostViewedShows[randomShowIndex];
  }
  getRecommendationByGenre(genre: GenreType) {
    const mostViewedShows = this.streamingService
      .getMostViewedShowsOfGenre(genre)
      .sort((a, b) => a.getDuration() - b.getDuration());
    const randomShowIndex = Math.floor(Math.random() * mostViewedShows.length);

    return mostViewedShows[randomShowIndex];
  }
}
