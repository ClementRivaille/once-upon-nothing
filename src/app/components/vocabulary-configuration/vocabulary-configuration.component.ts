import { Component, OnInit } from '@angular/core';
import { VocabularyService } from '../../services/vocabulary.service';

@Component({
  selector: 'vocabulary-config',
  templateUrl: 'src/app/components/vocabulary-configuration/vocabulary-configuration.component.html',
  styleUrls: ['styles/css/vocabulary-configuration.component.css']
})
export class VocabularyConfigurationComponent implements OnInit {
  vocabulary: any = {};
  components: Array<string> = [];
  shownComponent: string = '';

  constructor(private vocabularyService: VocabularyService) {}

  ngOnInit() {
    this.vocabularyService.getVocabulary().then(data => {
      this.vocabulary = data;
      this.components = Object.getOwnPropertyNames(this.vocabulary);
      this.shownComponent = this.components[0];
    })
  }
}
