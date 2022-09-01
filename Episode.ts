import { GenreType } from "./types";
import { Show } from "./Show";

export class Episode extends Show {
  name: string;
  genre: GenreType;
  releaseDate: Date;
  duration: number;

  constructor(name: string, genre: GenreType, releaseDate: Date, duration: number) {
    super(name, genre, releaseDate, duration);
  }
}
