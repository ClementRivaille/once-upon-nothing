import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

import { Writer } from '../../../lib/writer';

@Component({
  selector: 'once-upon-nothing-app',
  templateUrl: 'src/app/components/app/app.component.html'
})
export class AppComponent implements OnInit { 
  title = 'Once Upon Nothing';
  // Will generate every sentences for us
  private writer: Writer;
  // Amount of sentences
  public nbSentences = 1;
  // Displayed story
  public story = '';

  constructor(private http: Http) {}

  ngOnInit() {
    this.writer = new Writer();

    // // Load vocubulary resources
    this.http.get('resources/vocabulary.json').forEach(res => {
      let json = res.json();
      this.writer.registerResources(json);

        // Change probabilities here
        // writer.adjectiveProb = 1;
        // writer.adverbProb = 1;
        // writer.detailProb = 1;
        // writer.slangProb = 1;
      this.writeStory();
    }).catch(err => {
      throw err;
    });
  }

  writeStory() {
    this.story = '';
    // Write sentences
    for (let i = 0 ; i < this.nbSentences ; i++) {
      this.story += (i > 0 ? ' ' : '') + this.writer.makePhrase(i > 0);
    }
  }
}