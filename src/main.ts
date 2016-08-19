/// <reference path="../typings/index.d.ts" />

import { Writer } from './lib/writer';
const jsonfile = require('jsonfile');

// Will generate every sentences for us
const writer = new Writer();

// Load vocubulary resources
jsonfile.readFile('resources/vocabulary.json', (err, json) => {
  if (!err) {
    writer.registerResources(json);
    let story = '';

    // Change probabilities here
    // writer.adjectiveProb = 1;
    // writer.adverbProb = 1;
    // writer.detailProb = 1;
    // writer.slangProb = 1;

    // Write sentences
    let nbSentences = process.argv[2] && !isNaN(Number(process.argv[2])) && +process.argv[2] > 0 ? process.argv[2] : 1;
    for (let i = 0 ; i < nbSentences ; i++) {
      story += (i > 0 ? ' ' : '') + writer.makePhrase(i > 0);
    }

    // Display them
    console.info(story);
  }
  else {
    throw err;
  }
});
