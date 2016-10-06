"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var word_1 = require('./word');
/**
 * A phrase is an expression composed of organized words
 * It's mosly composed of suject + verb + object.
 * The phrase handles the conjugation of its verb, and templating of some components.
 */
var Phrase = (function (_super) {
    __extends(Phrase, _super);
    function Phrase() {
        _super.apply(this, arguments);
    }
    Phrase.prototype.setConjunction = function (conjunction) {
        this.conjunction = conjunction;
    };
    Phrase.prototype.setSubject = function (subject) {
        this.subject = subject;
    };
    Phrase.prototype.setAdverb = function (adverb) {
        this.adverb = adverb;
    };
    Phrase.prototype.setDetail = function (detail) {
        this.detail = detail;
    };
    Phrase.prototype.setVerb = function (verb) {
        this.verb = verb;
    };
    Phrase.prototype.setAdjective = function (adjective) {
        this.adjective = adjective;
    };
    Phrase.prototype.setObject = function (object) {
        this.object = object;
    };
    Phrase.prototype.setSlang = function (slang) {
        this.slang = slang;
    };
    Phrase.prototype.print = function () {
        // Ver: put adverb and conjugate
        this.verb.setComplement(this.adverb);
        this.verb.conjugate(this.subject.third);
        // Put adjective on object
        this.object.setComplement(this.adjective);
        // Writing the expression by printing every components in order
        this.expression =
            (this.conjunction ? this.conjunction.print() + ' ' : '') +
                this.subject.print() + ' ' +
                this.verb.print() + ' ' +
                this.object.print() +
                (this.detail ? ' ' + this.detail.print() : '') +
                (this.slang ? ' ' + this.slang.print() : '') +
                '.';
        // Cleaning: capitalize first, and use Template cleaning method
        this.expression = this.expression.replace(/^./, this.expression.substring(0, 1).toUpperCase());
        this.clean();
        return this.expression;
    };
    return Phrase;
}(word_1.Template));
exports.Phrase = Phrase;

//# sourceMappingURL=http://localhost:4057/build/lib/phrase.js.map
