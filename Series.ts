import { Show } from "./Show";
import { GenreType } from "./types";

export class Series extends Show {
  name: string;
  genre: GenreType;
  releaseDate: Date;
  episodes: number[];
  duration: number;

  constructor(name: string, genre: GenreType, releaseDate: Date, duration: number, episodes: number[]) {
    super(name, genre, releaseDate, duration);
    this.episodes = episodes;
  }
}
