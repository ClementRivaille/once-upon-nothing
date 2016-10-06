"use strict";
var phrase_1 = require('./phrase');
var word_1 = require('./word');
/**
 * Create a phrase selecting random labels and print it
 */
var Writer = (function () {
    function Writer() {
        // JSON containing labels
        this.resources = {};
        // Probability of some phrase's parts
        this.probabilities = {
            adverb: 0.6,
            adjective: 0.6,
            detail: 0.6,
            slang: 0.2
        };
    }
    /** Set JSON resources */
    Writer.prototype.registerResources = function (resources) {
        this.resources = resources;
    };
    /** Make and print a random phrase
    * @param doConjunctions {boolean} - Specify if the sentence must begin with a conjunction
    */
    Writer.prototype.makePhrase = function (doConjunction) {
        var phrase = new phrase_1.Phrase('');
        // Phrase building
        var conjunction = pickOne(this.resources.conjunctions);
        if (doConjunction) {
            phrase.setConjunction(new word_1.Word(conjunction.label));
        }
        var subject = pickOne(this.resources.subjects);
        phrase.setSubject(new word_1.Subject(subject.label, subject.third));
        var verb = pickOne(this.resources.verbs);
        phrase.setVerb(new word_1.Verb(verb.label, verb.third));
        var adverb = pickOne(this.resources.adverbs);
        if (Math.random() < this.probabilities.adverb) {
            phrase.setAdverb(new word_1.Word(adverb.label, adverb.position));
        }
        var object = pickOne(this.resources.objects);
        phrase.setObject(new word_1.Word(object.label));
        var adjective = pickOne(this.resources.adjectives);
        if (Math.random() < this.probabilities.adjective) {
            phrase.setAdjective(new word_1.Word(adjective.label, adjective.position));
        }
        var detail = pickOne(this.resources.details);
        if (Math.random() < this.probabilities.detail) {
            phrase.setDetail(new word_1.Word(detail.label));
        }
        var slang = pickOne(this.resources.slangs);
        if (Math.random() < this.probabilities.slang) {
            phrase.setSlang(new word_1.Word(slang.label));
        }
        // Print phrase
        return phrase.print();
    };
    return Writer;
}());
exports.Writer = Writer;
/**
 * Utilitary function to pick randomly an object from an array
 * @param {array} array
 */
function pickOne(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//# sourceMappingURL=http://localhost:4057/build/lib/writer.js.map
