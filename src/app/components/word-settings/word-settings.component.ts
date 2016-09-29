import {Component, Input, animate, trigger, state, transition, style} from '@angular/core';
import { Template } from '../../../lib/word'

@Component({
  selector: 'word-settings',
  templateUrl: 'src/app/components/word-settings/word-settings.component.html',
  styleUrls: ['styles/css/word-settings.component.css'],
  animations: [
    trigger('collapse', [
      state('false', style({
        'max-height': '0px',
        transform: 'scaleY(0)'
      })),
      state('true', style({
        'max-height': '160px',
        transform: 'scaleY(1)'
      })),
      transition('false <=> true', animate('0.25s ease'))
      ])
  ]
})
export class WordSettingsComponent {

  @Input() word: Template;
  @Input() type: string;
  @Input() id: string;

  private open: string = 'false';

  collapse() {
    this.open = this.open === 'false' ? 'true' : 'false';
  }
}
