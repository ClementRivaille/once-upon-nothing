import { Phrase } from './phrase';
import { Word, Subject, Verb } from './word';

/**
 * Create a phrase selecting random labels and print it
 */
export class Writer {
  // JSON containing labels
  private resources: any = {};

  // Probability of some phrase's parts
  public probabilities: any = {
    adverb: 0.6,
    adjective: 0.6,
    detail: 0.6,
    slang: 0.2
  };

  /** Set JSON resources */
  registerResources(resources) {
    this.resources = resources;
  }

  /** Make and print a random phrase 
  * @param doConjunctions {boolean} - Specify if the sentence must begin with a conjunction
  */
  makePhrase(doConjunction: boolean) {
    let phrase = new Phrase('');

    // Phrase building

    let conjunction = pickOne(this.resources.conjunctions);
    if (doConjunction) {
      phrase.setConjunction(new Word(conjunction.label));
    }

    let subject = pickOne(this.resources.subjects);
    phrase.setSubject(new Subject(subject.label, subject.third));

    let verb = pickOne(this.resources.verbs);
    phrase.setVerb(new Verb(verb.label, verb.third));


    let adverb = pickOne(this.resources.adverbs);
    if (Math.random() < this.probabilities.adverb) {
      phrase.setAdverb(new Word(adverb.label, adverb.position));
    }

    let target = pickOne(this.resources.targets);
    phrase.setTarget(new Word(target.label));

    let adjective = pickOne(this.resources.adjectives);
    if (Math.random() < this.probabilities.adjective) {
      phrase.setAdjective(new Word(adjective.label, adjective.position));
    }

    let detail = pickOne(this.resources.details);
    if (Math.random() < this.probabilities.detail) {
      phrase.setDetail(new Word(detail.label));
    }

    let slang = pickOne(this.resources.slangs);
    if (Math.random() < this.probabilities.slang) {
      phrase.setSlang(new Word(slang.label));
    }

    // Print phrase
    return phrase.print();
  }
}

/**
 * Utilitary function to pick randomly an object from an array
 * @param {array} array
 */
function pickOne(array) {
  return array[Math.floor(Math.random() * array.length)];
}