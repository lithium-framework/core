import { ObservableObject } from './models.js';

export function createObservableObject< Key extends string , Value extends any >( initialObject:Record< Key , Value > ){
  return ObservableObject.init< Key , Value >( initialObject );
}

export { ObservableObject };