import { StreamingServiceType, ShowType } from "./types";

export class StreamingService implements StreamingServiceType {
  name;
  shows;
  viewsByShowNames: Map<string, number>;
  constructor(name: string, shows: any[], viewsByShowNames: Map<string, number>) {
    this.name = name;
    this.shows = shows;
    this.viewsByShowNames = viewsByShowNames;
  }
  addShow(show: ShowType) {
    this.shows.push(show);
  }
  getMostViewedShowsOfYear() {
    const thisYear = new Date().getFullYear();
    const topShows: Array<any> = [];
    let sortedShows = new Map(Array.from(this.viewsByShowNames.entries()).sort((a, b) => b[1] - a[1]));

    for (let showName in sortedShows.keys()) {
      const showIndex = this.shows.indexOf(showName);
      if (showIndex !== -1 && this.shows[showIndex].releaseDate.getFullYear() === thisYear) {
        topShows.push(showName);
      }
    }
    const lastArrayIndex = topShows.length;
    return lastArrayIndex > 10 ? topShows.slice(0, 10) : topShows.slice(0, lastArrayIndex);
  }
  getMostViewedShowsOfGenre(genre: string) {
    const topShows: Array<any> = [];
    let sortedShows = new Map(Array.from(this.viewsByShowNames.entries()).sort((a, b) => b[1] - a[1]));

    for (let showName in sortedShows.keys()) {
      const showIndex = this.shows.indexOf(showName);
      if (showIndex !== -1 && this.shows[showIndex].genre === genre) {
        topShows.push(showName);
      }
    }
    const lastArrayIndex = topShows.length;
    return lastArrayIndex > 10 ? topShows.slice(0, 10) : topShows.slice(0, lastArrayIndex);
  }
}
