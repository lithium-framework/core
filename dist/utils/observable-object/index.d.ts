import { ObservableObject } from './models.js';
export declare function createObservableObject<Key extends string, Value extends any>(initialObject: Record<Key, Value>): ObservableObject<Key, Value>;
export { ObservableObject };
