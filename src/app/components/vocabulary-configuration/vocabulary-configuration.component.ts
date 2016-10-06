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

  guideLabels: any = {
    'subjects': 'Subjects are nouns placed at the beginning of a sentence. Since they conjugate the verb, they must declare if they do it in third person.',
    'adverbs': 'Adverbs are not strictly adverbs: they are complementing a verb in a sentence. They has to be placed before or after it.',
    'verbs': 'Verbs describe an action toward something. The have two labels: one by default, and one for third person. They can also be complemented by advebrs. Therefore, their template has to indicate where to place it if it goes before the verb ($0) or after it ($1). Some verbs can accept only one type of adverb, or even none.',
    'adjectives': 'Adjectives are not necessarily adjectives: they complement the object in the sentence. They are placed before or after it.',
    'objects': 'Objects are receivers of the action of a sentence. They can be complemented by an adjective. Thus, their template indicate where to place the adjective before ($0) and after ($1). Some objects can accept only one type of adjective, or none.',
    'details': 'Details provide context at the end of a sentence. They can be single words, or complete verbal structure.',
    'slangs': 'Slangs are silly things added at the very end of a sentence. They purpose is mostly to make it sound even more stupid.',
    'conjunctions': 'When a story use several sentences, those are linked by conjunctions. Conjuctions are placed at the very beginning of a sentence, to make a transition with the previous one.'
  }

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
