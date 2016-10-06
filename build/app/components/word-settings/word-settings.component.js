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
var word_1 = require('../../../lib/word');
var WordSettingsComponent = (function () {
    function WordSettingsComponent() {
        this.onDelete = new core_1.EventEmitter();
        this.open = 'false';
        this.deleting = 'false';
    }
    WordSettingsComponent.prototype.collapse = function () {
        this.open = this.open === 'false' ? 'true' : 'false';
    };
    WordSettingsComponent.prototype.deleteAnimation = function () {
        this.deleting = 'true';
    };
    WordSettingsComponent.prototype.delete = function () {
        if (this.deleting === 'true') {
            this.onDelete.emit();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', word_1.Template)
    ], WordSettingsComponent.prototype, "word", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WordSettingsComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WordSettingsComponent.prototype, "id", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WordSettingsComponent.prototype, "onDelete", void 0);
    WordSettingsComponent = __decorate([
        core_1.Component({
            selector: 'word-settings',
            templateUrl: 'src/app/components/word-settings/word-settings.component.html',
            styleUrls: ['styles/css/word-settings.component.css'],
            animations: [
                core_1.trigger('collapse', [
                    core_1.state('false', core_1.style({
                        'max-height': '0px',
                        transform: 'scaleY(0)'
                    })),
                    core_1.state('true', core_1.style({
                        'max-height': '160px',
                        transform: 'scaleY(1)'
                    })),
                    core_1.transition('false <=> true', core_1.animate('0.25s ease'))
                ]),
                core_1.trigger('delete', [
                    core_1.state('true', core_1.style({
                        display: 'none'
                    })),
                    core_1.transition('false => true', core_1.animate('0.25s ease', core_1.keyframes([
                        core_1.style({
                            opacity: '0',
                            transform: 'translateX(-5%)',
                            offset: 1
                        })
                    ])))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], WordSettingsComponent);
    return WordSettingsComponent;
}());
exports.WordSettingsComponent = WordSettingsComponent;

//# sourceMappingURL=http://localhost:4057/build/app/components/word-settings/word-settings.component.js.map
