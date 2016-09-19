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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
/**
 * Load json sources and cache them
 */
var VocabularyService = (function () {
    function VocabularyService(http) {
        this.http = http;
        this.resourcesPath = 'resources/vocabulary.json';
    }
    /**
     * Retrieve resources in json file or cached
     */
    VocabularyService.prototype.getVocabulary = function () {
        if (!this.resourcesCache) {
            return this.loadResources();
        }
        else {
            return Promise.resolve(this.resourcesCache);
        }
    };
    /**
     * Load from JSON file
     */
    VocabularyService.prototype.loadResources = function () {
        var _this = this;
        return this.http.get('resources/vocabulary.json').toPromise()
            .then(function (res) {
            var data = res.json();
            _this.resourcesCache = data;
            return _this.resourcesCache;
        }).catch(this.handleError);
    };
    VocabularyService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    VocabularyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VocabularyService);
    return VocabularyService;
}());
exports.VocabularyService = VocabularyService;

//# sourceMappingURL=http://localhost:4057/build/app/services/vocabulary.service.js.map
