import { Component, Input } from '@angular/core';

import { Writer } from '../../../lib/writer'

@Component({
  selector: 'story-options',
  templateUrl: 'src/app/components/story-options/story-options.component.html'
})
export class StoryOptionsComponent {

  public probabilitiesKeys: Array<string>;

  @Input() configuration: any;
}