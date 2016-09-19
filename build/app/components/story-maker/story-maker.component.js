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
var writer_1 = require('../../../lib/writer');
var StoryMakerComponent = (function () {
    function StoryMakerComponent(vocabularyService) {
        this.vocabularyService = vocabularyService;
        // Displayed story
        this.story = '';
        // Writer's configuration
        this.configuration = {
            nbSentences: 1,
            probabilities: {}
        };
    }
    StoryMakerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.writer = new writer_1.Writer();
        this.configuration.probabilities = this.writer.probabilities;
        // Get vocubulary resources
        this.vocabularyService.getVocabulary().then(function (vocabulary) {
            _this.writer.registerResources(vocabulary);
            // Write a first story 
            _this.writeStory();
        }).catch(function (err) {
            throw err;
        });
    };
    /**
     * Write a new story
     */
    StoryMakerComponent.prototype.writeStory = function () {
        this.story = '';
        // Write sentences
        for (var i = 0; i < this.configuration.nbSentences; i++) {
            this.story += (i > 0 ? ' ' : '') + this.writer.makePhrase(i > 0);
        }
    };
    StoryMakerComponent = __decorate([
        core_1.Component({
            selector: 'story-maker',
            templateUrl: 'src/app/components/story-maker/story-maker.component.html',
            styleUrls: ['styles/css/story-maker.component.css']
        }), 
        __metadata('design:paramtypes', [vocabulary_service_1.VocabularyService])
    ], StoryMakerComponent);
    return StoryMakerComponent;
}());
exports.StoryMakerComponent = StoryMakerComponent;

//# sourceMappingURL=http://localhost:4057/build/app/components/story-maker/story-maker.component.js.map
