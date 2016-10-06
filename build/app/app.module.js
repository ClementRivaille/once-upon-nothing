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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var story_maker_component_1 = require('./components/story-maker/story-maker.component');
var story_options_component_1 = require('./components/story-options/story-options.component');
var vocabulary_configuration_component_1 = require('./components/vocabulary-configuration/vocabulary-configuration.component');
var word_settings_component_1 = require('./components/word-settings/word-settings.component');
var vocabulary_service_1 = require('./services/vocabulary.service');
var map_to_iterable_pipe_1 = require('./pipes/map-to-iterable.pipe');
var capitalize_pipe_1 = require('./pipes/capitalize.pipe');
var word_label_pipe_1 = require('./pipes/word-label.pipe');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, forms_1.FormsModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, story_maker_component_1.StoryMakerComponent, story_options_component_1.StoryOptionsComponent, map_to_iterable_pipe_1.MapToIterable, capitalize_pipe_1.Capitalize, vocabulary_configuration_component_1.VocabularyConfigurationComponent, word_settings_component_1.WordSettingsComponent, word_label_pipe_1.WordLabel],
            bootstrap: [app_component_1.AppComponent],
            providers: [vocabulary_service_1.VocabularyService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=http://localhost:4057/build/app/app.module.js.map
