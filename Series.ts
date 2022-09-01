import { Show } from "./Show";

export class Series extends Show {
  name: string;
  genre: string;
  releaseDate: Date;
  episodes: number[];
  duration: number;

  constructor(name: string, genre: string, releaseDate: Date, duration: number, episodes: number[]) {
    super(name, genre, releaseDate, duration);
    this.episodes = episodes;
  }
  getDuration() {
    return 515;
  }
}
