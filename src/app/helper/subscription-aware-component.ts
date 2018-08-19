import { Subscription } from 'rxjs';

export class SubscriptionAwareComponent {
    private _subscriptions: Subscription[];

    constructor() {
        this._subscriptions = new Array();
    }

    public addSubscription(...subscription: Subscription[]): void {
        this._subscriptions.push(...subscription);
    }

    public unsubscripeAll(): void {
        for (let i = 0; i < this._subscriptions.length; i++) {
            this._subscriptions[i].unsubscribe();
        }
    }
}
