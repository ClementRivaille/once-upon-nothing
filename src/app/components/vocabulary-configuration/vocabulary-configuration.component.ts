import { Component, OnInit } from '@angular/core';
import { VocabularyService } from '../../services/vocabulary.service';
import { ipcRenderer } from 'electron';

@Component({
  selector: 'vocabulary-config',
  templateUrl: 'src/app/components/vocabulary-configuration/vocabulary-configuration.component.html',
  styleUrls: ['styles/css/vocabulary-configuration.component.css']
})
export class VocabularyConfigurationComponent implements OnInit {
  // Vowabulary properties
  vocabulary: any = {};
  types: Array<string> = [];
  selectedType: string = '';

  // Indicates if the app is running locally or not
  local: boolean = false;
  // Alert message
  showAlert: boolean = false;
  // Path of saved files
  savedIn: string = '';

  // Labels describing each type
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


  constructor(private vocabularyService: VocabularyService) {
    // Check if running locally
    if (typeof ipcRenderer != 'undefined') {
      this.local = true;
    }
  }

  ngOnInit() {
    // Retrieve vocabulary from service
    this.vocabularyService.getVocabulary().then(data => {
      this.vocabulary = data;
      this.types = Object.getOwnPropertyNames(this.guideLabels);
      this.selectedType = this.types[0];
    })
  }

  /** Create a new word in type category */
  addWord(type: string) {
    this.vocabulary[type].push({label: 'new (empty)'});
  }

  /** Delete a word from a category by its index */
  removeWord(index: number, type: string) {
    this.vocabulary[type].splice(index, 1);
  }

  /** On local app only, save the current vocabulary into a file */
  saveVocabulary() {
    this.vocabularyService.saveVocabulary().then((path) => {
      // Display success message
      this.showAlert = true;
      this.savedIn = path;
    });
  }
}
