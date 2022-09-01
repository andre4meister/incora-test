import { StreamingServiceType, ShowType, AnyShowType } from "./types";

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
  getMostViewedShowsOfYear(year: number) {
    const topShows: Array<any> = [];

    let sortedShows = Array.from(this.viewsByShowNames.entries()).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < sortedShows.length; i++) {
      if (this.shows[i].releaseDate.getFullYear() === year) {
        topShows.push(this.shows[i]);
      }
    }

    const lastArrayIndex = topShows.length;
    return lastArrayIndex > 10 ? topShows.slice(0, 10) : topShows.slice(0, lastArrayIndex);
  }

  getMostViewedShowsOfGenre(genre: string) {
    const thisYear = new Date().getFullYear();
    const topShows: Array<AnyShowType> = [];
    let sortedShows = Array.from(this.viewsByShowNames.entries()).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < sortedShows.length; i++) {
      if (this.shows[i].genre === genre && this.shows[i].releaseDate.getFullYear() === thisYear) {
        topShows.push(this.shows[i]);
      }
    }
    const lastArrayIndex = topShows.length;
    return lastArrayIndex > 10 ? topShows.slice(0, 10) : topShows.slice(0, lastArrayIndex);
  }
}
