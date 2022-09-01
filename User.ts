import { UserType, StreamingServiceType } from "./types";

export class User implements UserType {
  subscriptions: any[];
  constructor(subscriptions) {
    this.subscriptions = subscriptions;
  }

  subscribe(streamingService: StreamingServiceType) {
    let subscriptionIndex: boolean | undefined;

    for (let i = 0; i < this.subscriptions.length; i++) {
      const currentSub = this.subscriptions[i];
      if (JSON.stringify(currentSub) === JSON.stringify(streamingService)) {
        subscriptionIndex = true;
      }
    }

    if (subscriptionIndex) {
      console.log("User aldready has this subscription");
    } else {
      this.subscriptions.push(streamingService);
    }

    return this.subscriptions;
  }

  unsubscribe(streamingService: StreamingServiceType) {
    let subscriptionIndex: number | undefined;
    for (let i = 0; i < this.subscriptions.length; i++) {
      const currentSub = this.subscriptions[i];

      if (JSON.stringify(currentSub) === JSON.stringify(streamingService)) {
        subscriptionIndex = i;
      }
    }

    if (subscriptionIndex !== undefined) {
      this.subscriptions.splice(subscriptionIndex, 1);
    } else {
      console.log("User doesn`t has this subscription");
    }
    return this.subscriptions;
  }
}
