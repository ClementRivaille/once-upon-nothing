import { Pipe } from '@angular/core';

@Pipe({
  name: 'wordLabel'
})
export class WordLabel {
  /**
   * Perform the same treatment as Template.clean()
   */
  transform(label: string) {
    return label
      .replace(/ ?\$[0-9]/g, '')
      .replace(/  +/g, ' ')
      .replace(/(^ )|( $)/g, '')
      .replace(/((?:^| )a) ([aeiouy])/g, '$1n $2')
      .replace(/ ([,.])/g, '$1');
  }
}