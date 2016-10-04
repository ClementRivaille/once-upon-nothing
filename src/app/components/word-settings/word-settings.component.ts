import {Component, Input, Output, EventEmitter, animate, trigger, state, transition, style, keyframes} from '@angular/core';
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
      ]),
    trigger('delete', [
      state('true', style({
        display: 'none'
      })),
      transition('false => true', animate('0.25s ease', keyframes([
        style({
          opacity: '0',
          transform: 'translateX(-5%)',
          offset: 1
        })
      ])))
    ])
  ]
})
export class WordSettingsComponent {

  @Input() word: Template;
  @Input() type: string;
  @Input() id: string;
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

  private open: string = 'false';
  private deleting: string = 'false';

  collapse() {
    this.open = this.open === 'false' ? 'true' : 'false';
  }

  deleteAnimation() {
    this.deleting = 'true';
  }

  delete() {
    if (this.deleting === 'true') {
      this.onDelete.emit();
    }
  }
}
