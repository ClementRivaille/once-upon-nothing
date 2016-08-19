/**
 * Text: Prints its content into a string
 */
export interface Text {
  print(): string;
}

/**
 * Template are expressions that can be completed with another expression.
 * The label they take might have special symbols to indicate where to put complements.
 */
export abstract class Template implements Text {
  /** @type {Complement} Text to insert into the template */
  protected complement: Complement;
  /** @type {string} Result of print function */
  protected expression: string = '';

  /**
   * @param {string} protected label - Expression to print after completion
   */
  constructor(protected label: string) {};

  setComplement(complement: Complement) { this.complement = complement};

  /**
   * Render its label with its complement
   */
  print() {
    this.expression = this.label;

    if (this.complement) {
      // Search complement's position into label ('$0', '$1'…)
      let position = this.complement.position;
      let templatePartSearch = this.expression.match(new RegExp(' ?\\\$' + position + ' ?'));

      if (templatePartSearch) {
        // If found, replace it with complement's print result
        let templatePart = templatePartSearch.pop();
        let filledTemplate = templatePart.replace('$' + position, this.complement.print());
        this.expression = this.expression.replace(templatePart, filledTemplate);
      }
    }

    // Make some fixes before returning the result
    this.clean();
    return this.expression;
  }

  /**
   * Make the rendered text readable, based on several rules
   */
  clean() {
    this.expression = (this.expression || this.label)
      .replace(/ ?\$[0-9]/g, '')                      // Remove uncompleted template markers ('$0', '$1'…)
      .replace(/  +/g, ' ')                           // No double spaces
      .replace(/(^ )|( $)/g, '')                      // No spaces at the beginning or end
      .replace(/((?:^| )a) ([aeiouy])/g, '$1n $2')    // 'a' followed by a vowel becomes 'an'
      .replace(/ ([,.])/g, '$1');                     // No space before punctuation
  }
}

/**
 * Complements have a position indicating to a template where they should be placed
 * They are Templates themself!
 */
export abstract class Complement extends Template {
  /**
   * @param {string} label
   * @param {number} public position - Where to write the complement in the template
   */
  constructor(label: string, public position?: number) {
    super(label);
  }
}

/** Word is the most basic of text expression */
export class Word extends Complement {}

/** A subject is a word that can be associated to a verb. It indicates if it's third person or not. */
export class Subject extends Complement {
  /**
   * @param {string}  label
   * @param {boolean} public third
   */
  constructor(label: string, public third: boolean) {
    super(label);
  };
}

/**
 * A Verb has two labels: default one, and one for first person
 */
export class Verb extends Complement {
  /**
   * @param {string}  protected firstLabel - default label
   * @param {string}  protected thirdLabel - third person label
   * @param {boolean} protected third (optional) - conjugation (third person if true)
   */
  constructor(protected firstLabel: string, protected thirdLabel: string, protected third?: boolean) {
    super(firstLabel);
    this.conjugate(!!third);
  }

  /**
   * Define which label to use: default or third person one
   */
  conjugate(third: boolean) {
    this.third = third;
    this.label = this.third ? this.thirdLabel : this.firstLabel;
  }
}
