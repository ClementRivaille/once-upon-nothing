"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var vocabulary_service_1 = require('../../services/vocabulary.service');
var VocabularyConfigurationComponent = (function () {
    function VocabularyConfigurationComponent(vocabularyService) {
        this.vocabularyService = vocabularyService;
        this.vocabulary = {};
        this.types = [];
        this.selectedType = '';
        this.guideLabels = {
            'subjects': 'Subjects are nouns placed at the beginning of a sentence. Since they conjugate the verb, they must declare if they do it in third person.',
            'adverbs': 'Adverbs are not strictly adverbs: they are complementing a verb in a sentence. They has to be placed before or after it.',
            'verbs': 'Verbs describe an action toward something. The have two labels: one by default, and one for third person. They can also be complemented by advebrs. Therefore, their template has to indicate where to place it if it goes before the verb ($0) or after it ($1). Some verbs can accept only one type of adverb, or even none.',
            'adjectives': 'Adjectives are not necessarily adjectives: they complement the object in the sentence. They are placed before or after it.',
            'objects': 'Objects are receivers of the action of a sentence. They can be complemented by an adjective. Thus, their template indicate where to place the adjective before ($0) and after ($1). Some objects can accept only one type of adjective, or none.',
            'details': 'Details provide context at the end of a sentence. They can be single words, or complete verbal structure.',
            'slangs': 'Slangs are silly things added at the very end of a sentence. They purpose is mostly to make it sound even more stupid.',
            'conjunctions': 'When a story use several sentences, those are linked by conjunctions. Conjuctions are placed at the very beginning of a sentence, to make a transition with the previous one.'
        };
    }
    VocabularyConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vocabularyService.getVocabulary().then(function (data) {
            _this.vocabulary = data;
            _this.types = Object.getOwnPropertyNames(_this.vocabulary);
            _this.selectedType = _this.types[0];
        });
    };
    VocabularyConfigurationComponent.prototype.addWord = function (type) {
        this.vocabulary[type].push({ label: 'new (empty)' });
    };
    VocabularyConfigurationComponent.prototype.removeWord = function (index, type) {
        this.vocabulary[type].splice(index, 1);
    };
    VocabularyConfigurationComponent = __decorate([
        core_1.Component({
            selector: 'vocabulary-config',
            templateUrl: 'src/app/components/vocabulary-configuration/vocabulary-configuration.component.html',
            styleUrls: ['styles/css/vocabulary-configuration.component.css']
        }), 
        __metadata('design:paramtypes', [vocabulary_service_1.VocabularyService])
    ], VocabularyConfigurationComponent);
    return VocabularyConfigurationComponent;
}());
exports.VocabularyConfigurationComponent = VocabularyConfigurationComponent;

//# sourceMappingURL=http://localhost:4057/build/app/components/vocabulary-configuration/vocabulary-configuration.component.js.map
