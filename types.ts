import { Episode } from "./Episode";
import { Movie } from "./Movie";
import { Series } from "./Series";

export type UserType = {
  subscriptions: object[];
  subscribe: (streamingService: StreamingServiceType) => typeof this.subscriptions;
  unsubscribe: (streamingService: StreamingServiceType) => typeof this.subscriptions;
};
export type AnyShowType = typeof Series | typeof Movie | typeof Episode;

export type SubscriptionType = {
  streamingService: StreamingServiceType;
  watch: (showName: string) => void;
  getRecommendationTrending: () => AnyShowType;
  getRecommendationByGenre: (genre: GenreType) => AnyShowType;
};

export type StreamingServiceType = {
  name: string;
  shows: any[];
  viewsByShowNames: Map<string, number>;
  addShow: (show: ShowType) => any;
  getMostViewedShowsOfYear: (year: number) => any[];
  getMostViewedShowsOfGenre: (genre: GenreType) => any[];
};

export type ShowType = {
  name: string;
  genre: GenreType;
  releaseDate: Date;
  duration: number;
  getDuration: () => number;
};
export type GenreType = "Fantasy" | "Action" | "Comedy";
