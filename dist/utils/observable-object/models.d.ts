export declare class ObservableObject<key extends string, value extends any> extends Object {
    static init<key extends string, value extends any>(initialObject: Record<key, value>): ObservableObject<key, value>;
    constructor(initialObject: Record<key, value>);
}
