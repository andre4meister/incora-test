import { UserType, StreamingServiceType } from "./types";

export class User implements UserType {
  subscriptions: Set<object>;
  constructor(subscriptions) {
    this.subscriptions = subscriptions;
  }

  subscribe(streamingService: StreamingServiceType) {
    if (this.subscriptions.has(streamingService)) {
      throw new Error("User aldready has this subscription");
    } else {
      this.subscriptions.add(streamingService);
    }
    return this.subscriptions;
  }

  unsubscribe(streamingService: StreamingServiceType) {
    if (this.subscriptions.has(streamingService)) {
      this.subscriptions.delete(streamingService);
    } else {
      throw new Error("User doesn`t has this subscription");
    }
    return this.subscriptions;
  }
}
