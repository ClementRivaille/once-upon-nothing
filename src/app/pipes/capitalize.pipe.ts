import { Pipe } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class Capitalize {
  /**
   * Capitalize the first letter
   */
  transform(chain: string) {
    let tabChar = chain.split('');
    tabChar[0] = tabChar[0].toUpperCase();
    return tabChar.join('');
  }
}