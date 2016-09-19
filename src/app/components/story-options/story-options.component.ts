import { Component, Input } from '@angular/core';

import { Writer } from '../../../lib/writer'

@Component({
  selector: 'story-options',
  templateUrl: 'src/app/components/story-options/story-options.component.html',
  styleUrls: ['styles/css/story-options.component.css']
})
export class StoryOptionsComponent {

  public probabilitiesKeys: Array<string>;

  @Input() configuration: any;
}