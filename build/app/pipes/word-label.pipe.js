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
var WordLabel = (function () {
    function WordLabel() {
    }
    /**
     * Perform the same treatment as Template.clean()
     */
    WordLabel.prototype.transform = function (label) {
        return label
            .replace(/ ?\$[0-9]/g, '')
            .replace(/  +/g, ' ')
            .replace(/(^ )|( $)/g, '')
            .replace(/((?:^| )a) ([aeiouy])/g, '$1n $2')
            .replace(/ ([,.])/g, '$1');
    };
    WordLabel = __decorate([
        core_1.Pipe({
            name: 'wordLabel'
        }), 
        __metadata('design:paramtypes', [])
    ], WordLabel);
    return WordLabel;
}());
exports.WordLabel = WordLabel;

//# sourceMappingURL=http://localhost:4057/build/app/pipes/word-label.pipe.js.map
