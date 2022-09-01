import { Show } from "./Show";

export class Episode extends Show {
  name: string;
  genre: string;
  releaseDate: Date;
  duration: number;

  constructor(name: string, genre: string, releaseDate: Date, duration: number) {
    super(name, genre, releaseDate, duration);
  }
  getDuration() {
    return 515;
  }
}
