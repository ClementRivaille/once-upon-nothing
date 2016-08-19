import { Template, Complement, Text, Subject, Verb } from './word';

/**
 * A phrase is an expression composed of organized words
 * It's mosly composed of suject + verb + target.
 * The phrase handles the conjugation of its verb, and templating of some components.
 */
export class Phrase extends Template {
  protected conjunction: Text;
  protected subject: Subject;
  protected adverb: Complement;
  protected detail: Text;
  protected verb: Verb;
  protected adjective: Complement;
  protected target: Template;
  protected slang: Text;

  setConjunction(conjunction: Text) {
    this.conjunction = conjunction;
  }
  setSubject(subject: Subject) {
    this.subject = subject;
  }
  setAdverb(adverb: Complement) {
    this.adverb = adverb;
  }
  setDetail(detail: Text) {
    this.detail = detail;
  }
  setVerb(verb: Verb) {
    this.verb = verb;
  }
  setAdjective(adjective: Complement) {
    this.adjective = adjective;
  }
  setTarget(target: Template) {
    this.target = target;
  }
  setSlang(slang: Text) {
    this.slang = slang;
  }

  print(): string {
    // Ver: put adverb and conjugate
    this.verb.setComplement(this.adverb);
    this.verb.conjugate(this.subject.third);
    // Put adjective on target
    this.target.setComplement(this.adjective);

    // Writing the expression by printing every components in order
    this.expression = 
      (this.conjunction ? this.conjunction.print() + ' ' : '') +
      this.subject.print() + ' ' +
      this.verb.print() + ' ' +
      this.target.print() +
      (this.detail ? ' ' + this.detail.print() : '') +
      (this.slang ? ' ' + this.slang.print() : '') +
      '.';

    // Cleaning: capitalize first, and use Template cleaning method
    this.expression = this.expression.replace(/^./, this.expression.substring(0, 1).toUpperCase());
    this.clean();
    
    return this.expression;
  }
}