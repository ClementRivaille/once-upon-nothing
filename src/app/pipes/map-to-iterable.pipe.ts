import { Pipe } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterable {
  /**
   * Create an iterable array from an object properties
   */
  transform(dict: Object) {
    let a = [];
    for (let key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push(key);
      }
    }
    return a;
  }
}