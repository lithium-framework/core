export declare class ObservableObject<key extends string, value extends any = any> extends Object {
    static init<key extends string, value extends any>(initialObject: Record<key, value>): Record<string, value>;
    $data: Record<string, value>;
    constructor(initialObject: Record<key, value>);
    set: <T extends value = any>(key: key, value: T) => value;
    createProxy(): Record<string, value>;
}
