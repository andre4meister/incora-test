import { Show } from "./Show";
import { GenreType } from "./types";

export class Movie extends Show {
  name: string;
  genre: GenreType;
  releaseDate: Date;
  duration: number;

  constructor(name: string, genre: GenreType, releaseDate: Date, duration: number) {
    super(name, genre, releaseDate, duration);
  }
}
