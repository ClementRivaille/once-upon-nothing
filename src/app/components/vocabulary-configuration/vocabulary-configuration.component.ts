import { Component, OnInit } from '@angular/core';
import { VocabularyService } from '../../services/vocabulary.service';

@Component({
  selector: 'vocabulary-config',
  templateUrl: 'src/app/components/vocabulary-configuration/vocabulary-configuration.component.html',
  styleUrls: []
})
export class VocabularyConfigurationComponent implements OnInit {
  vocabulary: any;

  constructor(private vocabularyService: VocabularyService) {}

  ngOnInit() {
    this.vocabularyService.getVocabulary().then(data => {
      this.vocabulary = data;
    })
  }
}
