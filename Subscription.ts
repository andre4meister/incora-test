import { SubscriptionType, StreamingServiceType } from "./types";

export class Subscription implements SubscriptionType {
  streamingService: StreamingServiceType;
  constructor(streamingService: StreamingServiceType) {
    this.streamingService = streamingService;
  }
  watch(showName: string) {
    const showsArray = this.streamingService.shows;
    for (let i = 0; i < this.streamingService.shows.length; i++) {
      if (showsArray[i].name === showName) {
        alert(`Playing ${showName}`);
        break;
      }
      if (i === showsArray.length - 1) {
        alert("This show is absent");
      }
    }
  }
  getRecommendationTrending() {
    const thisYear = new Date().getFullYear();

    const mostViewedShows = this.streamingService
      .getMostViewedShowsOfYear()
      .sort((a, b) => a.getDuration() - b.getDuration());
    const randomShowIndex = Math.floor(Math.random() * mostViewedShows.length);

    return mostViewedShows[randomShowIndex];
  }
  getRecommendationByGenre(genre: string) {
    const mostViewedShows = this.streamingService
      .getMostViewedShowsOfGenre(genre)
      .sort((a, b) => a.getDuration() - b.getDuration());
    const randomShowIndex = Math.floor(Math.random() * mostViewedShows.length);

    return mostViewedShows[randomShowIndex];
  }
}
