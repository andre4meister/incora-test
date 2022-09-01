import { ShowType } from "./types";
export class Show implements ShowType {
  name: string;
  genre: string;
  releaseDate: Date;
  duration: number;

  constructor(name: string, genre: string, releaseDate: Date, duration: number) {
    this.name = name;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.duration = duration;
  }
  getDuration() {
    return this.duration;
  }
}
