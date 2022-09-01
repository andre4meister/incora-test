export type UserType = {
  subscriptions: Set<object>;
  subscribe: (streamingService: StreamingServiceType) => typeof this.subscriptions;
  unsubscribe: (streamingService: StreamingServiceType) => typeof this.subscriptions;
};
export type SubscriptionType = {
  streamingService: StreamingServiceType;
  watch: (showName: string) => void;
  getRecommendationTrending: () => ShowType;
  getRecommendationByGenre: (genre: string) => ShowType;
};
export type StreamingServiceType = {
  name: string;
  shows: any[];
  viewsByShowNames: Map<string, number>;
  addShow: (show: ShowType) => any;
  getMostViewedShowsOfYear: () => any[];
  getMostViewedShowsOfGenre: (genre: string) => any[];
};
export type ShowType = {
  name: string;
  genre: string;
  releaseDate: Date;
  duration: number;
  getDuration: () => number;
};
