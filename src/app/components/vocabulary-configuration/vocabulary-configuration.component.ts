import { Component, OnInit } from '@angular/core';
import { VocabularyService } from '../../services/vocabulary.service';

@Component({
  selector: 'vocabulary-config',
  templateUrl: 'src/app/components/vocabulary-configuration/vocabulary-configuration.component.html',
  styleUrls: ['styles/css/vocabulary-configuration.component.css']
})
export class VocabularyConfigurationComponent implements OnInit {
  vocabulary: any = {};
  types: Array<string> = [];
  selectedType: string = '';

  constructor(private vocabularyService: VocabularyService) {}

  ngOnInit() {
    this.vocabularyService.getVocabulary().then(data => {
      this.vocabulary = data;
      this.types = Object.getOwnPropertyNames(this.vocabulary);
      this.selectedType = this.types[0];
    })
  }

  addWord(type: string) {
    this.vocabulary[type].push({label: 'new (empty)'});
  }

  removeWord(index: number, type: string) {
    this.vocabulary[type].splice(index, 1);
  }
}
