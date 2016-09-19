"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Template are expressions that can be completed with another expression.
 * The label they take might have special symbols to indicate where to put complements.
 */
var Template = (function () {
    /**
     * @param {string} protected label - Expression to print after completion
     */
    function Template(label) {
        this.label = label;
        /** @type {string} Result of print function */
        this.expression = '';
    }
    ;
    Template.prototype.setComplement = function (complement) { this.complement = complement; };
    ;
    /**
     * Render its label with its complement
     */
    Template.prototype.print = function () {
        this.expression = this.label;
        if (this.complement) {
            // Search complement's position into label ('$0', '$1'…)
            var position = this.complement.position;
            var templatePartSearch = this.expression.match(new RegExp(' ?\\\$' + position + ' ?'));
            if (templatePartSearch) {
                // If found, replace it with complement's print result
                var templatePart = templatePartSearch.pop();
                var filledTemplate = templatePart.replace('$' + position, this.complement.print());
                this.expression = this.expression.replace(templatePart, filledTemplate);
            }
        }
        // Make some fixes before returning the result
        this.clean();
        return this.expression;
    };
    /**
     * Make the rendered text readable, based on several rules
     */
    Template.prototype.clean = function () {
        this.expression = (this.expression || this.label)
            .replace(/ ?\$[0-9]/g, '') // Remove uncompleted template markers ('$0', '$1'…)
            .replace(/  +/g, ' ') // No double spaces
            .replace(/(^ )|( $)/g, '') // No spaces at the beginning or end
            .replace(/((?:^| )a) ([aeiouy])/g, '$1n $2') // 'a' followed by a vowel becomes 'an'
            .replace(/ ([,.])/g, '$1'); // No space before punctuation
    };
    return Template;
}());
exports.Template = Template;
/**
 * Complements have a position indicating to a template where they should be placed
 * They are Templates themself!
 */
var Complement = (function (_super) {
    __extends(Complement, _super);
    /**
     * @param {string} label
     * @param {number} public position - Where to write the complement in the template
     */
    function Complement(label, position) {
        _super.call(this, label);
        this.position = position;
    }
    return Complement;
}(Template));
exports.Complement = Complement;
/** Word is the most basic of text expression */
var Word = (function (_super) {
    __extends(Word, _super);
    function Word() {
        _super.apply(this, arguments);
    }
    return Word;
}(Complement));
exports.Word = Word;
/** A subject is a word that can be associated to a verb. It indicates if it's third person or not. */
var Subject = (function (_super) {
    __extends(Subject, _super);
    /**
     * @param {string}  label
     * @param {boolean} public third
     */
    function Subject(label, third) {
        _super.call(this, label);
        this.third = third;
    }
    ;
    return Subject;
}(Complement));
exports.Subject = Subject;
/**
 * A Verb has two labels: default one, and one for first person
 */
var Verb = (function (_super) {
    __extends(Verb, _super);
    /**
     * @param {string}  protected firstLabel - default label
     * @param {string}  protected thirdLabel - third person label
     * @param {boolean} protected third (optional) - conjugation (third person if true)
     */
    function Verb(firstLabel, thirdLabel, third) {
        _super.call(this, firstLabel);
        this.firstLabel = firstLabel;
        this.thirdLabel = thirdLabel;
        this.third = third;
        this.conjugate(!!third);
    }
    /**
     * Define which label to use: default or third person one
     */
    Verb.prototype.conjugate = function (third) {
        this.third = third;
        this.label = this.third ? this.thirdLabel : this.firstLabel;
    };
    return Verb;
}(Complement));
exports.Verb = Verb;

//# sourceMappingURL=http://localhost:4057/build/lib/word.js.map
