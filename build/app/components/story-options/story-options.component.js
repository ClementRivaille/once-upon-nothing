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
var StoryOptionsComponent = (function () {
    function StoryOptionsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], StoryOptionsComponent.prototype, "configuration", void 0);
    StoryOptionsComponent = __decorate([
        core_1.Component({
            selector: 'story-options',
            templateUrl: 'src/app/components/story-options/story-options.component.html',
            styleUrls: ['styles/css/story-options.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], StoryOptionsComponent);
    return StoryOptionsComponent;
}());
exports.StoryOptionsComponent = StoryOptionsComponent;

//# sourceMappingURL=http://localhost:4057/build/app/components/story-options/story-options.component.js.map
