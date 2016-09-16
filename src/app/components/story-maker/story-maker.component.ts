import { Component, OnInit } from '@angular/core';
import { VocabularyService } from '../../services/vocabulary.service';

import { Writer } from '../../../lib/writer';

@Component({
  selector: 'story-maker',
  templateUrl: 'src/app/components/story-maker/story-maker.component.html',
  styleUrls: ['styles/css/story-maker.component.css']
})
export class StoryMakerComponent implements OnInit { 
  // Will generate every sentences for us
  private writer: Writer;
  // Displayed story
  public story = '';
  // Writer's configuration
  public configuration = {
    nbSentences: 1,
    probabilities: {}
  }

  constructor(private vocabularyService: VocabularyService) {}

  ngOnInit() {
    this.writer = new Writer();

    this.configuration.probabilities = this.writer.probabilities;

    // Get vocubulary resources
    this.vocabularyService.getVocabulary().then(vocabulary => {
      this.writer.registerResources(vocabulary);
        
      // Write a first story 
      this.writeStory();
    }).catch(err => {
      throw err;
    });
  }

  /**
   * Write a new story
   */
  writeStory() {
    this.story = '';
    // Write sentences
    for (let i = 0 ; i < this.configuration.nbSentences ; i++) {
      this.story += (i > 0 ? ' ' : '') + this.writer.makePhrase(i > 0);
    }
  }
}