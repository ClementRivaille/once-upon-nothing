import { Pipe } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterable {
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