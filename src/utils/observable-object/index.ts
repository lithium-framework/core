import { ObservableObject } from './models';

export function createObservableObject< Key extends string , Value extends any >( initialObject:Record< Key , Value > ){
  return ObservableObject.init< Key , Value >( initialObject );
}